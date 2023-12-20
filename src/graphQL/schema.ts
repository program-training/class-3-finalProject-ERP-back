
export const typeDefs = `
type Query {
  allProducts:[Product]
  OneProductPage(page:Int):[Product]
  getProductById(id:String):Product
  externalProducts(search: String): [Product]
  graf:[Graf]
  grafUser(id:String):Graf
  registerData: [Days]
  externalCategories: [Category]
  externalCategory(id: String!): Category
}


type Mutation {
  ExternalUpdateInventory(up:productToUpdateInput):[productToUpdate]
  updateInventory(up:productToUpdateInput):[productToUpdate]
  deleteProduct(id:String):Product
  logIn(user_name: String! password:String!):String
  signUp(user_name: String! password:String!):String
newProduct(productInput: ProductInput!):Product
editProduct(productInput: editProductInput!):Product
}


type Subscription {
  graf:[Graf]
  registerData: [Days]
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
        _id:String
        name: String
        img: String
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

`
