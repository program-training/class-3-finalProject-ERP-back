import { userData } from "../../configuration/Types";
import { client } from "../../configuration/redis";
import { getUserByUserNameDB, signUpDB } from "../dall/userDall";

export const signUp = async (user: userData) => {
  try {
    const checkUser = await getUserByUserNameDB(user.user_name);
    if (!checkUser) {
      const signUp = await signUpDB(user);
      await client.setEx(user.user_name, 60, user.password);
      return signUp;
    } else {
      return Promise.reject(new Error("user is Already exists"));
    }
  } catch (error) {
    return Promise.reject(error);
  }
};
