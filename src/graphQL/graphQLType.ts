import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} from "graphql";

export const userType = new GraphQLObjectType({
  name: "user",
  fields: () => ({
    user_name: { type: GraphQLString },
    password: { type: GraphQLString },
  }),
});
export const typeToken = new GraphQLObjectType({
    name: "token",
    fields: () => ({
        Token : { type: GraphQLString },
    }),
  });
export const product = new GraphQLObjectType({
    name:"product",
    fields: () => ({
        _id: { type: GraphQLString },
        name: { type: GraphQLString },
        salePrice: { type: GraphQLInt },
        quantity: { type: GraphQLInt },
        description:{ type: GraphQLString },
        category: { type: GraphQLString },
        discountPercentage: { type: GraphQLInt },
        image: {type:typeImages}
    }),
})


export const typeImages = new GraphQLObjectType({
    name: "images",
    fields: () => ({
        large: { type: GraphQLString },
        medium: { type: GraphQLString },
        small: { type: GraphQLString },
        alt: { type: GraphQLString },
    }),
  });


  export const itypeImages2 = new GraphQLObjectType({
    name: 'Image',
    fields: {
        large: { type: GraphQLString },
        medium: { type: GraphQLString },
        small: { type: GraphQLString },
        alt: { type: GraphQLString },
    }
  });