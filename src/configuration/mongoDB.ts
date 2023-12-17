import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_CONNECTION_URI;

const triggerFunction = function() {
 console.log("gilad sinai")
};



export const connectToDatabase = async () => {
  try {
    if (uri) await mongoose.connect(uri);
    console.log("Connected to MongoDB");
    mongoose.connection.collection("triggers").insertOne({
      name: "myTrigger",
      event: "insert",
      ns: "products", 
      condition: {isNew: true},
      action: triggerFunction  
    });

  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
