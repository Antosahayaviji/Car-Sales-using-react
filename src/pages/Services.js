// src/pages/Services.js
import React, { useMemo, useState } from "react";

function EmiCard({ title, principal, rate, months }) {
  const r = rate / 12 / 100;
  const n = months;
  const emi = useMemo(() => {
    if (r === 0) return principal / n;
    const factor = Math.pow(1 + r, n);
    return (principal * r * factor) / (factor - 1);
  }, [principal, r, n]);

  const total = emi * n;
  const interestTotal = total - principal;

  return (
    <div className="bg-white rounded-lg shadow p-4 space-y-2">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">Principal: ₹{Math.round(principal).toLocaleString("en-IN")}</p>
      <p className="text-sm text-gray-600">Interest: {rate}%</p>
      <p className="text-sm text-gray-600">Months: {months}</p>
      <p className="text-sm font-semibold text-blue-700">EMI: ₹{Math.round(emi).toLocaleString("en-IN")}</p>
      <p className="text-xs text-gray-500">Total Interest: ₹{Math.round(interestTotal).toLocaleString("en-IN")}</p>
    </div>
  );
}

function Services() {
  const [vehicle, setVehicle] = useState("");
  const [step, setStep] = useState(0);
  const [phone, setPhone] = useState("");
  const [fuel, setFuel] = useState("");
  const [registered, setRegistered] = useState([]);
  const onGetDetails = () => setStep(1);
  const onSubmitVehicle = () => {
    if (!phone) return;
    setStep(2);
  };
  const onSubmitFuel = () => {
    if (!fuel) return;
    setRegistered(r => [...r, { vehicle, phone, fuel }]);
    setStep(3);
  };

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/background12.gif')",
      }}
    >
      {/* 🌫️ Overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30" />

      {/* 🧱 Content Layer */}
      <div className="relative z-10 w-full flex flex-col items-center text-center px-4 py-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-white drop-shadow-lg">Services</h1>

        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
          <EmiCard title="Standard EMI" principal={800000} rate={9.5} months={60} />
          <EmiCard title="Premium EMI" principal={1200000} rate={11} months={84} />
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
          <div className="bg-white rounded-lg shadow p-4 text-left">
            <h3 className="font-semibold mb-2">Insurance Details</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><span className="font-semibold">Type:</span> Comprehensive (OD + TP)</li>
              <li><span className="font-semibold">Payment time:</span> Yearly renewal (before expiry)</li>
              <li><span className="font-semibold">Amount:</span> ₹18,000 – ₹35,000 depending on model</li>
              <li><span className="font-semibold">Add-ons:</span> Zero-dep, RSA, engine protect</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-left">
            <h3 className="font-semibold mb-2">Fastrack / Fastag</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Issued by banks; link to vehicle RC.</li>
              <li>Recharge via UPI / netbanking; auto-deduct at tolls.</li>
              <li>Setup at delivery or nearest bank partner.</li>
            </ul>
          </div>
        </div>

        <div className="w-full max-w-xl bg-white rounded-lg shadow p-6 mt-8 text-left">
          <h3 className="font-semibold mb-3">Check vehicle details</h3>
          <input
            className="border rounded px-3 py-2 w-full"
            placeholder="Enter vehicle number"
            value={vehicle}
            onChange={e => setVehicle(e.target.value)}
          />
          <button
            className="mt-3 bg-blue-600 text-white px-4 py-2 rounded"
            onClick={onGetDetails}
            disabled={!vehicle}
          >
            Get vehicle details
          </button>

          {step >= 1 && (
            <div className="mt-4">
              <label className="block mb-1">Phone number</label>
              <input
                className="border rounded px-3 py-2 w-full"
                placeholder="Enter phone number"
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
              <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded" onClick={onSubmitVehicle} disabled={!phone}>
                Continue
              </button>
            </div>
          )}

          {step >= 2 && (
            <div className="mt-4">
              <label className="block mb-1">Fuel type</label>
              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2">
                  <input type="radio" name="fuel" checked={fuel === "Petrol"} onChange={() => setFuel("Petrol")} />
                  Petrol
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="fuel" checked={fuel === "Diesel"} onChange={() => setFuel("Diesel")} />
                  Diesel
                </label>
              </div>
              <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded" onClick={onSubmitFuel} disabled={!fuel}>
                Register
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="mt-4 text-green-700 font-semibold">Registered.</div>
          )}
        </div>

        <div className="w-full max-w-xl mt-6">
          <h3 className="font-semibold mb-2 text-white drop-shadow">Registered Forms</h3>
          {registered.length === 0 ? (
            <p className="text-gray-200">No registrations yet.</p>
          ) : (
            <div className="space-y-3">
              {registered.map((r, idx) => (
                <div key={idx} className="bg-white rounded shadow p-4 text-left">
                  <div className="font-semibold">Vehicle: {r.vehicle}</div>
                  <div className="text-sm text-gray-600">Phone: {r.phone}</div>
                  <div className="text-sm text-gray-600">Fuel: {r.fuel}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Services;
