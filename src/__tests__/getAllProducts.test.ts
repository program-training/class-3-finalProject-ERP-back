import { app } from "../server";
import request from "supertest";

const product1 = {
  image: {
    large:
      "https://raw.githubusercontent.com/akiva1132/filesServer/master/dist/products/gadgets/gamingconsole_600.png?raw=true",
    medium:
      "https://raw.githubusercontent.com/akiva1132/filesServer/master/dist/products/gadgets/gamingconsole_300.png?raw=true",
    small:
      "https://raw.githubusercontent.com/akiva1132/filesServer/master/dist/products/gadgets/gamingconsole_150.png?raw=true",
    alt: "Gaming Console Image",
  },
  name: "try",
  salePrice: 79,
  quantity: 60,
  description: "Description for Gaming Console",
  category: "gadgets",
  discountPercentage: 10,
};
const product2 = {
  image: {
    large:
      "https://raw.githubusercontent.com/akiva1132/filesServer/master/dist/products/gadgets/gamingconsole_600.png?raw=true",
    medium:
      "https://raw.githubusercontent.com/akiva1132/filesServer/master/dist/products/gadgets/gamingconsole_300.png?raw=true",
    small:
      "https://raw.githubusercontent.com/akiva1132/filesServer/master/dist/products/gadgets/gamingconsole_150.png?raw=true",
    alt: "Gaming Console Image",
  },
  name: "try",
  salePrice: 2,
  quantity: 2,
  description: "Description for Gaming Console",
  category: "gadgets",
  discountPercentage: 10,
};


const id = {
  id:''
}
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfbmFtZSI6ImFraXZhMTEzMTJnbWFpbC5jb20iLCJwYXNzd29yZCI6IkFraXZhMTEzMiEiLCJfaWQiOiI2NTVmM2FkZjM0Y2E2ZDFkZGQ4ZDk4NDIiLCJfX3YiOjB9LCJpYXQiOjE3MDA3Mzk4MDcsImV4cCI6MTcwMzMzMTgwN30.hNhnZyh-0tw_TrbF8UnfidgXFQR3u5noRiaAFiH5KEk";

describe("Test the Products Router", () => {
  test("GET /products returns all products with authentication", async () => {
    const response = await request(app)
      .get("/inventory/")
      .set("Authorization", token)
      .timeout(10000)
      .expect(200);
    expect(response.body.length).toBeGreaterThan(12);
  });

  test("GET /products/:id returns a product by ID", async () => {
    const res = await request(app)
      .get("/inventory/655f1cc1dab13343a8db7984")
      .set("Authorization", token)
      .expect(200);
    console.log(res.body.name);
      
  });

  test("POST /inventory adds a new product", async () => {
    const res = await request(app)
      .post("/inventory/")
      .set("Authorization", token)
      .send(product1)
      .timeout(1000);
    id.id = res.body._id;  
    expect(res.statusCode).toBe(201); 
    expect(res.body.name).toBe(product1.name); 
  });

  test("PUT /products/:id updates a product", async () => {
    const response = await request(app)
    .put(`/inventory/${id.id}`)
    .set("Authorization", token)
    .send(product2)
    .expect(200);
    expect(response.body.quantity === 2)
  });

  test("DELETE /products/:id deletes a product", async () => {
    const response = await request(app)
    .delete(`/inventory/${id.id}`)
    .set("Authorization", token)
    .expect(204);
  });

  test("GET / categories without authentication", async () => {
    const response = await request(app)
      .get("/shop_inventory/categories")
      .set("Authorization", token)
      .timeout(1000)
      .expect(200);
    expect(response.body.length).toEqual(14)
  });
});
