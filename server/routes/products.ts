import express from 'express'
// import {Router} from 'express';
import {
  getProducts,
  postProducts,
} from "../controller/productController"


const router = express.Router()
router.route("/")
.get(getProducts)
.post(postProducts);


module.exports = router