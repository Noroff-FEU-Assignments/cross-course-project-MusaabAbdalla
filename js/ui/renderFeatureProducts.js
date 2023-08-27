import { errorMessage } from "../components/errorMessage.js";
export const featuredContainer = document.querySelector(".product-list-featured")


export async function getFeaturedProducts(url) {
  try {
    const response = await fetch(url)
    const data = await response.json()
    const products = data;
    console.log(products)
    featuredContainer.innerHTML = ""
    renderFeaturedProducts(products)
  }
  catch (error) {
    console.log(error)
    errorMessage(error, ".product-list-featured")
  }
}


function renderFeaturedProducts(products) {
  products.forEach(function (product) {
    featuredContainer.innerHTML += `
            <div class="product-card-small">
                <div class="product-card-small-image">
                    <img src=${product.images[0].src} alt="${product.name}" />
                </div>
                <h6>${product.name}</h6>


                <h4>$${product.price}</h4>
                <a href="product.html?id=${product.id}" aria-label=${product.tiltle}><span class="link"></span></a>

            </div>`


  })

}
