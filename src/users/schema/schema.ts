import { buildSchema } from "graphql";



export const schema = buildSchema(`
      type Query {
        image(id: Int!): Image
        logIn(user_name: String! password:String!):String
        signUp(user_name: String! password:String!):String
        images(category: String): [Image]
      }
      type Image {
        id: Int
        title: String
        category: String
        owner: String
        url: String
      }
`);