import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const sliderImages = [
  {
    id: 1,
    src: "/assets/images/image-placeholder.png",
    alt: "Sofa kulit coklat di ruangan yang terang",
  },
  {
    id: 2,
    src: "/assets/images/image-placeholder.png",
    alt: "Kursi modern yang stylish",
  },
  {
    id: 3,
    src: "/assets/images/image-placeholder.png",
    alt: "Interior ruang tamu minimalis",
  },
];

// Menggunakan sintaks 'export default function' sesuai permintaan
export default function Hero() {
  return (
    <section className="w-full max-w-[1400px] mx-auto">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="/assets/images/image-placeholder.png" className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="/assets/images/image-placeholder.png" className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="/assets/images/image-placeholder.png" className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            Simply Unique/
            <br />
            Simply Better.
          </h1>
          <p className="text-base text-gray-700 max-w-xs mt-4 md:mt-0">
            <span className="font-bold text-black">3legant</span> is a gift &
            decorations store based in HCMC, Vietnam. Est since 2019.
          </p>
        </div>
      </div>
    </section>
  );
}
