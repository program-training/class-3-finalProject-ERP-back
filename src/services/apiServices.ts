import jwt from "jsonwebtoken";
import { getUserByUserNameDB } from "../users/dall/userDall";
import { secretKey } from "../configuration/jwt";
import { userData, userFromDB } from "../configuration/Types";
import { client } from "../configuration/redis";
import { logInR } from "../redis/redisFunc";

export const getToken = async (user: userData) => {
  try {
    // const redis = await logInR(user);
    // if (!redis) {
      const usersFromDB = await getUserByUserNameDB(user.user_name);
      if (!usersFromDB) {
        return Promise.reject(new Error("user is not found"));
      }
      if (usersFromDB.password !== user.password) {
        return Promise.reject(new Error("The password is incorrect!"));
      }
      // await client.setEx(user.user_name, 60, user.password);
    // }
    const id = user.user_name;
    const token = jwt.sign({ id }, secretKey, { expiresIn: "30d" });
    return token;
  } catch (error) {
    return Promise.reject(error);
  }
};
