
const categoryContainer = document.getElementById("category-container");
const cardContainer = document.getElementById("card-container");
const cardContainer2 = document.getElementById("card-container2");
const cartContainer = document.getElementById("cart-container")
const plantTotalPrice = document.getElementById("total-price");
const modalContainer = document.getElementById("modal-container");

let carts = [];

/// Category Plant ///
const loadCategory = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then(data => {
        const categories = data.categories
        
        showCategory(categories)
    })
    .catch(err => {
        console.log(err);
    });
}

        //Category Section ///
const showCategory = (categories) =>{
    categories.forEach(cat => {
        categoryContainer.innerHTML += `
            <div id="${cat.id}" class="text-gray-500 my-1 hover:bg-green-600 rounded-lg p-1 hover:text-white">${cat.category_name}</div>
        `;
    });

    categoryContainer.addEventListener("click", (e) => {
        
        const allDiv = document.querySelectorAll("div")
        
        allDiv.forEach(div => {
            div.classList.remove('bg-green-500')
        })
        if(e.target.localName === "div"){
            // showSpinner()
            e.target.classList.add("bg-green-500");
            loadCardByCategoriy(e.target.id)
            
        }
    })
}

const loadCardByCategoriy = (categoryID) => {
    manageSpinner(true);
    fetch(`https://openapi.programming-hero.com/api/category/${categoryID}`)
    .then((res) => res.json())
    .then(data => {
        
        showCardByCategory(data.plants)
    })
    .catch(err => {
        console.log(err);
    });
}

const loadAllCards= (categoryID) => {
    manageSpinner(true);
    fetch(`https://openapi.programming-hero.com/api/plants`)
    .then((res) => res.json())
    .then(data => {
        
        showCardByCategory(data.plants)
    })
    .catch(err => {
        console.log(err);
    });
}

        //Card Section  ////
const showCardByCategory = (card) => {
    cardContainer.innerHTML = "";
    card.forEach(cards => {
        cardContainer.innerHTML += `
                <div class="p-3 rounded-2xl bg-white shadow-sm">
                    <img class="w-full h-[175px] lg:h-[300px] rounded-xl" src="${cards.image}" alt="photo">
                        <div id ="${cards.id}">
                        <h2 onclick="loadTreeDetails(${cards.id})" class="text-2xl font-semibold">${cards.name}</h2>
                        </div>
                        <p class="text-gray-500 py-2 line-clamp-2 lg:line-clamp-3 ">${cards.description}</p>
                        <div class="flex justify-between py-4">
                            <h3 class="bg-green-200 text-green-700 px-3 rounded-full">${cards.category}</h3>
                            <h3 class="">৳<span>${cards.price}</span></h3>
                        </div>
                        <button class="btn bg-green-700 text-white w-full rounded-2xl">Add to Cart</button>
                </div>
        `;
    })
    manageSpinner(false)
}

//// Spinner ////
const manageSpinner = (status) =>{
    if(status == true){
        document.getElementById("spinner").classList.remove("hidden")
        document.getElementById("card-container").classList.add("hidden")
    }
    else{
        document.getElementById("card-container").classList.remove("hidden")
        document.getElementById("spinner").classList.add("hidden")
    }
}

//// Modal /// 
const loadTreeDetails =async(id) => {
    const url = `https://openapi.programming-hero.com/api/plant/${id}`;
    const res = await fetch(url);
    const treeDetails = await res.json();
    displayTreeDetails(treeDetails.plants);
}

const displayTreeDetails = (cards) => {
    modalContainer.innerHTML = "";
    modalContainer.innerHTML += `
        <h1 class="font-bold text-2xl">${cards.name}</h1>
        <div class="py-3"><img class="w-full h-[175px] lg:h-[300px] rounded-xl" src="${cards.image}" alt=""></div>
        <h2 class="py-3"><span class="font-semibold">Category: </span>${cards.category}</h2>
        <h3><span class="font-semibold">Price: $</span>${cards.price}</h3>
        <p><span class="font-semibold pt-3">Description: </span>${cards.description}</p>
        
    `;
    document.getElementById("tree_modal").showModal();
}

///  Cart Load///
cardContainer.addEventListener("click", (e) => {
    if(e.target.innerText === "Add to Cart"){
        handleCarts(e)
        const title = e.target.parentNode.children[1].innerText
        
        alert(`${title} tree has been added to the Cart.` )
    }
});

const handleCarts = (e) => {
    const title = e.target.parentNode.children[1].innerText
       const id = e.target.parentNode.children[1].id
       const price = e.target.parentNode.children[3].children[1].children[0].innerText;
       carts.push({
        id: id,
        title:title,
        price:price
       });
       showCarts(carts)
       
       //// Tree Price ///
      const Totalprice = parseInt(plantTotalPrice.innerText);
      const treePrice = parseInt(price)
       let cartsPrice = Totalprice + treePrice;
       const grandTotal = plantTotalPrice.innerText = cartsPrice;

}
const showCarts = (carts) => {
    cartContainer.innerHTML = "";
    carts.forEach(cart => {
        cartContainer.innerHTML += `
            <div class="bg-green-50 rounded-lg m-3 p-2 space-y-2">
                    <h3 class="">${cart.title}</h3>
                    <div class="flex justify-between items-center">
                        <p class="text-gray-500 text-sm">৳<span id="plant-price">${cart.price}</span> x <span>1</span></p>
                        <button onclick="cartDeleteBtn('${cart.id}')" class="text-red-700">X</button>
                    </div>

            </div>
        `;

    }) 
}


/// Cart Delete Button ////
const cartDeleteBtn = (cartID) => {
   const filterCarts = carts.filter(cart => cart.id !== cartID)
   carts = filterCarts
   showCarts(carts)
}


loadCategory()
loadAllCards()
