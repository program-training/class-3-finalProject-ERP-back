import { buildSchema } from "graphql";



export const schema = buildSchema(`
    type Query {
    logIn(user_name: String! password:String!):String
    signUp(user_name: String! password:String!):String
    externalProducts(search: String): [Product]
    }

    type Mutation {
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



    type Product {
    _id: String
    name: String
    salePrice: Int
    quantity: Int
    description: String
    category: String
    discountPercentage: Int
    image: Image
    }

    input ImageInput {
        large: String
        medium: String
        small: String
        alt: String
    }
    type Image {
    large: String
    medium: String
    small: String
    alt: String
    }
`);