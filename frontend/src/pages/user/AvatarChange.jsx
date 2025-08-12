import React, { useState } from "react";

const AvatarChange = () => {
  const [avatar, setAvatar] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    if (avatar) {
      console.log("New avatar selected:", avatar);
      // Upload logic here
      alert("✅ Avatar updated successfully!");
    } else {
      alert("⚠ Please select an image first.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-xl text-center border border-gray-200 mt-10">
      <h2 className="text-2xl font-bold mb-6">Change Profile Picture</h2>

      {/* Avatar Preview */}
      <div className="relative inline-block mb-6">
        <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-gray-300 shadow-md">
          {preview ? (
            <img
              src={preview}
              alt="Avatar Preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full text-gray-400 bg-gray-100 text-lg">
              No Image
            </div>
          )}
        </div>
        {/* Change Icon */}
        <label
          htmlFor="avatarInput"
          className="absolute bottom-0 right-0 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full cursor-pointer shadow-lg transition-colors"
        >
          📷
        </label>
        <input
          id="avatarInput"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 justify-center">
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold shadow-md transition-colors"
        >
          Save
        </button>
        <button
          onClick={() => {
            setAvatar(null);
            setPreview(null);
          }}
          className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full font-semibold shadow-md transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AvatarChange;
