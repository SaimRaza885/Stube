// src/routes.js
import { lazy } from "react";

// Core Pages
const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const NotFound = lazy(() => import("../pages/NotFound"));

// User Auth Pages
const Registration_Form = lazy(() => import("../pages/user/Registration_Form"));
const Logout = lazy(() => import("../pages/user/Logout"));
const RefreshToken = lazy(() => import("../pages/user/RefreshToken"));
const ChangePassword = lazy(() => import("../pages/user/ChangePassword"));
const CurrentUser = lazy(() => import("../pages/user/CurrentUser"));
const UpdateAccount = lazy(() => import("../pages/user/UpdateAccount"));
const AvatarChange = lazy(() => import("../pages/user/AvatarChange"));
const CoverImage = lazy(() => import("../pages/user/CoverImage"));
const GetUserChannelProfile = lazy(() =>
  import("../pages/user/GetUserChannelProfile")
);
const UserHistory = lazy(() => import("../pages/user/UserHistory"));

// Video Pages
const VideoOperations = lazy(() => import("../pages/video/VideoOperations"));
const TogglePublishedStatus = lazy(() =>
  import("../pages/video/TogglePublishedStatus")
);

// Comment Pages
const GetAddComment = lazy(() => import("../pages/comment/GetAddComment"));
const UpdateComment = lazy(() => import("../pages/comment/UpdateComment"));

// Playlist Pages
const CreatePlaylist = lazy(() => import("../pages/playlist/CreatePlaylist"));
const UpdatePlaylist = lazy(() => import("../pages/playlist/UpdatePlaylist"));
const PlaylistDetails = lazy(() => import("../pages/playlist/PlaylistDetails"));

// Like Pages
const LikedVideos = lazy(() => import("../pages/like/LikedVideos"));

// Subscription Pages
const SubscribedChannels = lazy(() =>
  import("../pages/subscription/SubscribedChannels")
);
const ChannelSubscribers = lazy(() =>
  import("../pages/subscription/ChannelSubscribers")
);

// Dashboard
const Stats = lazy(() => import("../pages/dashboard/Stats"));
const Videos = lazy(() => import("../pages/dashboard/videos"));

const routes = [
  // Public Routes
  { path: "/", element: <Home />, isPrivate: false },
  { path: "/login", element: <Login />, isPrivate: false },
  { path: "/register", element: <Registration_Form />, isPrivate: false },
  { path: "/refresh-token", element: <RefreshToken />, isPrivate: false },
  { path: "*", element: <NotFound />, isPrivate: false },

  // Protected Routes (require authentication)
  { path: "/dashboard", element: <Dashboard />, isPrivate: true },
  { path: "/logout", element: <Logout />, isPrivate: true },
  { path: "/change-password", element: <ChangePassword />, isPrivate: true },
  { path: "/current-user", element: <CurrentUser />, isPrivate: true },
  { path: "/update-account", element: <UpdateAccount />, isPrivate: true },
  { path: "/avatar", element: <AvatarChange />, isPrivate: true },
  { path: "/cover-image", element: <CoverImage />, isPrivate: true },
  { path: "/c/:username", element: <GetUserChannelProfile />, isPrivate: true },
  { path: "/history", element: <UserHistory />, isPrivate: true },

  // Video
  { path: "/:videoId", element: <VideoOperations />, isPrivate: true },
  {
    path: "/toggle/publish/:videoId",
    element: <TogglePublishedStatus />,
    isPrivate: true,
  },

  // Comments
  { path: "/comments/:videoId", element: <GetAddComment />, isPrivate: true },
  {
    path: "/comments/update/:commentId",
    element: <UpdateComment />,
    isPrivate: true,
  },

  // Playlists
  { path: "/playlist/create", element: <CreatePlaylist />, isPrivate: true },
  {
    path: "/playlist/:playlistId",
    element: <PlaylistDetails />,
    isPrivate: true,
  },
  {
    path: "/playlist/update/:playlistId",
    element: <UpdatePlaylist />,
    isPrivate: true,
  },

  // Likes
  { path: "/likes/videos", element: <LikedVideos />, isPrivate: true },

  // Subscriptions
  {
    path: "/subscribed/c/:channelId",
    element: <SubscribedChannels />,
    isPrivate: true,
  },
  {
    path: "/subscribers/u/:subscriberId",
    element: <ChannelSubscribers />,
    isPrivate: true,
  },

  // Dashboard
  { path: "/dashboard/stats", element: <Stats />, isPrivate: true },
  { path: "/dashboard/videos", element: <Videos />, isPrivate: true },
];

export default routes;
