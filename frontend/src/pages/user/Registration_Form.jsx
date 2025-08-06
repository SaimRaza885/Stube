import { useState } from "react";
import axios from "axios";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
  });
  const [avatar, setAvatar] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({ success: "", error: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === "avatar") setAvatar(files[0]);
    if (name === "coverImage") setCoverImage(files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse({ success: "", error: "" });

    try {
      const form = new FormData();
      Object.entries(formData).forEach(([key, value]) => form.append(key, value));
      if (avatar) form.append("avatar", avatar);
      if (coverImage) form.append("coverImage", coverImage);

      const { data } = await axios.post("http://localhost:5000/api/v1/users/register", form, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true, // include if using cookies/tokens
      });

      setResponse({ success: data?.message || "Registered successfully!", error: "" });
      setFormData({ fullName: "", email: "", username: "", password: "" });
      setAvatar(null);
      setCoverImage(null);
    } catch (err) {
      const msg = err?.response?.data?.message || "Something went wrong";
      setResponse({ success: "", error: msg });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-xl text-gray-800 dark:text-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          className="w-full p-3 rounded bg-zinc-100 dark:bg-zinc-800"
          value={formData.fullName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-full p-3 rounded bg-zinc-100 dark:bg-zinc-800"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-3 rounded bg-zinc-100 dark:bg-zinc-800"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-3 rounded bg-zinc-100 dark:bg-zinc-800"
          value={formData.password}
          onChange={handleChange}
        />

        <div className="space-y-2">
          <label className="block">Avatar (Required)</label>
          <input
            type="file"
            name="avatar"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500 file:bg-zinc-300 dark:file:bg-zinc-700 file:rounded file:px-4 file:py-2"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block">Cover Image (Optional)</label>
          <input
            type="file"
            name="coverImage"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500 file:bg-zinc-300 dark:file:bg-zinc-700 file:rounded file:px-4 file:py-2"
          />
        </div>

        {response.success && <p className="text-green-500">{response.success}</p>}
        {response.error && <p className="text-red-500">{response.error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded disabled:opacity-50"
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
