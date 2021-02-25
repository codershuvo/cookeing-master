const search = document.getElementById('search-field');

const searchMeals = () => {
    const searchText = search.value; 
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    // load data
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}




// display meal data 
const displayMeals = meals => {
    const mealContainer = document.getElementById('meal-container'); 
    meals.forEach(meal => {
        const mealStyleContainer = document.createElement('div'); 
        mealStyleContainer.className = 'col-12 col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center'
        const mealDiv = document.createElement('div'); 
        mealDiv.className = 'food bg-white mb-3 rounded'
        mealDiv.innerHTML = `
            <a href="#" onclick="getMealById(${meal.idMeal})" id="detail">
                <img class="img-fluid mb-3" src="${meal.strMealThumb}" alt="">
                <h4>${meal.strMeal}</h4>
            </a>
        `; 
        mealStyleContainer.appendChild(mealDiv);
        mealContainer.appendChild(mealStyleContainer); 
    });
}; 



const getMealById = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    // load data 
    fetch(url)
    .then(res => res.json())
    .then(data => displayInfoMill(data.meals))
}


// display food info
const displayInfoMill = info => {
    const mealInfo = document.getElementById('meal-info'); 
    info.forEach(detail => {
        const div = document.createElement('div');
        div.style.width = '18rem'; 
        div.className = 'card mx-auto mb-3'; 
        div.innerHTML = `
            <img class="card-img-top img-fluid p-1" src="${detail.strMealThumb}" alt="Card image cap">
            <div class="card-body">
                <h4>${detail.strMeal}</h4>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${detail.strIngredient1}</li>
                    <li class="list-group-item">${detail.strIngredient2}</li>
                    <li class="list-group-item">${detail.strIngredient3}</li>
                    <li class="list-group-item">${detail.strIngredient4}</li>
                    <li class="list-group-item">${detail.strIngredient5}</li>
                    <li class="list-group-item">${detail.strIngredient6}</li>
                    <li class="list-group-item">${detail.strIngredient7}</li>
                    <li class="list-group-item">${detail.strIngredient8}</li>
                    <li class="list-group-item">${detail.strIngredient9}</li>
                    <li class="list-group-item">${detail.strIngredient10}</li>
                </ul>
            </div>
        `;
        mealInfo.appendChild(div)
        console.log(detail)
    });
    
}


