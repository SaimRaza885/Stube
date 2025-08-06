import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UploadedVideos = () => {
  const [videos, setVideos] = useState(null); // ← initially null
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get('/api/v1/dashboard/videos', {
          withCredentials: true,
        });
        setVideos(res.data?.data || []); // Safe fallback
      } catch (err) {
        console.error('Error fetching videos:', err);
        setVideos([]); // fallback to empty array
      } finally {
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading videos...</p>;
  if (!Array.isArray(videos) || videos.length === 0)
    return <p className="text-center text-gray-400 text-8xl mt-10">No videos uploaded yet.</p>;
  

  return (
    <div className="p-4 bg-white shadow-md rounded-lg mt-6">
      <h2 className="text-xl font-bold mb-4">📹 Uploaded Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((video) => (
          <div key={video._id} className="bg-gray-50 rounded-lg overflow-hidden shadow">
            <img
              src={video?.thumbnail?.url || '/placeholder.jpg'}
              alt="Thumbnail"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-md font-semibold truncate">{video.title}</h3>
              <p className="text-sm text-gray-600">{video.description?.slice(0, 60)}...</p>
              <div className="mt-2 text-sm text-gray-500">
                <span>Likes: {video.likesCount}</span>
                <span className="ml-4">Published: {video.isPublished ? "✅" : "❌"}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadedVideos;
