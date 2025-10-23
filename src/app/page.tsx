import Hero from "@/features/Hero/components/Hero";
import BannerGrid from "@/features/Banner/components/Banner";
import Item from "@/features/Items/components/Item";
import NewArrivals from "@/features/NewArrival/NewArrival";

// --- Halaman Utama ---
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <BannerGrid />
      <NewArrivals />
      <Item />
    </main>
  );
}
