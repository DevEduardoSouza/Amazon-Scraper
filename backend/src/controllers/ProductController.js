import ProductRepository from "../repositories/ProductRepository.js";

class ProductController {
  async get(req, res) {
    const keyword = req.query.keyword;

    if (!keyword) {
      return res.status(400).json({ error: "Missing keyword parameter" });
    }

    const products = await ProductRepository.getScraper(keyword);
    res.status(200).json({ products });
  }
}

export default new ProductController();
