import { Search, User, ShoppingBag } from "lucide-react";

export default function Nav() {
  return (
    <nav className="w-full mx-auto sticky top-0 z-50 p-6 px-4 md:px-8 bg-white">
      <div className="flex justify-between items-center px-0 md:px-30 bg-white/50 backdrop-blur-sm">
        <div className="text-2xl font-bold text-neutral">3legant.</div>
        <div className="hidden md:flex gap-8">
          <a
            href="#"
            className="text-semibold text-neutral-500 hover:text-neutral-800"
          >
            Home
          </a>
          <a
            href="#"
            className="text-semibold text-neutral-500 hover:text-neutral-800"
          >
            Shop
          </a>
          <a href="#" className="text-neutral-500 hover:text-neutral-800">
            Products
          </a>
          <a href="#" className="text-neutral-500 hover:text-neutral-800">
            Contact Us
          </a>
        </div>
        <div className="flex gap-4 text-neutral-800">
          <Search size={20} />
          <User size={20} />
          <ShoppingBag size={20} />
        </div>
      </div>
    </nav>
  );
}
