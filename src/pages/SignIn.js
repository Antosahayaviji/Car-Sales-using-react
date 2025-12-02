// src/pages/SignIn.js
import React, { useState } from "react";

function SignIn() {
  const [form, setForm] = useState({ email: "", password: "", remember: false });

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/background9.gif')", // ✅ GIF from public folder
      }}
    >
      {/* 🌫️ Overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40" />

      {/* 🧱 Content Layer */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-white drop-shadow-lg">
          Sign In
        </h1>

        <form
          onSubmit={e => {
            e.preventDefault();
            if (!form.email || !form.password) return;
            alert("Signed in!");
          }}
          className="bg-white rounded-lg shadow p-6 space-y-4 w-full max-w-md text-left"
        >
          <input
            className="border rounded px-3 py-2 w-full"
            type="email"
            name="email"
            placeholder="Mail ID"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
          />
          <input
            className="border rounded px-3 py-2 w-full"
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={e => setForm({ ...form, password: e.target.value })}
          />

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={form.remember}
                onChange={e => setForm({ ...form, remember: e.target.checked })}
              />
              Remember me
            </label>
            <button type="button" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </button>
          </div>

          <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
