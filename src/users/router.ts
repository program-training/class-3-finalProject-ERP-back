import express from "express";
import { signUpC, logInC } from "./controllers/usersControllers";
import { validateData } from "./midelweres/userValidation";
import { schema } from "./schema/schema";
import { graphqlHTTP } from "express-graphql";
import { register } from "module";
const usersRouter = express.Router();



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
export const root = {
    logIn: logInC,
    signUp: signUpC,
    image: getImage,
    images: getImages,
};



export default usersRouter
