
const categoryContainer = document.getElementById("category-container")

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
            <div class="text-gray-500 hover:bg-green-600 rounded-lg p-1 hover:text-white">${cat.category_name}</div>
        `;
    });

    categoryContainer.addEventListener("click", (e) => {
        showCardByCategoriy(e.target.id)
        console.log(e.target.id);
    })
}

const showCardByCategoriy = (categoryID) => {
    fetch(`https://openapi.programming-hero.com/api/category/${categoryID}`)
    .then((res) => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });
}



loadCategory();