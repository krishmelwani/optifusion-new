import { useState, useRef } from "react";
import { PlayCircle, PauseCircle } from "lucide-react";
import demoVideo from "../../public/companyLogo/video .mp4";

export default function WatchDemo() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center p-5 px-6 ">
      {/* Background glow / stars */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black z-0"></div>

      <div className="relative   max-w-3xl w-full text-center mt-96">
        {/* Heading */}
        <h1 className="text-3xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
          Watch Our Demo
        </h1>
        <p className="mt-3 text-lg text-gray-300 mb-4 max-w-2xl mx-auto">
          <span className="text-purple-400 font-semibold">Discover how our platform simplifies and streamlines your hiring process</span>.
        </p>

        {/* Video Section */}
        <div className="relative mt-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-800 ">
          <video
            ref={videoRef}
            className="max-w-[40vw] h-[380px] object-cover"
            src={demoVideo}
          />
          {/* Overlay Play/Pause */}
          <button
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/60 transition"
          >
            {isPlaying ? (
              <PauseCircle className="w-10 h-10 md:w-20 md:h-20 text-white drop-shadow-lg" />
            ) : (
              <PlayCircle className="w-10 h-10 md:w-20 md:h-20 text-white drop-shadow-lg" />
            )}
          </button>
        </div>

        {/* Call To Action */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-white">
            Ready to experience the future of hiring?
          </h2>
          <p className="text-gray-400 mt-2 mb-3">
            Watch this short demo and see how we simplify your talent acquisition process.
          </p>
          <button className="mt-5 px-8 py-3 btn-primary text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition">
           Book Demo
          </button>
        </div>
      </div>
    </div>
  );
}
