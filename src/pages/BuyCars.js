// src/pages/BuyCars.js
import React from "react";
import { CARS } from "../data/cars";
import CarCard from "../components/CarCard";

function BuyCars() {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/background1.gif')", // ✅ GIF from public folder
      }}
    >
      {/* 🌫️ Overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40" />

      {/* 🚗 Car Listings */}
      <div className="relative z-10 w-full flex flex-col items-center px-4 py-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-white drop-shadow-lg">
          Recent Available Cars
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
          {CARS.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BuyCars;
