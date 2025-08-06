// src/components/ChannelStats.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ChannelStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get('/api/v1/dashboard/stats', {
          withCredentials: true,
        });
        setStats(res.data.data);
      } catch (err) {
        console.error('Error fetching stats:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading) return <p className="text-center text-gray-500 text-8xl mt-10 animate-pulse">Loading stats...</p>;
  if (!stats) return <p className="text-center text-red-500 text-8xl mt-10">Failed to load stats</p>;

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">📊 Channel Stats</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className=" bg-blue-100 p-4 rounded-lg">
          <p className="text-lg font-semibold">{stats.totalSubscribers}</p>
          <p className="text-sm text-gray-600">Subscribers</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <p className="text-lg font-semibold">{stats.totalVideos}</p>
          <p className="text-sm text-gray-600">Videos</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg">
          <p className="text-lg font-semibold">{stats.totalViews}</p>
          <p className="text-sm text-gray-600">Views</p>
        </div>
        <div className="bg-pink-100 p-4 rounded-lg">
          <p className="text-lg font-semibold">{stats.totalLikes}</p>
          <p className="text-sm text-gray-600">Likes</p>
        </div>
      </div>
    </div>
  );
};

export default ChannelStats;
