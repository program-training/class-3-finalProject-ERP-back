import { UserModel } from "../../configuration/mongooseSchema";
import { userData, userFromDB } from "../../configuration/Types";
import { itemsPool } from "../../configuration/postGres";
export const getUserByUserNameDB = async (email: string) => {
  try {
    const user = await itemsPool.query(`SELECT * FROM users WHERE user_name = '${email}'`) as any;
    if (user.rows.length < 1) {
      return null;
    }
    return user.rows[0]
  } catch (err) {
    console.error("Failed to retrieve documents:", err);
    throw err;
  }
};



export const signUpDB = async (user: userData) => {
  try {
    const insert = await itemsPool.query(`
    INSERT INTO users (user_name, password) 
    VALUES ('${user.user_name}', '${user.password}')
  `) as any;
    if (insert.rowCount > 0)
      return user;
    else {
      return Promise.reject(new Error("user is Already exists"));
    }
  } catch (err) {
    console.error("Failed to retrieve documents:", err);
    throw err;
  }
};
