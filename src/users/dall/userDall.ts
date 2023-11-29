import { UserModel } from "../../configuration/mongooseSchema";
import { userData, userFromDB } from "../../configuration/Types";

export const getUserByUserNameDB = async (email: string) => {
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

export const signUpDB = async (user: userData) => {
  const newUser = new UserModel(user);
  try {
    const userFromDB = (await newUser.save()) as userFromDB;
    userFromDB._id = userFromDB._id.toString();
    return userFromDB;
  } catch (err) {
    console.error("Failed to retrieve documents:", err);
    throw err;
  }
};
