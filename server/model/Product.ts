const { Timestamp } = require("mongodb");
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productSchema = new Schema({
  order: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  customer: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: ["Pending", "Paid", "Refunded"],
    default: "Pending",
  },
  fulfillmentStatus: {
    type: String,
    enum: ["Pending", "Shipped", "Delivered"],
    default: "Pending",
  },
}
);

module.exports = mongoose.model("Product", productSchema);
