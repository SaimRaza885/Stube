import { useEffect, useState } from "react";
import {
  createPlaylist,
  getUserPlaylists,
  updatePlaylist,
  deletePlaylist,
} from "./playlist_Api";
import { useLoggedIn } from "../../context/AuthContext";

export default function PlaylistManager() {
  const [playlists, setPlaylists] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState(null);

  const { toke_Value } = useLoggedIn;

  const token = toke_Value; // Replace with your auth token
  const userId = "USER_ID"; // Replace with actual logged-in user ID

  // Fetch playlists
  useEffect(() => {
    getUserPlaylists(userId, token)
      .then((res) => setPlaylists(res.data.data))
      .catch(console.error);
  }, []);

  // Handle create / update
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await updatePlaylist(editingId, { name, description }, token);
      } else {
        await createPlaylist({ name, description }, token);
      }
      const res = await getUserPlaylists(userId, token);
      setPlaylists(res.data.data);
      setName("");
      setDescription("");
      setEditingId(null);
    } catch (err) {
      console.error(err);
    }
  };

  // Handle delete
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this playlist?")) return;
    try {
      await deletePlaylist(id, token);
      setPlaylists(playlists.filter((pl) => pl._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Playlist Manager</h1>

      {/* Create / Edit Form */}
      <form onSubmit={handleSubmit} className="mb-6 space-y-3">
        <input
          type="text"
          placeholder="Playlist name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <textarea
          placeholder="Playlist description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border p-2 rounded"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {editingId ? "Update" : "Create"}
        </button>
      </form>

      {/* Playlist List */}
      <div className="space-y-4">
        {playlists.map((pl) => (
          <div
            key={pl._id}
            className="border p-4 rounded flex justify-between items-center"
          >
            <div>
              <h2 className="font-semibold">{pl.name}</h2>
              <p className="text-sm text-gray-600">{pl.description}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setEditingId(pl._id);
                  setName(pl.name);
                  setDescription(pl.description);
                }}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(pl._id)}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
