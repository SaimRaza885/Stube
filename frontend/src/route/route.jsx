import { lazy } from "react";

// Lazy-loaded pages
const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const RegistrationForm = lazy(() => import("../pages/user/Registration_Form"));
const RefreshToken = lazy(() => import("../pages/user/RefreshToken"));
const NotFound = lazy(() => import("../pages/NotFound"));

const Dashboard = lazy(() => import("../pages/Dashboard"));
const Logout = lazy(() => import("../pages/user/Logout"));
const ChangePassword = lazy(() => import("../pages/user/ChangePassword"));
const CurrentUser = lazy(() => import("../pages/user/CurrentUser"));
const UpdateAccount = lazy(() => import("../pages/user/UpdateAccount"));
const AvatarChange = lazy(() => import("../pages/user/AvatarChange"));
const CoverImage = lazy(() => import("../pages/user/CoverImage"));
const GetUserChannelProfile = lazy(() => import("../pages/user/GetUserChannelProfile"));
const UserHistory = lazy(() => import("../pages/user/UserHistory"));

const VideoOperations = lazy(() => import("../pages/video/VideoOperations"));
const TogglePublishedStatus = lazy(() => import("../pages/video/TogglePublishedStatus"));

const GetAddComment = lazy(() => import("../pages/comment/GetAddComment"));
const UpdateComment = lazy(() => import("../pages/comment/UpdateComment"));

const CreatePlaylist = lazy(() => import("../pages/playlist/CreatePlaylist"));
const UpdatePlaylist = lazy(() => import("../pages/playlist/UpdatePlaylist"));
const PlaylistDetails = lazy(() => import("../pages/playlist/PlaylistDetails"));

const LikedVideos = lazy(() => import("../pages/like/LikedVideos"));

const SubscribedChannels = lazy(() => import("../pages/subscription/SubscribedChannels"));
const ChannelSubscribers = lazy(() => import("../pages/subscription/ChannelSubscribers"));

const Stats = lazy(() => import("../pages/dashboard/Stats"));
const Videos = lazy(() => import("../pages/dashboard/videos"));

const routes = [
  // Public Routes
  { path: "/", element: <Home />, isPrivate: false },
  { path: "/login", element: <Login />, isPrivate: false },
  { path: "/register", element: <RegistrationForm />, isPrivate: false },
  { path: "/refresh-token", element: <RefreshToken />, isPrivate: false },
  { path: "*", element: <NotFound />, isPrivate: false },

  // Protected Routes
  { path: "/users/dashboard", element: <Dashboard />, isPrivate: true },
  { path: "/users/logout", element: <Logout />, isPrivate: true },
  { path: "/users/change-password", element: <ChangePassword />, isPrivate: true },
  { path: "/users/current-user", element: <CurrentUser />, isPrivate: true },
  { path: "/users/update-account", element: <UpdateAccount />, isPrivate: true },
  { path: "/users/avatar", element: <AvatarChange />, isPrivate: true },
  { path: "/users/cover-image", element: <CoverImage />, isPrivate: true },
  { path: "/users/c/:username", element: <GetUserChannelProfile />, isPrivate: true },
  { path: "/users/history", element: <UserHistory />, isPrivate: true },

  { path: "/videos/:videoId", element: <VideoOperations />, isPrivate: true },
  { path: "/videos/toggle/publish/:videoId", element: <TogglePublishedStatus />, isPrivate: true },

  { path: "/comments/:videoId", element: <GetAddComment />, isPrivate: true },
  { path: "/comments/update/:commentId", element: <UpdateComment />, isPrivate: true },

  { path: "/playlist/create", element: <CreatePlaylist />, isPrivate: true },
  { path: "/playlist/:playlistId", element: <PlaylistDetails />, isPrivate: true },
  { path: "/playlist/update/:playlistId", element: <UpdatePlaylist />, isPrivate: true },

  { path: "/likes/videos", element: <LikedVideos />, isPrivate: true },

  { path: "/subscriptions/subscribed/c/:channelId", element: <SubscribedChannels />, isPrivate: true },
  { path: "/subscriptions/subscribers/u/:subscriberId", element: <ChannelSubscribers />, isPrivate: true },

  { path: "/dashboard/stats", element: <Stats />, isPrivate: true },
  { path: "/dashboard/videos", element: <Videos />, isPrivate: true },
];

export default routes;
