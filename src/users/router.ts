import express from "express";
import { signUpC, logInC } from "./controllers/usersControllers";
import { validateData } from "./midelweres/userValidation";
import { schema } from "./schema/schema";
import { graphqlHTTP } from "express-graphql";
import { register } from "module";
const usersRouter = express.Router();

// usersRouter.post("/register", validateData, signUpC);
// usersRouter.post("/logIn", logInC);




const imagesData = [
    {
        id: 1,
        title: "Stacked Brwonies",
        owner: "Ella Olson",
        category: "Desserts",
        url: "https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg",
    }]


function getImage(args: { id: any; }) {
    for (const image of imagesData) {
        if (image.id === args.id) {
            return image;
        }
    }
}


function getImages(args: any) {
    if (args.category) {
        return imagesData.filter(
            (image) => image.category.toLowerCase() === args.category.toLowerCase()
        );
    } else {
        return imagesData;
    }
}

// Resolver
const root = {
    logIn: async (args: any) => {
        try {
            const result = await logInC(args);
            return result;
        } catch (error) {
            throw error;
        }
    },
    signUp: async (args: any) => {
        try {
            const result = await signUpC(args);
            return result;
        } catch (error) {
            throw error;
        }
    },
    image: getImage,
    images: getImages,
};

usersRouter.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    })
);


export default usersRouter
