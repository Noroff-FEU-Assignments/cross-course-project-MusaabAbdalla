
import { errorMessage } from "./components/errorMessage.js"
import { renderProductDetails } from "./ui/renderProductDetails.js"
import { featuredContainer, getFeaturedProducts } from "./ui/renderFeatureProducts.js"
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id")


const url = "https://jambooblog.online/wp-json/wc/v3/products/"
const consumer_key = "ck_4ac4239b5976edd2dd3993b1cf02ee5ae802f2d7"
const consumer_secret = "cs_76c26a90b48785549888b5489aaf9f033ca768df"
const baseUrl = url + `?consumer_key=${consumer_key}&consumer_secret=${consumer_secret}`
const productUrl = url + `${id}` + `?consumer_key=${consumer_key}&consumer_secret=${consumer_secret}`
const featuredUrl = baseUrl + `&featured=true`


const favourite = JSON.parse(localStorage.getItem("favourite")) || [];
async function getProduct(url) {
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
        console.log(error)
        errorMessage(error, ".product-card")
    };
}
getProduct(productUrl)

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

getFeaturedProducts(featuredUrl);
