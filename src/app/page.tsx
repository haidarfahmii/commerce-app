import Hero from "@/features/Hero/components/Hero";
import BannerGrid from "@/features/Banner/components/Banner";
import Item from "@/features/Items/components/Item";
import ProductServer from "@/features/Products/components/ProductFetching";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <BannerGrid />
      <ProductServer />
      <Item />
    </main>
  );
}
