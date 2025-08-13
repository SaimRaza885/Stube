import React, { useState } from "react";
import Avatar_logo from "../../components/Avatar_logo";
import { Images } from "../../assets/data";
import Video_Box from "../../components/Video_Box";

const GetUserChannelProfile = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [videos, setVideos] = useState([1, 2, 3, 4, 5, 6, 7]);

  return (
    <div>
      <div className="flex items-center justify-center">
        <img
          src={Images.dunmmy_CoverImage}
          alt="Cover"
          className="w-full h-[15rem] lg:h-[20rem] brightness-75 object-cover"
        />
      </div>

      <div className="flex items-center gap-6 p-4 border rounded-lg shadow-sm hover:shadow-md transition">
        <Avatar_logo image={Images.dunmmy_Logo} size={150} />
        <div className="flex-1">
          <h3 className="text-lg font-semibold">TMIC</h3>
          <p className="text-gray-600 text-sm">
            This is a channel that teaches awesome content!
          </p>
          <button
            onClick={() => setSubscribed(!subscribed)}
            className={`px-5 mt-2 py-2 rounded-full font-semibold text-white transition-colors duration-500 ${
              subscribed
                ? "bg-red-600 hover:bg-red-700"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {subscribed ? "Subscribed 🔔" : "Subscribe"}
          </button>
        </div>
      </div>

      <h2 className="p-4 text-5xl font-semibold my-4">Videos</h2>

      <main className=" px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((v, i) => (
          <Video_Box
            key={i}
            ChannelName="saim"
            logoImageUrl={Images.dunmmy_Logo}
            thumbnailUrl={Images.dunmmy_CoverImage}
            title="This is the first video"
            username="saoim"
          />
        ))}
      </main>
    </div>
  );
};

export default GetUserChannelProfile;
