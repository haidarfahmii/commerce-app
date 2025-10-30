import { Star } from "lucide-react";
import ImagePreview from "@/features/Products/components/ImagePreview";
import ColorSelector from "@/features/Products/components/ColorSelector";
import ProductCardAction from "@/features/Products/components/ProductCardAction";
import { Metadata, ResolvingMetadata } from "next";

async function getProductDetail(slug: string) {
  try {
    const baseUrl = process.env.API_BASE_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/products/${slug}`, {
      cache: "no-store",
    });

    const product = await response?.json();
    return product?.data;
  } catch (error) {
    console.log(error);
  }
}

interface Params {
  params: {
    slug: string;
  };
}

export const generateMetadata = async (
  { params }: Params,
  parent: ResolvingMetadata
) => {
  const { slug } = await params;

  const product = await getProductDetail(slug);

  return {
    title: product?.name,
    description: product?.description,
    openGraph: {
      images: [
        {
          url: product?.imageUrl1,
          width: 500,
          height: 500,
          alt: product?.title,
        },
      ],
      description: product?.description,
    },
    twitter: {
      card: "summary_large_image",
      title: product?.title,
      description: product?.description,
      images: product?.imageUrl1,
      site: `http://localhost:3000/products/${slug}`,
      creator: "3legant.",
    },
  };
};

export default async function Page({ params }: Params) {
  const { slug } = await params;
  const product = await getProductDetail(slug);

  return (
    <div className="min-h-screen bg-white">
      {/* breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600 mt-6">
          <a href="/" className="hover:text-gray-900">
            Home
          </a>
          <span>&gt;</span>
          <a href="/shop" className="hover:text-gray-900">
            Shop
          </a>
          <span>&gt;</span>
          <a href="/living-room" className="hover:text-gray-900">
            Living Room
          </a>
          <span>&gt;</span>
          <span className="text-gray-900">Product</span>
        </div>
      </div>

      {/* main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* left */}
          <ImagePreview
            imagesUrl={[
              product?.imageUrl1,
              product?.imageUrl2,
              product?.imageUrl3,
            ]}
          />
          {/* right column */}
          <div className="space-y-6">
            {/* ratting */}
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-black" />
                ))}
              </div>
              <span className="text-sm text-gray-600">11 Reviews</span>
            </div>

            {/* title */}
            <h1 className="text-4xl font-medium text-slate-700">
              {product?.name}
            </h1>

            {/* desc */}
            <p className="text-gray-600">{product?.description}</p>

            {/* price */}
            <div className="flex items-center space-x-3">
              <span className="text-3xl font-semibold text-slate-700">
                {`Rp. ${product?.price.toLocaleString("id-ID")}`}
              </span>
              <span className="text-xl text-gray-400 line-through">
                $400.00
              </span>
            </div>

            {/* time */}
            <div>
              <p className="text-sm text-gray-600 mb-3">Offer expires in:</p>
              <div className="grid grid-cols-4 gap-4 text-slate-700">
                <div className="bg-gray-50 rounded-lg p-4 text-center ">
                  <div className="text-3xl font-semibold">02</div>
                  <div className="text-xs text-gray-600 mt-1">Days</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-semibold">12</div>
                  <div className="text-xs text-gray-600 mt-1">Hours</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-semibold">45</div>
                  <div className="text-xs text-gray-600 mt-1">Minutes</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-semibold">05</div>
                  <div className="text-xs text-gray-600 mt-1">Seconds</div>
                </div>
              </div>
            </div>

            {/* measurements */}
            <div>
              <h3 className="font-medium mb-2 text-slate-700">Measurements</h3>
              <p className="text-gray-600">17 1/2×20 5/8 "</p>
            </div>

            {/* color selection */}
            <ColorSelector />

            {/* quantity */}
            <ProductCardAction />

            {/* product detail */}
            <div className="border-t pt-6 space-y-2 text-sm">
              <div className="flex justify-between text-slate-700">
                <span className="text-gray-600">SKU</span>
                <span className="font-medium">1117</span>
              </div>
              <div className="flex justify-between text-slate-700">
                <span className="text-gray-600">CATEGORY</span>
                <span className="font-medium">Living Room, Bedroom</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
