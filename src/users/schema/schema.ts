import { buildSchema } from "graphql";

export const schema = buildSchema(`
  type Query {
    allProducts:[Product]
    OneProductPage(page:Int):[Product]
    getProductById(id:String):Product
    externalProducts(search: String): [Product]
    externalCategories: [Category]
    externalCategory(id: String!): Category
  }

type Mutation {
  updateInventory(up:productToUpdateInput):[productToUpdate]
  deleteProduct(id:String):Product
  logIn(user_name: String! password:String!):String
  signUp(user_name: String! password:String!):String
newProduct(productInput: ProductInput!):Product
editProduct(productInput: editProductInput!):Product
}

  type Category {
    name: String
    img: String
  }
  type Image {
    large: String
    medium: String
    small: String
    alt: String
  }
  type Product  {
    _id:String
    name: String
    salePrice: Int
    quantity: Int
    description: String
    category: String
    discountPercentage: Int
    image:Image
  }
  type productToUpdate  {
    productId: String
    requiredQuantity: Int
  }
  input productToUpdateInput  {
    productId: String
    requiredQuantity: Int
  }
`);
