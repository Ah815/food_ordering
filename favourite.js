var favouriteItems = []
var container = document.getElementById('container')

getItemsFromLocalStorage()

function getItemsFromLocalStorage() {
    var item = localStorage.getItem('favouriteItems')
    console.log('item from local storge=>', item)
    if (item) {
        item = JSON.parse(item)

        favouriteItems = item
        favourite.innerText = `favourite (${item.length})`
    }
}

for (var i = 0; i < favouriteItems.length; i++) {
    var foodObj = favouriteItems[i]
    var card = `<div class='cartCard'">
      <div>
        <h5 class="card-title">${foodObj.title}</h5>
        <p class="card-text">
        ${foodObj.description}
        </p>
      </div>
    </div>
  </div>`

    container.innerHTML += card
}

function clearFavourite() {
    favouriteItems = []
    localStorage.clear()
    cart.innerText = `Cart`
    container.innerHTML = ''
}


console.log(favouriteItems)