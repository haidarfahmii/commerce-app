"use client";
import { useState } from "react";
import { Heart, Minus, Plus } from "lucide-react";
export default function ProductCardAction() {
  const [quantity, setQuantity] = useState<number>(1);
  return (
    <>
      <div className="flex space-x-4">
        <div className="flex items-center border border-gray-300 rounded-lg text-slate-700">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-3 hover:bg-gray-50"
          >
            <Minus className="w-5 h-5" />
          </button>
          <span className="px-6 text-lg font-medium text-slate-700">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="p-3 hover:bg-gray-50"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        {/* button whislist */}
        <button className="flex-1 border border-gray-300 rounded-lg py-3 px-6 hover:bg-gray-50 flex items-center justify-center space-x-2">
          <Heart className="w-5 h-5 text-red-500" />
          <span className="text-slate-700">Wishlist</span>
        </button>
      </div>

      {/* button add chart */}
      <button className="w-full bg-black text-white py-4 rounded-lg hover:bg-gray-900 transition-colors">
        Add to Cart
      </button>
    </>
  );
}
