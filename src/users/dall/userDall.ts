import { UserModel } from "../../configuration/mongooseSchema";
import { userData } from "../../configuration/TypeUser";
import { productUpdate } from "../../configuration/TypeUser";

type UserFromDB = {
  user_name: string
  password: string
  _id: object | string
  __v: 0
}

export const getUserByEmail = async (email: string) => {
  try {
    const document = await UserModel.findOne({ user_name: email });
    if (!document) {
      return null;
    }
    return document;
  } catch (err) {
    console.error("Failed to retrieve documents:", err);
    throw err;
  }
};

export const addUser = async (user: userData) => {
  const newUser = new UserModel(user);
  try {
    const userFromDB = await newUser.save() as UserFromDB
    userFromDB._id = userFromDB._id.toString();
    return userFromDB;
  } catch (err) {
    console.error("Failed to retrieve documents:", err);
    throw err;
  }
};
