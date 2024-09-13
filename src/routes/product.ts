import express from "express"
import { getProduct,postProducts } from "../controllers/productController"

const router = express.Router()

router.route("/").get(getProduct).post(postProducts)


export default router