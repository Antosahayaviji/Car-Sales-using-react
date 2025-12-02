// src/components/Navbar.js
import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <header className="bg-white shadow sticky top-0 z-40">
      <div className="container-center h-16 flex items-center">
        {/* Left: Logo image */}
        <div className="flex-1 flex items-center">
          <button onClick={() => navigate("/")} className="flex items-center gap-2">
           <img 
  src="/logoo.png" 
  alt="BuyCar Logo" 
  className="h-12 w-12 object-contain"
/>


            <span className="sr-only">Home</span>
          </button>
        </div>

        {/* Center: Nav links */}
        <nav className="flex-1 flex justify-center gap-6">
          <NavLink to="/" end className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"}>Home</NavLink>
          <NavLink to="/buy" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"}>Buy Cars</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"}>About</NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"}>Services</NavLink>
        </nav>

        {/* Right: Register / Sign In */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <Link to="/register" className="hover:text-blue-600">Register</Link>
          <Link to="/signin" className="bg-blue-600 text-white px-3 py-1.5 rounded hover:bg-blue-700 text-sm">Sign In</Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
