import ProductDetail from "@/features/Products/components/ProductDetail";
import { generateSlug } from "@/utils/slug";

async function getProductBySlug(slug: string) {
  try {
    const baseUrl = process.env.API_BASE_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/products/${slug}`, {
      cache: "no-store",
    });

    const data = await response.json();
    return data?.data;
  } catch (error) {
    console.error("Error fetching product data:", error);
    return null;
  }
}

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const product = await getProductBySlug(params.slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <a
            href="/"
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return <ProductDetail product={product} />;
}

// Generate static params for better performance (optional)
export async function generateStaticParams() {
  try {
    const baseUrl = process.env.API_BASE_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/products`);
    const data = await response.json();

    if (data.success && data.data) {
      return data.data.map((product: any) => ({
        slug: generateSlug(product.name), //generate slug from name
      }));
    }

    return [];
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}
