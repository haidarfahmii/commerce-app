// components/NewArrivals.tsx
"use client"; // Komponen ini butuh interaktivitas client-side

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProductCard from "@/features/ProductCard/components/ProductCard";

const newProducts = [
  {
    id: 1,
    name: "Loveseat Sofa",
    price: "Rp 3.500.000",
    imageUrl: "/assets/images/loveseat-sova.svg",
    isNew: true,
  },
  {
    id: 2,
    name: "Table Lamp",
    price: "Rp 750.000",
    imageUrl: "/assets/images/table-lamp.svg",
    isNew: true,
  },
  {
    id: 3,
    name: "White Stool",
    price: "Rp 500.000",
    imageUrl: "/assets/images/beige-table-lamp.svg",
    isNew: true,
  },
  {
    id: 4,
    name: "Wicker Basket",
    price: "Rp 300.000",
    imageUrl: "/assets/images/bambo-basket.svg",
    isNew: true,
  },
  {
    id: 5,
    name: "Modern Toaster",
    price: "Rp 1.200.000",
    imageUrl: "/assets/images/bambo-basket.svg",
    isNew: false,
  },
];

export default function NewArivval() {
  // State untuk menyimpan lebar maksimum drag
  const [width, setWidth] = useState(0);

  // Ref untuk mengakses elemen carousel dan track
  const carouselRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Hitung lebar maksimum drag saat komponen dimuat
  useEffect(() => {
    if (trackRef.current && carouselRef.current) {
      const trackWidth = trackRef.current.scrollWidth;
      const containerWidth = carouselRef.current.offsetWidth;
      // Lebar drag adalah selisih antara total lebar track dan lebar kontainer
      setWidth(trackWidth - containerWidth);
    }
  }, []);

  return (
    <section className="py-16 px-4 md:px-8 max-w-[1400px] mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">New Arrivals</h2>
      <motion.div
        ref={carouselRef}
        className="cursor-grab overflow-hidden"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          ref={trackRef}
          className="flex"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
