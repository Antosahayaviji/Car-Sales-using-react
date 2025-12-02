// src/components/Carousel.js
import React, { useEffect, useRef } from "react";

function Carousel({ images = [] }) {
  const trackRef = useRef(null);
  const list = [...images, ...images]; // duplicate for seamless scroll

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onEnter = () => (el.style.animationPlayState = "paused");
    const onLeave = () => (el.style.animationPlayState = "running");
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden flex justify-center">
      <div
        ref={trackRef}
        className="flex gap-6 animate-marquee"
        style={{ width: "200%" }}
      >
        {list.map((src, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-80 h-52 sm:w-96 sm:h-60 md:w-[28rem] md:h-[16rem] rounded-lg overflow-hidden shadow bg-white mx-3"
          >
            <img src={src} alt={`Car ${idx}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
