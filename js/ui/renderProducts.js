
export function renderProducts(products) {
    products.forEach(function (product) {
        const productsContainer = document.querySelector(".product-list")
        productsContainer.innerHTML += `
            <div class="product-card-small">
                <div class="product-card-small-image">
                    <img src=${product.images[0].src} alt="${product.name}" />
                </div>
                <h6>${product.name}</h6>
                <div class="size-list">
                    <p class="size">${product.attributes[0].options[0]}</p>
                    <p class="size">${product.attributes[0].options[1]}</p>
                    <p class="size">${product.attributes[0].options[2]}</p>
                    <p class="size">${product.attributes[0].options[3]}</p>
                    <p class="size">${product.attributes[0].options[4]}</p>
                </div>
                <h4>$${product.price}</h4>
                <a href="product.html?id=${product.id}" aria-label=${product.tiltle}><span class="link"></span></a>

            </div>`


    })

}

