import React from "react";
import Image from "next/image";
import Link from "next/link";

// --- CATATAN PENTING ---
// Anda harus menyediakan gambar Anda sendiri.
// 1. Buat folder 'public/images' (jika belum ada).
// 2. Tambahkan gambar Anda (mis: 'armchair.png', 'dresser.png', 'toaster.png') ke dalamnya.
// 3. Ganti path placeholder di bawah ini dengan path gambar Anda.

// Placeholder untuk path gambar. Ganti ini dengan gambar Anda.
const livingRoomImg = "/assets/images/living-room.jpg"; // Contoh: gambar kursi
const bedroomImg = "/assets/images/bedroom.jpg"; // Contoh: gambar lemari
const kitchenImg = "/assets/images/kitchen.jpg"; // Contoh: gambar pemanggang roti

const Banner = () => {
  return (
    <section className="max-w-[1400px] container mx-auto my-12 px-4">
      {/* Grid utama: 
        - 1 kolom di seluler (default)
        - 2 kolom di layar medium & lebih besar (md:grid-cols-2)
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {/* === Kolom Kiri: Living Room === */}
        {/* Kartu ini akan mengambil 1 kolom penuh di seluler.
          Di layar md, ia mengambil 1 kolom dan 2 baris (md:row-span-2)
          Kita gunakan grid-rows-2 pada parent-nya untuk ini.
          
          UPDATE: Tata letak flexbox/grid yang lebih sederhana di bawah ini lebih baik.
        */}
        <div className="relative p-8 bg-gray-100 rounded-lg overflow-hidden min-h-[500px] md:min-h-0 ">
          {/* Konten Teks */}
          <div className="relative z-10 text-black">
            <h2 className="text-4xl font-bold mb-3">Living Room</h2>
            <Link
              href="/shop/living-room"
              className="text-base font-medium border-b-2 border-black pb-1 group"
            >
              Shop Now{" "}
              <span className="group-hover:ml-1.5 transition-all duration-200 ease-out">
                &rarr;
              </span>
            </Link>
          </div>

          {/* Gambar Latar */}
          {/* Menggunakan 'fill' dan 'object-contain' pada Next/Image 
            untuk mengisi kontainer sambil menjaga rasio aspek gambar.
            Ditempatkan secara absolut di kanan bawah.
          */}
          <div className="absolute -bottom-10 -right-10 w-4/5 h-4/5 md:w-full md:h-full">
            <Image
              src={livingRoomImg}
              alt="Living Room Furniture"
              fill
              className="object-contain object-bottom-right"
              sizes="(max-width: 768px) 80vw, 50vw"
            />
          </div>
        </div>

        {/* === Kolom Kanan: Bedroom & Kitchen === */}
        {/* Kontainer ini menampung 2 kartu kecil 
          dan menumpuknya secara vertikal (flex-col).
        */}
        <div className="flex flex-col gap-6">
          {/* --- Kartu Bedroom --- */}
          <div className="relative p-8 bg-gray-100 rounded-lg overflow-hidden h-64 md:h-full">
            {/* Konten Teks */}
            <div className="text-black relative z-10">
              <h2 className="text-4xl font-bold mb-3">Bedroom</h2>
              <Link
                href="/shop/bedroom"
                className="text-base font-medium border-b-2 border-black pb-1 group"
              >
                Shop Now{" "}
                <span className="group-hover:ml-1.5 transition-all duration-200 ease-out">
                  &rarr;
                </span>
              </Link>
            </div>

            {/* Gambar Latar */}
            <div className="absolute bottom-0 right-4 w-3/5 h-4/5">
              <Image
                src={bedroomImg}
                alt="Bedroom Furniture"
                fill
                className="object-contain object-bottom-right"
                sizes="(max-width: 768px) 60vw, 30vw"
              />
            </div>
          </div>

          {/* --- Kartu Kitchen --- */}
          <div className="relative p-8 bg-gray-100 rounded-lg overflow-hidden h-64 md:h-full">
            {/* Konten Teks */}
            <div className="text-black relative z-10">
              <h2 className="text-4xl font-bold mb-3">Kitchen</h2>
              <Link
                href="/shop/kitchen"
                className="text-base font-medium border-b-2 border-black pb-1 group"
              >
                Shop Now{" "}
                <span className="group-hover:ml-1.5 transition-all duration-200 ease-out">
                  &rarr;
                </span>
              </Link>
            </div>

            {/* Gambar Latar */}
            <div className="absolute bottom-4 right-4 w-1/2 h-1/2">
              <Image
                src={kitchenImg}
                alt="Kitchen Appliance"
                fill
                className="object-contain object-bottom-right"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
