
import { errorMessage } from "./components/errorMessage.js"
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id")
const url = "https://api.noroff.dev/api/v1/rainy-days/" + id;
import { renderProductDetails } from "./ui/renderProductDetails.js"
async function getProduct() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const product = data;
        renderProductDetails(product);
    }
    catch (error) {
        errorMessage(error, ".product-card")
    };
}
getProduct()
