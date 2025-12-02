// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BuyCars from "./pages/BuyCars";
import CarDetail from "./pages/CarDetail";
import Booking from "./pages/Booking";
import About from "./pages/About";
import Services from "./pages/Services";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <main className="container-center py-8 flex flex-col items-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<BuyCars />} />
          <Route path="/car/:id" element={<CarDetail />} />
          <Route path="/book/:id" element={<Booking />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
