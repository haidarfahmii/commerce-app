"use client";
import { useState } from "react";

export default function ColorSelector() {
  const [selectedColor, setSelectedColor] = useState<string>("black");

  const colors = [
    { name: "black", label: "Black", value: "#1a1a1a" },
    { name: "gray", label: "Gray", value: "#9ca3af" },
    { name: "red", label: "Red", value: "#dc2626" },
    { name: "white", label: "White", value: "#ffffff" },
  ];
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-medium text-slate-700">Choose Color</h3>
        <span className="text-sm text-gray-600 capitalize">
          {selectedColor}
        </span>
      </div>
      <div className="flex space-x-3">
        {colors.map((color) => (
          <button
            key={color.name}
            onClick={() => setSelectedColor(color.name)}
            className={`w-16 h-16 rounded-lg border-2 flex items-center justify-center ${
              selectedColor === color.name ? "border-black" : "border-gray-200"
            }`}
          >
            <div
              className={`w-12 h-12 rounded ${
                color.name === "white" ? "border border-gray-300" : ""
              }`}
              style={{ backgroundColor: color.value }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
