"use client";
import { useState, useEffect } from "react";
import { axiosInstance } from "@/utils/axios-instance";

export default function Page() {
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onGetProduct = async () => {
    try {
      const response = await axiosInstance.get("/api/products");

      console.log(response);
      setProducts(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    onGetProduct();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold underline">
        Client Side Rendering (CSR)
      </h1>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {products.map((product: any, index: number) => {
            return <li key={index}>{product.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
}
