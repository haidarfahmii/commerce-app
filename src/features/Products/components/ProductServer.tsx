import Product from "./Product";
import { generateSlug } from "@/utils/slug";

async function getProduct() {
  try {
    const baseUrl = process.env.API_BASE_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/products`, {
      cache: "no-store",
    });

    const data = await response.json();
    return data?.data || [];
  } catch (error) {
    console.log(error);
    console.error("Error fetching product data:", error);
    return [];
  }
}

export default async function ProductServer() {
  const rawProducts = await getProduct();

  const products = rawProducts.map((product: any) => ({
    id: product.objectId,
    slug: generateSlug(product.name), // new
    name: product.name,
    price: `Rp. ${product.price.toLocaleString("id-ID")}`,
    imageUrl: product.imageUrl,
    isNew: product.isNew,
    discount: product.discount, // new
  }));

  return <Product products={products} />;
}
