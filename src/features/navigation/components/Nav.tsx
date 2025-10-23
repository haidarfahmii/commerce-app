import Link from "next/link";
import { Search, User, ShoppingBag } from "lucide-react";

export default function Nav() {
  return (
    <nav className="w-full sticky top-0 z-50 bg-white backdrop-blur-sm">
      <div className="max-w-[1400px] mx-auto px-4 py-5 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold text-slate-950">
          3legant.
        </Link>

        <div className="hidden md:flex gap-8">
          <Link
            href="#"
            className="text-sm text-slate-600 hover:text-slate-900"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-sm text-slate-600 hover:text-slate-900"
          >
            Shop
          </Link>
          <Link
            href="#"
            className="text-sm text-slate-600 hover:text-slate-900"
          >
            Products
          </Link>
          <Link
            href="#"
            className="text-sm text-slate-600 hover:text-slate-900"
          >
            Contact Us
          </Link>
        </div>

        <div className="flex items-center gap-4 text-slate-700">
          <Search size={20} />
          <User size={20} href="/login" />
          <ShoppingBag size={20} />
        </div>
      </div>
    </nav>
  );
}
