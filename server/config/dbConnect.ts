import { connect } from "mongoose";
require("dotenv").config();

const connectDb = async () => {
  try {
    await connect(process.env.DATABASE_URI || "");
  } catch (error) {
    console.error(error);
  }
};

export default connectDb;
