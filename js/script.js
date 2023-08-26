
import { errorMessage } from "./components/errorMessage.js"
// const url = "https://api.noroff.dev/api/v1/rainy-days"


const url = "https://jambooblog.online/wp-json/wc/v3/products"
const consumer_key = "ck_4ac4239b5976edd2dd3993b1cf02ee5ae802f2d7"
const consumer_secret = "cs_76c26a90b48785549888b5489aaf9f033ca768df"
const baseUrl = url + `?consumer_key=${consumer_key}&consumer_secret=${consumer_secret}`



const productsContainer = document.querySelector(".product-list")
import { renderProducts } from "./ui/renderProducts.js"

async function getproducts() {
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();
    const products = data;
    productsContainer.innerHTML = ""
    console.log(products)

    renderProducts(products);

  }
  catch (error) {
    console.log(error)
    errorMessage(error, ".product-list")

  }
}

getproducts();
