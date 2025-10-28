"use client";

import { useState } from "react";
import {
  Heart,
  ChevronLeft,
  ChevronRight,
  Star,
  Minus,
  Plus,
} from "lucide-react";

export default function ProductDetail() {
  const [selectedColor, setSelectedColor] = useState<string>("black");
  const [quantity, setQuantity] = useState<number>(1);
  const [currentImage, setCurrentImage] = useState<number>(0);

  const images = [
    "/assets/images/beige-table-lamp.svg",
    "/assets/images/bambo-basket.svg",
    "/assets/images/sofa.svg",
  ];

  const colors = [
    { name: "black", label: "Black", value: "#1a1a1a" },
    { name: "gray", label: "Gray", value: "#9ca3af" },
    { name: "red", label: "Red", value: "#dc2626" },
    { name: "white", label: "White", value: "#ffffff" },
  ];

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600 mt-6">
          <a href="#" className="hover:text-gray-900">
            Home
          </a>
          <span>&gt;</span>
          <a href="#" className="hover:text-gray-900">
            Shop
          </a>
          <span>&gt;</span>
          <a href="#" className="hover:text-gray-900">
            Living Room
          </a>
          <span>&gt;</span>
          <span className="text-gray-900">Product</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-square">
              <span className="absolute top-4 left-4 bg-white text-black px-4 py-1 rounded text-sm font-semibold z-10">
                NEW
              </span>
              <span className="absolute top-15 left-4 bg-green-500 text-white px-3 py-1 rounded text-sm font-semibold z-10">
                -50%
              </span>

              <img
                src={images[currentImage]}
                alt="Product Image"
                className="w-full h-full object-cover"
              />

              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
              >
                <ChevronLeft className="w-5 h-5 text-slate-700" />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
              >
                <ChevronRight className="w-5 h-5 text-slate-700" />
              </button>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-3 gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`bg-gray-100 rounded-lg aspect-square hover:opacity-75 overflow-hidden ${
                    currentImage === index ? "ring-2 ring-black" : ""
                  }`}
                >
                  <img
                    src={image}
                    alt={`Tray Table ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div className="space-y-6">
            {/* ratting */}
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-black" />
                ))}
              </div>
              <span className="text-sm text-gray-600">11 Reviews</span>
            </div>

            {/* title */}
            <h1 className="text-4xl font-medium text-slate-700">Tray Table</h1>

            {/* desc */}
            <p className="text-gray-600">
              Buy one or buy a few and make every space where you sit more
              convenient. Light and easy to move around with removable tray top,
              handy for serving snacks.
            </p>

            {/* price */}
            <div className="flex items-center space-x-3">
              <span className="text-3xl font-semibold text-slate-700">
                $199.00
              </span>
              <span className="text-xl text-gray-400 line-through">
                $400.00
              </span>
            </div>

            {/* time */}
            <div>
              <p className="text-sm text-gray-600 mb-3">Offer expires in:</p>
              <div className="grid grid-cols-4 gap-4 text-slate-700">
                <div className="bg-gray-50 rounded-lg p-4 text-center ">
                  <div className="text-3xl font-semibold">02</div>
                  <div className="text-xs text-gray-600 mt-1">Days</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-semibold">12</div>
                  <div className="text-xs text-gray-600 mt-1">Hours</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-semibold">45</div>
                  <div className="text-xs text-gray-600 mt-1">Minutes</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-semibold">05</div>
                  <div className="text-xs text-gray-600 mt-1">Seconds</div>
                </div>
              </div>
            </div>

            {/* measurements */}
            <div>
              <h3 className="font-medium mb-2 text-slate-700">Measurements</h3>
              <p className="text-gray-600">17 1/2×20 5/8 "</p>
            </div>

            {/* color selection */}
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
                      selectedColor === color.name
                        ? "border-black"
                        : "border-gray-200"
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

            {/* quantity */}
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

            {/* product detail */}
            <div className="border-t pt-6 space-y-2 text-sm">
              <div className="flex justify-between text-slate-700">
                <span className="text-gray-600">SKU</span>
                <span className="font-medium">1117</span>
              </div>
              <div className="flex justify-between text-slate-700">
                <span className="text-gray-600">CATEGORY</span>
                <span className="font-medium">Living Room, Bedroom</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
