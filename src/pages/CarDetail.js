import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CARS } from "../data/cars";
import RatingStars from "../components/RatingStars";
import Reviews from "../components/Reviews";

const COLORS = ["red", "blue", "black", "white"];

function CarDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = useMemo(() => CARS.find(c => c.id === Number(id)), [id]);
  const [idx, setIdx] = useState(0);

  if (!car) {
    return <div className="text-center">Car not found.</div>;
  }

  const currentColor = COLORS[idx];
  const imageSrc = car.colors[currentColor] || car.image;

  const prev = () => setIdx(i => (i - 1 + COLORS.length) % COLORS.length);
  const next = () => setIdx(i => (i + 1) % COLORS.length);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-center">
      {/* Left: image */}
      <div className="flex flex-col items-center w-full">
        <div className="relative w-full max-w-xl h-80 sm:h-96 md:h-[28rem] rounded-xl overflow-hidden shadow bg-white">
          <img src={imageSrc} alt={`${car.name} - ${currentColor}`} className="w-full h-full object-cover" />

          {/* Overlays */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded">
            <div className="text-base font-semibold text-center">{car.name}</div>
            <div className="text-sm text-center">₹{car.price.toLocaleString("en-IN")}</div>
          </div>
          <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">{car.transmission}</div>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-2 py-1 rounded">{car.seats} seats</div>
          <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">{car.fuel}</div>

          {/* Arrows */}
          <button onClick={prev} className="absolute top-1/2 -translate-y-1/2 left-2 bg-black/50 text-white w-9 h-9 rounded-full">‹</button>
          <button onClick={next} className="absolute top-1/2 -translate-y-1/2 right-2 bg-black/50 text-white w-9 h-9 rounded-full">›</button>
        </div>

        {/* Color indicators */}
        <div className="mt-4 flex items-center gap-3">
          {COLORS.map((c, i) => (
            <button
              key={c}
              onClick={() => setIdx(i)}
              className={`w-8 h-8 rounded-full border-2 ${idx === i ? "border-blue-600" : "border-gray-300"}`}
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
      </div>

      {/* Right: description */}
      <div className="w-full flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold">{car.name}</h2>
        <p className="mt-1 text-lg font-semibold text-blue-700">₹{car.price.toLocaleString("en-IN")}</p>

        <div className="mt-3">
          <RatingStars value={Math.round(car.rating)} />
        </div>

        <p className="mt-4 max-w-xl text-gray-700">
          {car.name} blends performance and comfort with reliable {car.fuel} powertrain, {car.transmission.toLowerCase()} transmission, and {car.seats} seats.
        </p>

        <div className="mt-6 w-full max-w-xl">
          <h3 className="font-semibold mb-2">Reviews</h3>
          <Reviews items={car.reviews} />
        </div>

        {/* Book order button */}
        <button
          onClick={() => navigate(`/book/${car.id}`)}
          className="mt-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Book your Order
        </button>
      </div>
    </div>
  );
}

export default CarDetail;
