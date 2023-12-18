import { userData, userFromDB } from "../configuration/Types";
import { secretKey } from "../configuration/jwt";
import { client } from "../configuration/redis";

export async function logInR(user: userData) {
  const value = await client.get(user.user_name);
  if (value) {
    if (value !== user.password) {
      return 0;
    } else {
      return 1;
    }
  } else {
    return 0;
  }
}

export async function getProductByIdR(id: string) {
  const data = await client.json.get(id);
  if (data) {
    return data;
  }else{
    return 0
  }
}

export async function allProductsR() {
    const data = await client.json.get("allProductsR");
    if (data) {
      return data;
    }else{
      return 0
    }
  }