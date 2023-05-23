
import { errorMessage } from "./components/errorMessage.js"
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id")
const url = "https://api.noroff.dev/api/v1/rainy-days/" + id;
import { renderProductDetails } from "./ui/renderProductDetails.js"
const favourite = JSON.parse(localStorage.getItem("favourite"))
async function getProduct() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const product = data;
        renderProductDetails(product);

        const favButton = document.querySelector(".fav-button");
        const favIcon = document.querySelector(".fav-button i")
        const productExist = favourite.find(function (item) {
            return item.id === product.id;
        })
        if (productExist) {
            favIcon.classList.add("fa-active")

        }

        favButton.onclick = function () {
            favIcon.classList.toggle("fa-active")
            const existingFav = getExistingFav();

            const productExist = existingFav.find(function (item) {
                return item.id === product.id
            })
            if (!productExist) {
                existingFav.push(product)
                savFavs(existingFav)
            }
            else {
                const newFavs = existingFav.filter(function (item) {
                    return item.id !== product.id
                });
                savFavs(newFavs);
            }

        }


    }
    catch (error) {
        errorMessage(error, ".product-card")
    };
}
getProduct()

function getExistingFav() {
    const favourite = localStorage.getItem("favourite")
    if (!favourite) {
        return []

    }
    else {
        return JSON.parse(favourite)
    }
}

function savFavs(item) {
    localStorage.setItem("favourite", JSON.stringify(item))
}
