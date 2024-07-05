import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-6 md:px-24 absolute bg-gradient-to-r from-black">
      <h1 className="text-1xl md:text-3xl md:font-bold w-1/2 md:w-1/4 text-white">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4 text-white">{overview}</p>
      <div className="flex">
        <button className="bg-white text-black px-3 py-1 md:p-3 md:w-36 md:text-xl rounded md:rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button className="hidden md:inline-block  bg-gray-500 text-white p-3 w-36 text-lg bg-opacity-50 rounded-lg mx-3 hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
