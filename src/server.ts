import express from "express";
import cors from "cors";
import router from "./router/router";

const app = express();

app.use(cors);
app.use(express.json());
app.use(router)

app.listen(3009, async () => {
  console.log(`Server is up and running on port 3009`);
});
