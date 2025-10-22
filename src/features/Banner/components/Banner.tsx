import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categoryData = [
  {
    id: 1,
    title: "Living Room",
    href: "/category/living-room",
    imgSrc: "/assets/images/card-01.png",
    gridClass: "md:row-span-2",
    imgPosition: "center",
  },
  {
    id: 2,
    title: "Bedroom",
    href: "/category/bedroom",
    imgSrc: "/assets/images/card-02.png",
    gridClass: "",
    imgPosition: "bottom right",
  },
  {
    id: 3,
    title: "Kitchen",
    href: "/category/kitchen",
    imgSrc: "/assets/images/card-03.png",
    gridClass: "",
    imgPosition: "bottom right",
  },
];

function CategoryCard({
  title,
  href,
  imgSrc,
  gridClass,
  imgPosition,
}: (typeof categoryData)[0]) {
  return (
    <div
      className={`
        relative 
        flex flex-col 
        rounded-lg 
        bg-neutral-100 
        p-6 md:p-8 
        ${gridClass}
      `}
    >
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-black">{title}</h2>
        <Link
          href={href}
          className="
            inline-flex items-center gap-1.5 text-black font-medium mt-2 
            group transition-all
          "
        >
          <span
            className="
              pb-0.5 
              border-b-2 border-black 
              group-hover:border-transparent transition-colors
            "
          >
            Shop Now
          </span>
          <ArrowRight
            className="
              w-4 h-4 
              transition-transform group-hover:translate-x-1
            "
          />
        </Link>
      </div>

      {/* --- Konten Gambar --- */}
      <div
        className="
          grow relative mt-4 
          min-h-[200px] sm:min-h-[250px] md:min-h-0
        "
      >
        <Image
          src={imgSrc}
          alt={title}
          layout="fill"
          objectFit="contain"
          objectPosition={imgPosition}
        />
      </div>
    </div>
  );
}

// Komponen Grid Utama
export default function BannerGrid() {
  return (
    <section className="w-full container max-w-[1400px] mx-auto px-4 py-12">
      <div
        className="
          grid grid-cols-1 md:grid-cols-2 
          gap-6
        "
      >
        {categoryData.map((card) => (
          <CategoryCard
            key={card.id}
            id={card.id}
            title={card.title}
            href={card.href}
            imgSrc={card.imgSrc}
            gridClass={card.gridClass}
            imgPosition={card.imgPosition}
          />
        ))}
      </div>
    </section>
  );
}
