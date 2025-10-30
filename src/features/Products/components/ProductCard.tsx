import Image from "next/image";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  slug: string;
  price: string;
  measurements: string;
  description: string;
  imageUrl1: string;
  isNew?: boolean;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="shrink-0 w-64 md:w-72 mr-4 relative">
      <div className="bg-gray-100 rounded-lg overflow-hidden">
        {product.imageUrl1 && (
          <Image
            src={product.imageUrl1}
            alt={product.name}
            width={300}
            height={300}
            className="w-full h-64 object-contain"
          />
        )}
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
            NEW
          </span>
        )}
      </div>
      <div className="mt-2">
        <Link
          href={`/products/${product.slug}`}
          className="shrink-0 w-64 md:w-72 mr-4 relative block group cursor-pointer"
        >
          <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
          <p className="text-gray-600 font-bold">{product.price}</p>
        </Link>
      </div>
    </div>
  );
}
