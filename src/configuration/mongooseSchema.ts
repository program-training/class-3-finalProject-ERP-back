import mongoose, { Schema, InferSchemaType, Document, Model } from "mongoose";
import { number } from "yup";

const UserSchema = new Schema({
  user_name: { type: String, required: true },
  password: { type: String, required: true },
  //   avatar: String,
});

const CategoriesSchema = new Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
});

const ProductSchema = new Schema({
  name: { type: String, required: true },
  salePrice: { type: Number, required: true },
  quantity: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  discountPercentage: { type: Number, required: true },
  image: {
    large: { type: String, required: true },
    medium: { type: String, required: true },
    small: { type: String, required: true },
    alt: { type: String, required: true },
  },
});

const GrafSchema = new Schema({
  product_id: { type: String, required: true },
  product_name: { type: String, required: true },
  quantity: { type: Number, required: true },
  time:{ type: String, required: true },
});

type User = InferSchemaType<typeof UserSchema>;
type Product = InferSchemaType<typeof ProductSchema>;
type Categories = InferSchemaType<typeof CategoriesSchema>;
type events = InferSchemaType<typeof GrafSchema>;


export const grafModel: Model<events> = mongoose.model<events>("events", GrafSchema);
export const UserModel: Model<User> = mongoose.model<User>("user", UserSchema);
export const ProductModel: Model<Product> = mongoose.model<Product>(
  "Product",
  ProductSchema
);
export const CategoriesModel: Model<Categories> = mongoose.model<Categories>(
  "Categories",
  CategoriesSchema
);
