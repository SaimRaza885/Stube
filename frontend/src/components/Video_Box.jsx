import Avatar_logo from "./Avatar_logo";

const Video_Box = ({ thumbnailUrl, title, logoImageUrl, ChannelName ,username}) => {
  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-xl
       shadow hover:shadow-md transition duration-300 overflow-hidden cursor-pointer hover:scale-105"
    >
      <img
        src={thumbnailUrl}
        alt={title}
        className="w-full h-44 object-cover"
      />
      <div className="p-3">
        <h3 className="font-semibold text-lg truncate dark:text-white">{title} </h3>
        <a href={`/users/c/:${username}`} className="flex items-center gap-2">
          <Avatar_logo image={logoImageUrl} />
          <h4 className="opacity-40 dark:opacity-100 dark:text-white ">{ChannelName}</h4>
        </a>
      </div>
    </div>
  );
};

export default Video_Box;
