// src/pages/Auth.js
import React, { useEffect, useState } from "react";

function RegisterForm() {
  const [form, setForm] = useState({
    name: "", email: "", password: "", repeatPassword: "", place: "", phone: ""
  });
  const [coords, setCoords] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        pos => setCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
        () => setCoords(null),
        { enableHighAccuracy: true, timeout: 5000 }
      );
    }
  }, []);

  const mapSrc = coords
    ? `https://www.google.com/maps?q=${coords.lat},${coords.lng}&z=14&output=embed`
    : `https://www.google.com/maps?q=Thiruvananthapuram&z=12&output=embed`;

  const onSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password || form.password !== form.repeatPassword) return;
    alert("Registered!");
  };

  return (
    <form onSubmit={onSubmit} className="bg-white rounded-lg shadow p-6 space-y-4">
      <h2 className="text-xl font-bold text-center">Register</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input className="border rounded px-3 py-2" name="name" placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
        <input className="border rounded px-3 py-2" type="email" name="email" placeholder="Mail ID" onChange={e => setForm({ ...form, email: e.target.value })} />
        <input className="border rounded px-3 py-2" type="password" name="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
        <input className="border rounded px-3 py-2" type="password" name="repeatPassword" placeholder="Repeat Password" onChange={e => setForm({ ...form, repeatPassword: e.target.value })} />
        <input className="border rounded px-3 py-2" name="place" placeholder="Place" onChange={e => setForm({ ...form, place: e.target.value })} />
        <input className="border rounded px-3 py-2" name="phone" placeholder="Phone number" onChange={e => setForm({ ...form, phone: e.target.value })} />
      </div>
      <div className="aspect-video">
        <iframe title="map" src={mapSrc} className="w-full h-full rounded" loading="lazy" />
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">Create account</button>
    </form>
  );
}

function SignInForm() {
  const [form, setForm] = useState({ email: "", password: "", remember: false });

  return (
    <form onSubmit={e => { e.preventDefault(); if (!form.email || !form.password) return; alert("Signed in!"); }} className="bg-white rounded-lg shadow p-6 space-y-4">
      <h2 className="text-xl font-bold text-center">Sign In</h2>
      <input className="border rounded px-3 py-2 w-full" type="email" name="email" placeholder="Mail ID" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input className="border rounded px-3 py-2 w-full" type="password" name="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={form.remember} onChange={e => setForm({ ...form, remember: e.target.checked })} /> Remember me
        </label>
        <button type="button" className="text-sm text-blue-600 hover:underline">Forgot password?</button>
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">Sign in</button>
    </form>
  );
}

function Auth() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <RegisterForm />
      <SignInForm />
    </div>
  );
}

export default Auth;
