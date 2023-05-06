

const url = "https://api.noroff.dev/api/v1/rainy-days"

const productsContainer = document.querySelector(".product-list")
import { renderProducts } from "./ui/renderProducts.js"

async function getproducts() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const products = data;
    productsContainer.innerHTML = ""

    renderProducts(products);

  }
  catch (error) {
    console.log("There was an error with:", error)

  }
}

getproducts();
