import axios from "axios";
import { JSDOM } from "jsdom";
import { configs } from "../config/configs.js";

// function to get the html of the page
const getPage = async (url) => {
  try {
    const response = await axios.get(url, { headers: configs.headers });
    return response.data;
  } catch (error) {
    console.error("Error fetching page:", error);
    throw error;
  }
};

export const amazonScraper = async (keyword) => {
  const listProduct = [];

  try {
    const html = await getPage(
      `https://www.amazon.com/s?k=${keyword}&crid=B6LSD8ORYZW1&sprefix=${keyword}%2Caps%2C320&ref=nb_sb_noss_2`
    );

    const dom = new JSDOM(html);
    const document = dom.window.document;

    const products = document.querySelectorAll(
      ".s-result-list.s-search-results.sg-row > div"
    );

    products.forEach((product) => {
      try {
        const name = product.querySelector(
          ".a-size-mini.a-spacing-none.a-color-base a span"
        );
        const numberOfReviews = product.querySelector(
          ".s-csa-instrumentation-wrapper.alf-search-csa-instrumentation-wrapper span a span"
        );
        const rating = product.querySelector(".a-icon-alt");
        const imageUrl = product.querySelector(".s-image");

        if (name) {
          listProduct.push({
            name: name.textContent.trim(),
            numberOfReviews: numberOfReviews
              ? numberOfReviews.textContent.trim()
              : 0,
            rating: rating ? rating.textContent.trim() : "Don't have",
            imageUrl: imageUrl ? imageUrl.src : null,
          });
        } else {
          // console.log("Product name not found");
        }
      } catch (error) {
        console.error("Error parsing product:", error);
      }
    });

    return listProduct;
  } catch (error) {
    console.error("Error scraping Amazon:", error);
    throw error;
  }
};
