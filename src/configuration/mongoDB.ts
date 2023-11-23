import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const dbPassword = process.env.DB_PASSWORD;
const dbUserName = process.env.DB_USER_NAME;
const dbName = "ERP-final-project";


const uri = `mongodb+srv://${dbUserName}:${dbPassword}@cluster0.llwz20q.mongodb.net/${dbName}?retryWrites=true&w=majority`;


export const connectToDatabase = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

