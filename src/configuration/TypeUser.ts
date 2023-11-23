export type userData = {
  user_name: string;
  password: string;
};

export type productUpdate = {
  productId: string;
  requiredQuantity: number;
};
export type Product = {
  name: string;
  salePrice: number;
  quantity: number;
  description: String;
  category: String;
  discountPercentage: number;
  image: {
    url: String;
    alt: String;
  };
};
