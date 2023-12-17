import jwt from "jsonwebtoken";
import { getUserByUserNameDB } from "../users/dall/userDall";
import { secretKey } from "../configuration/jwt";
import { userData } from "../configuration/Types";

export const getToken = async (user:userData) => {
  try {    
    const usersFromDB = await getUserByUserNameDB(user.user_name);
    if (!usersFromDB) {
      return Promise.reject(new Error("user is not found"));
    }
    console.log(user, usersFromDB);
    if (usersFromDB.password !== user.password) {
      return Promise.reject(new Error("The password is incorrect!"));
    }
    const id = user.user_name
    const token = jwt.sign({ id }, secretKey, { expiresIn: "30d" });
    return token;
  } catch (error) {
    return Promise.reject(error);
  }
};
