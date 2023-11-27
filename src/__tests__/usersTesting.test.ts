import { app } from "../server";
import request from "supertest";




const user1 = {
    user_name: "davidwdw",
    password: "Aa12345!",
}


describe("Test the users Router", () => {
    test("POST register ", async () => {
      const res = await request(app)
        .post("/api/users/register")
        .send(user1)
        .expect(200);
    expect(res.body.user_name).toBe(user1.user_name)   
    });
  });
  