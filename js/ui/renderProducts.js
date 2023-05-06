
export function renderProducts(products) {
  products.forEach(function (product) {
    const productsContainer = document.querySelector(".product-list")
    productsContainer.innerHTML += `
            <div class="product-card-small">
                <div class="product-card-small-image">
                    <img src=${product.image} alt="${product.title}" />
                </div>
                <h6>${product.title}</h6>
                <div class="size-list">
                    <p class="size">${product.sizes[0]}</p>
                    <p class="size">${product.sizes[1]}</p>
                    <p class="size">${product.sizes[2]}</p>
                    <p class="size">${product.sizes[3]}</p>
                    <p class="size">${product.sizes[4]}</p>
                </div>
                <h4>$${product.price}</h4>
                <a href="product.html?id=${product.id}" aria-label=${product.tiltle}><span class="link"></span></a>

            </div>`


  })

}
