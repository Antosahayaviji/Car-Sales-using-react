// src/pages/Register.js
import React, { useState } from "react";

function Register() {
  const [form, setForm] = useState({
    name: "", email: "", password: "", repeatPassword: "", place: "", phone: "", locationName: ""
  });
  const [saved, setSaved] = useState([]);

  const requestLocation = async () => {
    if (!("geolocation" in navigator)) return alert("Geolocation not available");
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;
      try {
        const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
        const data = await res.json();
        const display = data?.display_name || `${latitude.toFixed(5)}, ${longitude.toFixed(5)}`;
        setForm(f => ({ ...f, locationName: display }));
      } catch {
        setForm(f => ({ ...f, locationName: `${latitude.toFixed(5)}, ${longitude.toFixed(5)}` }));
      }
    }, () => {
      alert("Location permission denied");
    }, { enableHighAccuracy: true, timeout: 7000 });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password || form.password !== form.repeatPassword) {
      return alert("Please fill all fields correctly");
    }
    setSaved(s => [...s, form]);
    alert("Registered!");
    setForm({ name: "", email: "", password: "", repeatPassword: "", place: "", phone: "", locationName: "" });
  };

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/background10.gif')", // ✅ GIF from public folder
      }}
    >
      {/* 🌫️ Overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30" />

      {/* 🧱 Content Layer */}
      <div className="relative z-10 w-full flex flex-col items-center text-center px-4 py-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-white drop-shadow-lg">Register</h1>

        <form onSubmit={onSubmit} className="bg-white rounded-lg shadow p-6 space-y-4 w-full max-w-md text-left">
          <input className="border rounded px-3 py-2 w-full" name="name" placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
          <input className="border rounded px-3 py-2 w-full" type="email" name="email" placeholder="Mail ID" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
          <input className="border rounded px-3 py-2 w-full" type="password" name="password" placeholder="Password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
          <input className="border rounded px-3 py-2 w-full" type="password" name="repeatPassword" placeholder="Repeat Password" value={form.repeatPassword} onChange={e => setForm({ ...form, repeatPassword: e.target.value })} />
          <input className="border rounded px-3 py-2 w-full" name="place" placeholder="Place" value={form.place} onChange={e => setForm({ ...form, place: e.target.value })} />
          <input className="border rounded px-3 py-2 w-full" name="phone" placeholder="Phone number" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />

          <div>
            <label className="font-semibold">Location</label>
            <div className="flex items-center gap-3 mt-2">
              <button type="button" className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700" onClick={requestLocation}>
                Allow & Detect
              </button>
              <span className="text-sm text-gray-600">{form.locationName || "Permission not granted"}</span>
            </div>
          </div>

          <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">Create account</button>
        </form>

        <div className="w-full max-w-md mt-6">
          <h2 className="text-xl font-bold mb-2 text-white drop-shadow">Registered Forms</h2>
          {saved.length === 0 ? (
            <p className="text-gray-200">No registrations yet.</p>
          ) : (
            <div className="space-y-3">
              {saved.map((s, idx) => (
                <div key={idx} className="bg-white rounded shadow p-4 text-left">
                  <div className="font-semibold">{s.name}</div>
                  <div className="text-sm text-gray-600">{s.email}</div>
                  <div className="text-sm text-gray-600">Place: {s.place}</div>
                  <div className="text-sm text-gray-600">Phone: {s.phone}</div>
                  <div className="text-sm text-gray-600">Location: {s.locationName || "-"}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Register;
