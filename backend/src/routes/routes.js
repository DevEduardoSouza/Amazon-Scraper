import { Router } from "express";

import ProductController from "../controllers/ProductController.js";

const router = Router();

router.get("/api/product/scraper", ProductController.get);

export default router;
