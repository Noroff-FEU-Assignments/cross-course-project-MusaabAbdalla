const favourite = JSON.parse(localStorage.getItem("favourite"));
const favListContainer = document.querySelector(".favourite-list-container")

function showFavourite() {
  favListContainer.innerHTML = ""
  favourite.forEach(function (product) {
    favListContainer.innerHTML += `

            <div class="favourite-item">
                <div class="favourite-item-image">
                    <img src=${product.image} alt="" />
                </div>
                <div>${product.title}</div>
                <div>${product.price}</div>
                <i class="fa-duotone fa-trash" data-id="${product.id}"></i>
             </div>
`
  });
  const delFavButton = document.querySelectorAll(".favourite-item i")
  console.log(delFavButton)
  delFavButton.forEach(item => {
    item.onclick = function () {
      const id = this.dataset.id
      const newFavourite = favourite.filter(fav => {
        return fav.id !== id;
      })

      savFavs(newFavourite);
      location.reload()

    }
  })
}

showFavourite();

function savFavs(item) {
  localStorage.setItem("favourite", JSON.stringify(item))
}
