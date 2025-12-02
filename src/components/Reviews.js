// src/components/Reviews.js
import React from "react";

function Reviews({ items = [] }) {
  const list = items.slice(0, 5);
  return (
    <div className="space-y-3 w-full">
      {list.map((r, idx) => (
        <div key={idx} className="border rounded p-3 bg-white shadow-sm">
          <div className="font-semibold text-sm">{r.user}</div>
          <div className="text-xs text-gray-500 mb-1">Rating: {r.stars} / 5</div>
          <p className="text-sm text-gray-700">{r.text}</p>
        </div>
      ))}
    </div>
  );
}
export default Reviews;
