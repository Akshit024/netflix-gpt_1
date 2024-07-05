import React, { useEffect, useState } from "react";
import { API_OPTION } from "../utils/constants";

const VideoBackground = ({ movieId }) => {
  const [videoKey, setVideoKey] = useState(null);

  const getMovieVideos = async () => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US&api_key=YOUR_TMDB_API_KEY`;
    const data = await fetch(url, API_OPTION);
    const json = await data.json();

    // Filter and get the first video with type "Trailer"
    const filterData = json.results.filter((video) => video.type == "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    setVideoKey(trailer.key);
  };

  useEffect(() => {
    getMovieVideos();
  }, []);

  return (
    <div>
       <iframe
          className="w-screen aspect-video"
          src={"https://www.youtube.com/embed/"+videoKey+"?&autoplay=1&mute=1"}
          title="YouTube Video"
          allowFullScreen
        ></iframe>
    </div>
  );
};

export default VideoBackground;
