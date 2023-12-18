import { userData } from "../configuration/Types";
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
  } else {
    return 0;
  }
}

export async function allProductsR() {
  const data = await client.json.get("allProductsR");
  if (data) {
    return data;
  } else {
    return 0;
  }
}

export async function dataGrafR() {
  const data = await client.json.get("dataGrafR");
  if (data) {
    return data;
  } else {
    return 0;
  }
}

export async function OneProductPageR(page: number) {
  const data = await client.json.get(`page_${page}`);
  if (data) {
    return data;
  } else {
    return 0;
  }
}

export async function delitePages() {
  const dataKeys = await client.keys("page_*");
  for (let key of dataKeys) {
    await client.json.del(key);
  }
}

export async function getCategoriesR() {
  const data = await client.json.get(`getCategoriesR`);
  if (data) {
    return data;
  } else {
    return 0;
  }
}

export async function getCategoryByIdR(categoryID: string) {
  const data = await client.json.get(`getCategor_${categoryID}`);
  if (data) {
    return data;
  } else {
    return 0;
  }
}
