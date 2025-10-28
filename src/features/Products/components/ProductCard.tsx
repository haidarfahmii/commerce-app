import Image from "next/image";

type Product = {
  id: number;
  name: string;
  price: string;
  measurements: string;
  description: string;
  imageUrl: string;
  isNew?: boolean;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="shrink-0 w-64 md:w-72 mr-4 relative">
      <div className="bg-gray-100 rounded-lg overflow-hidden">
        {product.imageUrl && (
          // <Image
          //   src={product.imageUrl}
          //   alt={product.name}
          //   width={300}
          //   height={300}
          //   className="w-full h-64 object-contain"
          // />
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-65 object-contain"
          />
        )}
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
            NEW
          </span>
        )}
      </div>
      <div className="mt-2">
        <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
        {/* <span>{product.measurements}</span> */}
        <p className="text-gray-600 font-bold">{product.price}</p>
      </div>
    </div>
  );
}
