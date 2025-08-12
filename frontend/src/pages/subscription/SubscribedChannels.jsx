import React, { useState } from "react";
import Avatar_logo from "../../components/Avatar_logo";

const initialChannels = [
  {
    id: 1,
    name: "TMOIC",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, delectus.",
    image: "http://localhost:5173/src/assets/more.jpeg",
    subscribed: true,
  },
  {
    id: 2,
    name: "Tech Insider",
    description:
      "Latest technology news, product reviews, and insightful commentary.",
    image: "http://localhost:5173/src/assets/more.jpeg",
    subscribed: false,
  },
  {
    id: 3,
    name: "Nature Now",
    description:
      "Explore wildlife, landscapes, and environmental wonders from around the globe.",
    image: "http://localhost:5173/src/assets/more.jpeg",
    subscribed: true,
  },
];

const SubscribedChannels = () => {
  const [channels, setChannels] = useState(initialChannels);

  const toggleSubscribe = (id) => {
    setChannels((prev) =>
      prev.map((channel) =>
        channel.id === id
          ? { ...channel, subscribed: !channel.subscribed }
          : channel
      )
    );
  };

  return (
    <div className="px-6 py-10">
      <h2 className="text-4xl font-extrabold mb-8">
        Subscribed Channels
      </h2>

      <div className="flex flex-col gap-4">
        {channels.map((channel) => (
          <div
            key={channel.id}
            className="flex items-center gap-6 p-4 border rounded-lg shadow-sm hover:shadow-md transition"
          >
            <Avatar_logo image={channel.image} size={150} />
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{channel.name}</h3>
              <p className="text-gray-600 text-sm">{channel.description}</p>
            </div>
            <button
              onClick={() => toggleSubscribe(channel.id)}
              className={`px-5 py-2 rounded-full font-semibold text-white transition-colors duration-500 ${
                channel.subscribed
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {channel.subscribed ? "Subscribed 🔔" : "Subscribe"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscribedChannels;
