export interface ApiResponse<T = unknown> {
  success: boolean;
  statusCode: number;
  data: T;
  message?: string;
}

interface Rating {
  rate: number;
  count: number;
}

// User Interface
export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
