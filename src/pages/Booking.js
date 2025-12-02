import React, { useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CARS } from "../data/cars";

function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = useMemo(() => CARS.find(c => c.id === Number(id)), [id]);

  const [occupation, setOccupation] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    retiredYears: "",
    companyName: "",
    companyAddress: "",
    phone: "",
    address: "",
    district: "",
    pincode: ""
  });
  const [orders, setOrders] = useState([]);

  if (!car) return <div className="text-center">Car not found.</div>;

  const submit = (e) => {
    e.preventDefault();
    const newOrder = { ...form, car: car.name, amount: car.price };
    setOrders([...orders, newOrder]);
    alert("Order booked!");
    navigate("/buy"); // redirect to Buy Cars page after OK
  };

  return (
    <div className="w-full flex flex-col items-center text-center min-h-screen justify-center">
      <h1 className="text-2xl font-bold mb-4">Book your Order</h1>
      <p className="text-gray-700 mb-2">
        Model: {car.name} | Amount: ₹{car.price.toLocaleString("en-IN")}
      </p>

      <form
        onSubmit={submit}
        className="bg-white rounded-lg shadow p-6 space-y-4 w-full max-w-2xl text-left"
      >
        <input
          className="border rounded px-3 py-2 w-full"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="border rounded px-3 py-2 w-full"
          type="email"
          placeholder="Mail ID"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        {/* Occupation */}
        <div className="flex items-center gap-6">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="occupation"
              checked={occupation === "gov"}
              onChange={() => setOccupation("gov")}
            />
            Government
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="occupation"
              checked={occupation === "priv"}
              onChange={() => setOccupation("priv")}
            />
            Private
          </label>
        </div>

        {/* Conditional fields */}
        {occupation === "gov" && (
          <input
            className="border rounded px-3 py-2 w-full"
            type="number"
            min="1"
            placeholder="Years to Retirement"
            value={form.retiredYears}
            onChange={(e) =>
              setForm({ ...form, retiredYears: e.target.value })
            }
          />
        )}

        {occupation === "priv" && (
          <>
            <input
              className="border rounded px-3 py-2 w-full"
              placeholder="Company name"
              value={form.companyName}
              onChange={(e) =>
                setForm({ ...form, companyName: e.target.value })
              }
            />
            <input
              className="border rounded px-3 py-2 w-full"
              placeholder="Company address"
              value={form.companyAddress}
              onChange={(e) =>
                setForm({ ...form, companyAddress: e.target.value })
              }
            />
            <input
              className="border rounded px-3 py-2 w-full"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <input
              className="border rounded px-3 py-2 w-full"
              placeholder="Address"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
            />
            <input
              className="border rounded px-3 py-2 w-full"
              placeholder="District"
              value={form.district}
              onChange={(e) => setForm({ ...form, district: e.target.value })}
            />
            <input
              className="border rounded px-3 py-2 w-full"
              placeholder="Pincode"
              value={form.pincode}
              onChange={(e) => setForm({ ...form, pincode: e.target.value })}
            />
          </>
        )}

        <button className="bg-green-600 text-white px-4 py-2 rounded w-full">
          Submit booking
        </button>
      </form>

      {/* Placed Orders Section */}
      <div className="w-full max-w-2xl mt-6">
        <h2 className="text-xl font-bold mb-2">Placed Orders</h2>
        {orders.length === 0 ? (
          <p className="text-gray-600">No orders placed yet.</p>
        ) : (
          <div className="space-y-3">
            {orders.map((o, idx) => (
              <div
                key={idx}
                className="bg-white rounded shadow p-4 text-left"
              >
                <div className="font-semibold">{o.name}</div>
                <div className="text-sm text-gray-600">{o.email}</div>
                <div className="text-sm text-gray-600">
                  Car: {o.car} | Amount: ₹{o.amount.toLocaleString("en-IN")}
                </div>
                {o.retiredYears && (
                  <div className="text-sm text-gray-600">
                    Years to Retirement: {o.retiredYears}
                  </div>
                )}
                {o.companyName && (
                  <div className="text-sm text-gray-600">
                    Company: {o.companyName}, {o.companyAddress}
                  </div>
                )}
                {o.phone && (
                  <div className="text-sm text-gray-600">Phone: {o.phone}</div>
                )}
                {o.address && (
                  <div className="text-sm text-gray-600">
                    Address: {o.address}, {o.district}, {o.pincode}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Booking;
