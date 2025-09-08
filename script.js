
const categoryContainer = document.getElementById("category-container");
const cardContainer = document.getElementById("card-container");

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
        if(e.target.localName == "div"){
            // console.log(e.target.id);
            e.target.classList.add("bg-green-500");
            loadCardByCategoriy(e.target.id)
        }
    })
}

const loadCardByCategoriy = (categoryID) => {
    console.log(categoryID);
    fetch(`https://openapi.programming-hero.com/api/category/${categoryID}`)
    .then((res) => res.json())
    .then(data => {
        // console.log(data.plants);
        showCardByCategory(data.plants)
    })
    .catch(err => {
        console.log(err);
    });
}

const showCardByCategory = (card) => {
    // console.log(card);
    cardContainer.innerHTML = "";
    card.forEach(cards => {
        cardContainer.innerHTML += `
                <div class="p-3 rounded-2xl bg-white">
                    <img class="rounded-xl" src="${cards.image}" alt="photo">
                        <h2 class="text-2xl font-semibold">${cards.name}</h2>
                        <p class="text-gray-500 py-2">${cards.description}</p>
                        <div class="flex justify-between py-4">
                            <h3 class="bg-green-200 text-green-700 px-3 rounded-full">${cards.category}</h3>
                            <h3 class="">৳<span>${cards.price}</span></h3>
                        </div>
                        <button class="btn bg-green-700 text-white w-full rounded-2xl">Add to Cart</button>
                </div>
        `;
    })
    
}


loadCategory();
