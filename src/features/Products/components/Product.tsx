"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProductCard from "@/features/Products/components/ProductCard";

export default function Product({ products }: { products: any[] }) {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (trackRef.current && carouselRef.current) {
      const trackWidth = trackRef.current.scrollWidth;
      const containerWidth = carouselRef.current.offsetWidth;
      setWidth(trackWidth - containerWidth);
    }
  }, []);

  if (!products || products.length === 0) {
    return (
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">New Arrival</h2>
        <p className="text-gray-600">No Products available at the moment.</p>
      </section>
    );
  }

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
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
