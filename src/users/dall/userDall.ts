import { UserModel } from "../../configuration/userSchema";
import { userData } from "../../configuration/TypeUser";
import { productUpdate } from "../../configuration/TypeUser";
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
    const userMd = await newUser.save();
    console.log(userMd);
    return userMd;
  } catch (err) {
    console.error("Failed to retrieve documents:", err);
    throw err;
  }
};
