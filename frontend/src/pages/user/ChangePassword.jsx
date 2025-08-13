import { useState } from "react";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [oldpassword, setOldPassword] = useState(null);
  const [newpassword, setNewPassword] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (oldpassword && newpassword ) {
      setTimeout(() => {
        alert("password changed success fuly");
      }, 2000);
    }
    setLoading(false)
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black px-4">
      <div className="bg-white dark:bg-zinc-900 shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-zinc-800 dark:text-white">
          Change your Password
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              old Password
            </label>
            <input
              type="password"
              name="password"
              value={oldpassword}
              onChange={(e)=>setOldPassword(e.target.value)}
              className="mt-1 w-full px-4 py-2 border rounded-md bg-zinc-50 dark:bg-zinc-800 dark:text-white dark:border-zinc-700"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              new Password
            </label>
            <input
              type="password"
              name="password"
              value={newpassword}
              onChange={(e)=>setNewPassword(e.target.value)}
              className="mt-1 w-full px-4 py-2 border rounded-md bg-zinc-50 dark:bg-zinc-800 dark:text-white dark:border-zinc-700"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-150"
          >
            {loading ? " ,,,," : "change"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
