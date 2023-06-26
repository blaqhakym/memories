const Products = require("../model/Product");
const asyncHandler = require("express-async-handler");
import {Request, Response} from "express"


export const getProducts = asyncHandler(async (req:Request, res:Response) => {
  const products = await Products.find();
  if (!products?.length) {
    return res.status(204).json({message: "No product found"});
  }
  res.json(products);
});

export const postProducts = asyncHandler(async (req:Request, res:Response) => {
  const { order, date, customer, total, paymentStatus, fufillmentStatus } =
    await req.body;

  if (
    !order ||
    !date ||
    !customer ||
    !total ||
    !paymentStatus ||
    !fufillmentStatus
  )
    return res.status(400).json({ message: "All fields are required" });

  await Products.create({
    order,
    date,
    customer,
    total,
    paymentStatus,
    fufillmentStatus,
  });

  res
    .status(201)
    .json({ message: `new product details for ${customer} created` });
});
module.exports = { getProducts, postProducts };
