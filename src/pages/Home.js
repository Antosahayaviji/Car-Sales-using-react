// src/pages/Home.js
import React from "react";
import Carousel from "../components/Carousel";
import { HOME_IMAGES } from "../data/cars";

function Home() {
  return (
    <div
      className="relative w-full min-h-screen overflow-hidden bg-cover bg-center animate-pan"
      style={{
        backgroundImage: "url('/background3.gif')",
      }}
    >
      {/* 🌫️ Overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30" />

      {/* 🧱 Content Layer */}
      <div className="relative z-10 w-full flex flex-col items-center text-center min-h-screen justify-center px-4">
        {/* 🚗 Carousel Section */}
        <div className="w-full max-w-7xl mb-8 flex justify-center">
          <Carousel images={HOME_IMAGES} />
        </div>

        {/* 🔥 Promotional Text */}
        <div className="animate-blink text-4xl sm:text-5xl font-bold text-yellow-400 drop-shadow-lg mb-6 font-cursive">
          Offer upto 10%
        </div>

        {/* 🚗 New Model Text */}
        <div className="animate-bounceText text-3xl sm:text-4xl text-lime-300 drop-shadow-lg font-bold mb-6">
          A new model Coming soon...
        </div>

        {/* 🖼️ Featured Car Image */}
        <div className="w-full max-w-3xl">
          <img
            src="/homee.jpg"
            alt="Coming soon model"
            className="w-full h-80 object-cover rounded-lg shadow"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
