import { Images } from "../../assets/data";
import Video_Box from "../../components/Video_Box";
const CurrentUser = () => {
  // api route /current-user
  return (
    <div className="mx-7 border border-red-400 ">
      <div className="relative  flex items-center justify-center ">
        <img
          src={Images.dunmmy_CoverImage}
          alt=""
          className="w-full h-[15rem] lg:h-[20rem] brightness-75  object-cover"
        />
        <img
          src={Images.dunmmy_Logo}
          alt=""
          className="rounded-full absolute bottom-2  w-20 lg:w-28"
        />
      </div>
      {/* blow area */}
      <div className="flex items-center justify-center py-4 flex-col gap-0.5">
        <h2 className="lg:text-4xl text-2xl   ">Ali Rehmat</h2>
        <p className="italic font-light text-gray-600 ">ali@gmail.com</p>
      </div>

      {/* History SEction */}
      <div className="p-4">
        <h2 className="lg:text-4xl text-2xl font-bold">Your History</h2>
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

export default CurrentUser;
