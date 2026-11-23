import api from "./api.service";

import { type Product } from "../types/api.types";

export const productsEndpoints = {
  getAllProducts: () => api.get<Product[]>(`/products`),

  getProduct: (productId: string) => api.get<Product>(`/products/${productId}`),
};
