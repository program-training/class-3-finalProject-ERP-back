import mongoose, { Schema, InferSchemaType, Document, Model } from "mongoose";

const CategorySchema = new Schema({
  name: { type: String, require: true },
  img: { type: String, require: true },
});

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
    large: { type: String, required: true },
    medium: { type: String, required: true },
    small: { type: String, required: true },
    alt: { type: String, required: true },
  },
});

type CategorySchema = InferSchemaType<typeof CategorySchema>;
type User = InferSchemaType<typeof UserSchema>;
type Product = InferSchemaType<typeof ProductSchema>;

export const CategoryModel: Model<CategorySchema> =
  mongoose.model<CategorySchema>("category", CategorySchema);
export const UserModel: Model<User> = mongoose.model<User>("user", UserSchema);
export const ProductModel: Model<Product> = mongoose.model<Product>(
  "Product",
  ProductSchema
);
