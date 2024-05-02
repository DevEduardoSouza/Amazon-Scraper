import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/?retryWrites=true&w=majority`;

export const connection = () => {
  try {
    mongoose.connect(uri);
    console.log("Successfully connected to the database");
  } catch (error) {
    console.log("Error connecting to the database", error);
  }
};
