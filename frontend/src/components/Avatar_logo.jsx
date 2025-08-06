const Avatar_logo = ({ image, size = 48 }) => {
  return (
    <div
      className="rounded-full overflow-hidden"
      style={{ width: size, height: size }}
    >
      <img
        src={image}
        alt="User avatar"
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
};

export default Avatar_logo;
