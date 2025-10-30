"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImagePreviewProps {
  imagesUrl: string[];
}

export default function ImagePreview({ imagesUrl }: ImagePreviewProps) {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const images = imagesUrl;

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className="space-y-4">
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
  );
}
