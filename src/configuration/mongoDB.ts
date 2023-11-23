import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const dbPassword = process.env.DB_PASSWORD;
const dbUserName = process.env.DB_USER_NAME;
const dbName = "ERP-final-project";


const uri =  process.env.MONGO_CONNECTION_URI;


export const connectToDatabase = async () => {
  try {
    if (!uri) throw new Error('uri not in found')
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

