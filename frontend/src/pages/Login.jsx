import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLoggedIn } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useLoggedIn();
  const [formData, setFormData] = useState({
    emailOrUsername: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const payload = formData.emailOrUsername.includes("@")
        ? { email: formData.emailOrUsername, password: formData.password }
        : { username: formData.emailOrUsername, password: formData.password };

      const res = await axios.post("api/v1/users/login", payload, {
        withCredentials: true,
      });

      const login_token = localStorage.setItem(
        "token",
        res.data.data.accessToken
      );

      setIsAuthenticated(login_token);

      console.log(res.data);
      navigate("/");
    } catch (err) {
      console.error(err);
      setError(err?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black px-4">
      <div className="bg-white dark:bg-zinc-900 shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-zinc-800 dark:text-white">
          Login to your account
        </h2>

        {error && <p className="text-red-600 mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Email or Username
            </label>
            <input
              type="text"
              name="emailOrUsername"
              value={formData.emailOrUsername}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md bg-zinc-50 dark:bg-zinc-800 dark:text-white dark:border-zinc-700"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md bg-zinc-50 dark:bg-zinc-800 dark:text-white dark:border-zinc-700"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-150"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
