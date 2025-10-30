"use client";

import { useState, useEffect } from "react";
import {
  Heart,
  ChevronLeft,
  ChevronRight,
  Star,
  Minus,
  Plus,
} from "lucide-react";

type Product = {
  objectId: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  measurements: string;
  category: string;
  sku: string;
  isNew: boolean;
  discount: number;
  images: string[];
  colors: Array<{ name: string; label: string; value: string }>;
};

export default function ProductDetail({ product }: { product: Product }) {
  const [selectedColor, setSelectedColor] = useState<string>("black");
  const [quantity, setQuantity] = useState<number>(1);
  const [currentImage, setCurrentImage] = useState<number>(0);

  //   Use images array from product or fallback to single imageUrl
  const images =
    product.images && product.images.length > 0
      ? product.images
      : [product.imageUrl];

  // Default color if not provided
  const colors = product.colors || [
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

  //   Calculate discount price
  const originalPrice = product.price;
  const discountPrice = product.discount
    ? originalPrice - (originalPrice * product.discount) / 100
    : originalPrice;

  return (
    <div className="min-h-screen bg-white">
      {/* breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600 mt-6">
          <a href="/" className="hover:text-gray-900">
            Home
          </a>
          <span>&gt;</span>
          <a href="/#products" className="hover:text-gray-900">
            Shop
          </a>
          <span>&gt;</span>
          {product.category && (
            <>
              <a href="#" className="hover:text-gray-900">
                {product.category}
              </a>
              <span>&gt;</span>
            </>
          )}
          <span className="text-gray-900">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-square">
              {product.isNew && (
                <span className="absolute top-4 left-4 bg-white text-black px-4 py-1 rounded text-sm font-semibold z-10">
                  NEW
                </span>
              )}
              {product.discount && product.discount > 0 && (
                <span className="absolute top-16 left-4 bg-green-500 text-white px-3 py-1 rounded text-sm font-semibold z-10">
                  -{product.discount}%
                </span>
              )}

              <img
                src={images[currentImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />

              {images.length > 1 && (
                <>
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
                </>
              )}
            </div>

            {images.length > 1 && (
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
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-black" />
                ))}
              </div>
              <span className="text-sm text-gray-600">11 Reviews</span>
            </div>

            <h1 className="text-4xl font-medium text-slate-700">
              {product.name}
            </h1>

            <p className="text-gray-600">{product.description}</p>

            <div className="flex items-center space-x-3">
              <span className="text-3xl font-semibold text-slate-700">
                Rp {discountPrice.toLocaleString("id-ID")}
              </span>
              {product.discount && product.discount > 0 && (
                <span className="text-xl text-gray-400 line-through">
                  Rp {originalPrice.toLocaleString("id-ID")}
                </span>
              )}
            </div>

            {product.measurements && (
              <div>
                <h3 className="font-medium mb-2 text-slate-700">
                  Measurements
                </h3>
                <p className="text-gray-600">{product.measurements}</p>
              </div>
            )}

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

              <button className="flex-1 border border-gray-300 rounded-lg py-3 px-6 hover:bg-gray-50 flex items-center justify-center space-x-2">
                <Heart className="w-5 h-5 text-red-500" />
                <span className="text-slate-700">Wishlist</span>
              </button>
            </div>

            <button className="w-full bg-black text-white py-4 rounded-lg hover:bg-gray-900 transition-colors">
              Add to Cart
            </button>

            <div className="border-t pt-6 space-y-2 text-sm">
              {product.sku && (
                <div className="flex justify-between text-slate-700">
                  <span className="text-gray-600">SKU</span>
                  <span className="font-medium">{product.sku}</span>
                </div>
              )}
              {product.category && (
                <div className="flex justify-between text-slate-700">
                  <span className="text-gray-600">CATEGORY</span>
                  <span className="font-medium">{product.category}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
