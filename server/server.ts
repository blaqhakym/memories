//imports
import express from "express";
const app = express();
import cors from "cors";
require("dotenv").config();
import mongoose from "mongoose";
import connectdB from "./config/dbConnect";
const PORT = process.env.PORT || 3500;

//connect mongo
connectdB();

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//routes
app.use("/", require("./routes/products"));

//mongo connection listener
mongoose.connection.once("open", () => {
  console.log("database is now open");
  app.listen(PORT, () => {
    console.log("listening to request at PORT: " + PORT);
  });
});