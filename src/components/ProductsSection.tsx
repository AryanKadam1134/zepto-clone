import { useEffect, useState } from "react";

import { type Product } from "../types/api.types";

import { productsEndpoints } from "../services/products.service";

import ProductCard from "./ProductCard";

const ProductsSection = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await productsEndpoints.getAllProducts();
        setProducts(res.data);
        console.log("Products: ", res);
      } catch (error) {
        console.error("Error fetching products: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="">
      <p className="mb-4 text-xl font-bold">Products</p>

      <div className="mx-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">
        {!loading &&
          products?.length &&
          products.map((product) => {
            const { id } = product || {};

            return <ProductCard key={id} product={product} />;
          })}
      </div>
    </div>
  );
};

export default ProductsSection;
