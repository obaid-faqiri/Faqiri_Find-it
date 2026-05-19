// src/sections/hero/HeroSection.tsx
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { heroData } from "./heroSectionData"; // Import hero data
import { Link } from "react-router-dom";
import video from "../../assets/videos/1.mp4"; // Video source
import { FaPlay, FaStar } from "react-icons/fa"; // Play and Star icons

const HeroSection = () => {
  // Video ref for controlling play/pause
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false); // Track play state

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause(); // Pause the video
      } else {
        videoRef.current.play(); // Play the video
      }
      setIsPlaying(!isPlaying); // Toggle play state
    }
  };

  return (
    <section className="relative w-full px-6 py-8 mt-20 bg-gray-100 md:py-12 md:px-12">
      {" "}
      {/* Added mt-20 for top margin */}
      {/* Tagline with Star Icon */}
      <div className="flex items-center px-4 py-2 mx-auto mb-6 bg-gray-200 rounded-full max-w-max mt-11">
        <div className="flex items-center justify-center w-8 h-8 mr-3 text-white bg-black rounded-full">
          <FaStar className="w-4 h-4" /> {/* Star Icon */}
        </div>
        <span className="text-base font-semibold text-gray-900">
          {heroData.tagline}
        </span>
      </div>
      {/* Text Content */}
      <div className="max-w-2xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10 text-4xl font-medium text-gray-900 md:text-7xl"
        >
          {heroData.headline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl mx-auto mb-12 text-xl text-gray-700 "
        >
          {heroData.description}
        </motion.p>
        {/* Buttons */}
        <div className="flex justify-center gap-6">
          {heroData.buttons.map((btn, i) => (
            <Link
              key={i}
              to={btn.href}
              className={`px-8 py-4 font-semibold text-sm rounded-full border-2 border-black transition-colors duration-300 ${
                i === 0
                  ? "bg-black text-white hover:bg-white hover:text-black"
                  : "bg-white text-black hover:bg-black hover:text-white"
              }`}
            >
              {btn.label}
            </Link>
          ))}
        </div>
      </div>
      {/* Video Section */}
      <div className="relative w-full h-[500px] mt-16">
        <video
          ref={videoRef}
          className="object-cover w-full h-full rounded-lg shadow-lg "
          src={video}
          muted
          playsInline
        />
        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className="absolute inset-0 flex items-center justify-center text-5xl text-white"
        >
          <FaPlay /> {/* Use only Play Icon */}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
