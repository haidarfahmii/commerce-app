async function getProducts() {
  const response = await fetch(`${process.env.API_BASE_URL}/api/products`, {
    next: { revalidate: 20 },
  });

  const data = await response.json();

  return data?.data;
}

export default async function Page() {
  const products = await getProducts();

  return (
    <div>
      <h1 className="text-2xl font-bold underline">
        Incremental Static Regeneration (ISR)
      </h1>
      <ul>
        {products.map((product: any, index: number) => {
          return <li key={index}>{product.name}</li>;
        })}
      </ul>
    </div>
  );
}
