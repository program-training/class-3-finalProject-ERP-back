import mongoose, { Schema, InferSchemaType, Document, Model } from "mongoose";

const UserSchema = new Schema({
  user_name: { type: String, required: true },
  password: { type: String, required: true },
  //   avatar: String,
});

const ProductSchema = new Schema({
  name: { type: String, required: true },
  salePrice: { type: Number, required: true },
  quantity: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  discountPercentage: { type: Number, required: true },
  image: {
    url: { type: String, required: true },
    alt: { type: String, required: true },
  },
});

type User = InferSchemaType<typeof UserSchema>;
type Product = InferSchemaType<typeof ProductSchema>;

export const UserModel: Model<User> = mongoose.model<User>("user", UserSchema);
export const ProductModel: Model<Product> = mongoose.model<Product>(
  "Product",
  ProductSchema
);
