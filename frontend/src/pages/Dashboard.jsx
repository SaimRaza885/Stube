import React from "react";
import Video_Box from "../components/Video_Box";
import { Images } from "../assets/data";

const Dashboard = () => {
  return (
    <div className="mx-7 px-4 border">
      <h2 className=" lg:text-8xl md:text-7xl text-5xl text-center font-extrabold">
        Dashboard
      </h2>
      <div className="py-10">
        {/* stats */}
        <div className="mb-5">
          <h2 className="lg:text-5xl text-3xl font-bold">Stats :</h2>
          <div className="flex items-center justify-start gap-2 p-2 py-6">
            {/* icon box */}
            <div className=" px-4 py-5 bg-amber-100/45  rounded-md border-orange-400 shadow-2xl">
              <h4 className="text-2xl">Total Views : <span className="font-bold"> 90K</span></h4>
            </div>
            <div className=" px-4 py-5 bg-amber-100/45  rounded-md border-orange-400 shadow-2xl">
              <h4 className="text-2xl">Total Likes : <span className="font-bold"> 9K</span></h4>
            </div>
          </div>
        </div>
        {/* Vidoes */}
        <h2 className="lg:text-5xl text-3xl font-bold">Uploaded Videos :</h2>

        {/* data will be looped */}
        <div className=" py-7  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6">
          <Video_Box
            ChannelName={"TMIUC"}
            logoImageUrl={Images.dunmmy_Logo}
            thumbnailUrl={Images.dunmmy_CoverImage}
            title={"this is good"}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
