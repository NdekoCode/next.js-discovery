"use client";
import { useRef, useState } from "react";
const music = () => {
  const [isPlaying, setIsplaying] = useState(false);
  const audioRef = useRef(null);
  const handlePlayOrPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsplaying(!isPlaying);
  };
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div
          className="bg-white rounded-lg shadow-lg"
          style={{ width: "45rem !important" }}
        >
          <div className="flex">
            <div>
              <img
                className="hidden w-full rounded md:block"
                src="music-cover.jpg"
                alt="Album Pic"
              />
            </div>
            <div className="w-full p-8">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-2xl font-medium text-gray-700">
                    A Sky Full of Stars
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">Ghost Stories</p>
                </div>
                <div className="text-red-lighter">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" />
                  </svg>
                </div>
              </div>
              <div className="flex items-center justify-between mt-8">
                <div className="text-gray-800">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.59 12.83L4.4 15c-.58.58-1.59 1-2.4 1H0v-2h2c.29 0 .8-.2 1-.41l2.17-2.18 1.42 1.42zM16 4V1l4 4-4 4V6h-2c-.29 0-.8.2-1 .41l-2.17 2.18L9.4 7.17 11.6 5c.58-.58 1.59-1 2.41-1h2zm0 10v-3l4 4-4 4v-3h-2c-.82 0-1.83-.42-2.41-1l-8.6-8.59C2.8 6.21 2.3 6 2 6H0V4h2c.82 0 1.83.42 2.41 1l8.6 8.59c.2.2.7.41.99.41h2z" />
                  </svg>
                </div>
                <div className="text-gray-800">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 5h3v10H4V5zm12 0v10l-9-5 9-5z" />
                  </svg>
                </div>
                <button
                  onClick={handlePlayOrPause}
                  className="p-8 text-white bg-red-300 rounded-full shadow-lg"
                >
                  {isPlaying ? (
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M16.75 10.83L4.55 19A1 1 0 0 1 3 18.13V1.87A1 1 0 0 1 4.55 1l12.2 8.13a1 1 0 0 1 0 1.7z"
                      />
                    </svg>
                  )}
                </button>
                <div className="text-gray-800">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 5h3v10h-3V5zM4 5l9 5-9 5V5z" />
                  </svg>
                </div>
                <div className="text-gray-800">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5 4a2 2 0 0 0-2 2v6H0l4 4 4-4H5V6h7l2-2H5zm10 4h-3l4-4 4 4h-3v6a2 2 0 0 1-2 2H6l2-2h7V8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="py-4 mx-8">
            <div className="flex justify-between text-sm text-gray-600">
              <p>0:40</p>
              <p>4:20</p>
            </div>
            <div className="mt-1">
              <div className="h-1 bg-gray-800 rounded-full">
                <div className="relative w-1/5 h-1 bg-red-400 rounded-full">
                  <span className="absolute w-4 h-4 -mb-1 bg-red-600 rounded-full shadow pin-r pin-b" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <audio
        ref={audioRef}
        src="music.mp3"
        className="nativeAudioPlayer"
        controls
      ></audio>
    </div>
  );
};
export default music;
