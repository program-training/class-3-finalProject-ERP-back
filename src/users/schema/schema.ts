import { buildSchema } from "graphql";

export const schema = buildSchema(`
  type Query {
    logIn(user_name: String!, password: String!): String
    signUp(user_name: String!, password: String!): String
    externalCategories: [Category]
    externalCategory(id: String!): Category
  }

  type Category {
    name: String
    img: String
  }
`);

