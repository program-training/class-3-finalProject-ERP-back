import { buildSchema } from "graphql";

export const schema = buildSchema(`
type Query {
  allProducts:[Product]
  OneProductPage(page:Int):[Product]
  getProductById(id:String):Product
  externalProducts(search: String): [Product]
  graf:[Graf]
  grafUser(id:String):Graf
  externalCategories: [Category]
  externalCategory(id: String!): Category
  registerData(start: String! end: String!): [Days]
}


type Graf  {
  product_name: String
  quantity: Int
  time: [Time2]
}
type Time2 {
  time: String
  quantity: Int
}
type Days {
  login_day: String  
  login_count: Int
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
  salePrice: Float  
  quantity: Float  
  description: String
  category: String
  discountPercentage: Float  
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

      type Category {
        name: String
        img: String
      }
    type Mutation {
      updateInventory(up:productToUpdateInput):[productToUpdate]
      deleteProduct(id:String):Product
      logIn(user_name: String! password:String!):String
      signUp(user_name: String! password:String!):String
    newProduct(productInput: ProductInput!):Product
    editProduct(productInput: editProductInput!):Product
    }
    input ProductInput {
    name: String
    salePrice: Int
    quantity: Int
    description: String
    category: String
    discountPercentage: Int
    image: ImageInput
    }

    input editProductInput {
        _id: String
        name: String
        salePrice: Int
        quantity: Int
        description: String
        category: String
        discountPercentage: Int
        image: ImageInput
        }


    input ImageInput {
        large: String
        medium: String
        small: String
        alt: String
    }

`); 
