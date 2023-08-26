
export function renderProductDetails(product) {

    const productContainer = document.querySelector(".product-card")
    productContainer.innerHTML = `

            <div class="product-card-small-image-detail">
                <img src=${product.images[0].src} alt=${product.name} />
            </div>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="size-list">
                    <p class="size">${product.attributes[0].options[0]}</p>
                    <p class="size">${product.attributes[0].options[1]}</p>
                    <p class="size">${product.attributes[0].options[2]}</p>
                    <p class="size">${product.attributes[0].options[3]}</p>
                    <p class="size">${product.attributes[0].options[4]}</p>
            </div>
            <div class="buttons-container">
                <a href="cart.html" class="button">Add to cart</a>
                <a href="#"  class="button fav-button" id="fav-button"><i class="fa fa-heart"></i></a>
            </div>
            <h4>$${product.price}</h4>
`
}
