
import { errorMessage } from "./components/errorMessage.js"
// const url = "https://api.noroff.dev/api/v1/rainy-days"

import { featuredContainer, getFeaturedProducts } from "./ui/renderFeatureProducts.js"

const url = "https://jambooblog.online/wp-json/wc/v3/products"
const consumer_key = "ck_4ac4239b5976edd2dd3993b1cf02ee5ae802f2d7"
const consumer_secret = "cs_76c26a90b48785549888b5489aaf9f033ca768df"
const baseUrl = url + `?consumer_key=${consumer_key}&consumer_secret=${consumer_secret}`
const featuredUrl = baseUrl + `&featured=true`


const productsContainer = document.querySelector(".product-list")
import { renderProducts } from "./ui/renderProducts.js"

async function getproducts(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const products = data;
    productsContainer.innerHTML = ""

    renderProducts(products);

  }
  catch (error) {
    console.log(error)
    errorMessage(error, ".product-list")

  }
}

getproducts(baseUrl);

getFeaturedProducts(featuredUrl);



// const featuredContainer = document.querySelector(".product-list-featured")


// async function getFeaturedProducts(url) {
//   try {
//     const response = await fetch(url)
//     const data = await response.json()
//     const products = data;
//     console.log(products)
//     featuredContainer.innerHTML = ""
//     renderFeaturedProducts(products)
//   }
//   catch (error) {
//     errorMessage(error, ".product-list-featured")
//   }
// }

// getFeaturedProducts(featuredUrl);




// function renderFeaturedProducts(products) {
//   products.forEach(function (product) {
//     featuredContainer.innerHTML += `
//             <div class="product-card-small">
//                 <div class="product-card-small-image">
//                     <img src=${product.images[0].src} alt="${product.name}" />
//                 </div>
//                 <h6>${product.name}</h6>


//                 <h4>$${product.price}</h4>
//                 <a href="product.html?id=${product.id}" aria-label=${product.tiltle}><span class="link"></span></a>

//             </div>`


//   })

// }

                // <div class="size-list">
                //     <p class="size">${product.attributes[0].options[0]}</p>
                //     <p class="size">${product.attributes[0].options[1]}</p>
                //     <p class="size">${product.attributes[0].options[2]}</p>
                //     <p class="size">${product.attributes[0].options[3]}</p>
                //     <p class="size">${product.attributes[0].options[4]}</p>
                // </div>
