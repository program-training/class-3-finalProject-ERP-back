export type userData = {
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
  _id?:string
  name: string;
  salePrice: number;
  quantity: number;
  description: String;
  category: String;
  discountPercentage: number;
  image: {
    large:  String;
    medium: String;
    small: String;
    alt: String;
  };
};

