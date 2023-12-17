export type userData = {
  user_name: string;
  password: string;
};
export type userFromDB = {
  user_name: string;
  password: string;
};

export type ordersErrors = {
  error: string;
};

export type productUpdate = {
  productId: string;
  requiredQuantity: number;
};
export type productToUpdate = {
  productId: string;
  requiredQuantity: number;
};
export type Product = {
  _id?: string;
  name: string;
  salePrice: number;
  quantity: number;
  description: string;
  category: string;
  discountPercentage: number;
  image: {
    large: string;
    medium: string;
    small: string;
    alt: string;
  };
};

export type ProductR = {
  _id: string;
  name: string;
  salePrice: number;
  quantity: number;
  description: string;
  category: string;
  discountPercentage: number;
  image: {
    large: string;
    medium: string;
    small: string;
    alt: string;
  };
};

export type graf = {
  _id: string;
  product_name:string,
  product_id: string;
  quantity: number;
  time: string;
};
