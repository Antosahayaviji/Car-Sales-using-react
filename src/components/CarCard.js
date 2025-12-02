import React from "react";
import { useNavigate } from "react-router-dom";

function CarCard({ car }) {
  const navigate = useNavigate();

  // Fallback image if car.image fails to load
  const handleError = (e) => {
    e.target.src = "/cars/fallback.jpg"; // Make sure fallback.jpg exists in public/cars/
  };

  return (
    <div className="group relative rounded-xl overflow-hidden bg-white shadow hover:shadow-md transition">
      {/* Image section */}
      <div className="w-full h-52 sm:h-60 relative">
        <img
          src={car.image}
          alt={car.name}
          onError={handleError}
          className="w-full h-full object-cover"
        />

        {/* Top-center: model & price */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded">
          <div className="text-sm font-semibold text-center">{car.name}</div>
          <div className="text-xs text-center">
            ₹{car.price.toLocaleString("en-IN")}
          </div>
        </div>

        {/* Bottom overlays */}
        <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
          {car.transmission}
        </div>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-2 py-1 rounded">
          {car.seats} seats
        </div>
        <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
          {car.fuel}
        </div>

        {/* Buy Now button on hover */}
        <button
          onClick={() => navigate(`/car/${car.id}`)}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default CarCard;
