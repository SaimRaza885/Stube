import { useState, useEffect } from "react";
import { Images } from "../../assets/data";
import Video_Box from "../../components/Video_Box";
import axios from "axios";

const CurrentUser = () => {
  const [user, setUser] = useState({
    _id: "",
    username: "",
    email: "",
    fullName: "",
    avatar: "",
    coverImage: "",
    WatchHistory: [],
    createdAt: "",
    updatedAt: "",
    __v: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("/api/v1/users/current-user");
        setUser(res.data.data);
      } catch (err) {
        console.error(err);
        setError(err?.response?.data?.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="mx-7 border border-red-400">
      <div className="relative flex items-center justify-center">
        <img
          src={user.coverImage}
          alt="Cover"
          className="w-full h-[15rem] lg:h-[20rem] brightness-75 object-cover"
        />
        <img
          src={user.avatar}
          alt="Avatar"
          className="rounded-full absolute bottom-2 w-20 lg:w-28"
        />
      </div>

      {/* User Info */}
      <div className="flex items-center justify-center py-4 flex-col gap-0.5">
        <h2 className="lg:text-4xl text-2xl">{user.fullName}</h2>
        <p className="italic font-light text-gray-600">{user.email}</p>
      </div>

      {/* History Section */}
      <div className="p-4">
        <h2 className="lg:text-4xl text-2xl font-bold">Your History</h2>
        <div className="py-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Video_Box
            ChannelName="TMIUC"
            logoImageUrl={Images.dunmmy_Logo}
            thumbnailUrl={Images.dunmmy_CoverImage}
            title="this is good"
            username={"saoim"}
          />
        </div>
      </div>
    </div>
  );
};

export default CurrentUser;
