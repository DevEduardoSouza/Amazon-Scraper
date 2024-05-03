import { createCard } from "./card.js";
import {
  changeValueFound,
  toggleBlockButton,
  cleanList,
  toggleSpinner,
} from "./utils/utils.js";

const containerList = document.querySelector(".list-products");
const URL = "http://localhost:3000/api/product/scraper?";
const form = document.querySelector("form");
const button = document.querySelector("form button");
const spinner = document.querySelector(".spinner");

async function getProducts(keyword) {
  try {
    toggleBlockButton(button);
    toggleSpinner(spinner, true);
    const data = await axios.get(`${URL}keyword=${keyword}`);

    fillProducts(data.data.products);
  } catch (error) {
    console.log("error getting products", e);
  } finally {
    toggleBlockButton(button);
    toggleSpinner(spinner, false);
  }
}

function fillProducts(products) {
  cleanList(containerList);
  products.forEach((product) => {
    const card = createCard(product);
    containerList.appendChild(card);
  });
}

const formEvents = (form) => {
  const input = document.querySelector("form input");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const keyword = input.value;

    if (!keyword) {
      return;
    }

    changeValueFound(keyword);
    await getProducts(keyword);
  });
};

function init() {
  changeValueFound("");
  formEvents(form);
}

init();
