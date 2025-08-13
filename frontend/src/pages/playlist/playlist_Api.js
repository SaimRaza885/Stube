// playlistApi.js
import axios from "axios";

const API_BASE = "/api/v1/playlists"; // change to your backend URL

export const createPlaylist = (data, token) =>
  axios.post(API_BASE, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getUserPlaylists = (userId, token) =>
  axios.get(`${API_BASE}/user/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getPlaylistById = (playlistId, token) =>
  axios.get(`${API_BASE}/${playlistId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const updatePlaylist = (playlistId, data, token) =>
  axios.patch(`${API_BASE}/${playlistId}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const deletePlaylist = (playlistId, token) =>
  axios.delete(`${API_BASE}/${playlistId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
