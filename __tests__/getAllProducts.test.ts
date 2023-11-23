import { app } from "../src/server";
import request from "supertest";


describe("Test the root path", () => {
  test("It should respond to the GET method", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);

  });
});
