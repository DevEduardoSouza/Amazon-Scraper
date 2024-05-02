import { amazonScraper } from "../utils/amazonScraper.js";

class ProductRepository {
  async getScraper(keyword) {
    return amazonScraper(keyword);
  }
}

export default new ProductRepository();
