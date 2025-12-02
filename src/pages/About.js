// src/pages/About.js
import React from "react";

function About() {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/background5.gif')", // ✅ Cherry blossom GIF
      }}
    >
      {/* 🌫️ Darker overlay for reduced background brightness */}
      <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-50" />

      {/* 🧱 Content Layer */}
      <div className="relative z-10 w-full flex flex-col items-center text-center min-h-screen justify-center px-4 py-10 font-[cursive]">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-8 text-red drop-shadow-lg">
          About Our Website
        </h1>
      
        <div className="max-w-3xl text-gray-900 space-y-6 text-left text-xl sm:text-2xl font-bold">
          <p><span className="font-extrabold">Started:</span> 2020 in Tenkasi.</p>
          <p><span className="font-extrabold">Customers:</span> Over 10 lakh buyers have chosen cars through our platform.</p>
          <p className="font-extrabold">Our website offers:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Detailed Vehicle Information: specs, high-quality photos/videos, mileage, and condition.</li>
            <li>Vehicle History Reports: RTO transaction history, ownership details, service records, insurance claims, accident history.</li>
            <li>Car Valuation Tools: determine current market value for buying or selling.</li>
            <li>Test Drive Booking: request and schedule test drives, even at your home.</li>
          </ul>
          <p>We continue to expand services to make car buying transparent, reliable, and enjoyable for every customer.</p>
        </div>

        {/* 🔗 Social Media Icons */}
        <div className="mt-12 flex items-center justify-center gap-6">
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg"
              alt="WhatsApp"
              className="w-9 h-9 hover:scale-110 transition-transform"
            />
          </a>

          <a
            href="https://www.facebook.com/BuyCarOfficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg"
              alt="Facebook"
              className="w-9 h-9 hover:scale-110 transition-transform"
            />
          </a>

          <a
            href="https://www.instagram.com/buycar.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
              alt="Instagram"
              className="w-9 h-9 hover:scale-110 transition-transform"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
