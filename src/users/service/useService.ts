import { userData } from "../../configuration/Types";
import { getUserByUserNameDB, signUpDB } from "../dall/userDall";

export const signUp = async (user: userData) => {
  try {
    const checkUser = await getUserByUserNameDB(user.user_name);
    if (!checkUser) {
      const signUp = await signUpDB(user);
      return signUp;
    } else {
      return Promise.reject(new Error("user is Already exists"));
    }
  } catch (error) {
    return Promise.reject(error);
  }
};
