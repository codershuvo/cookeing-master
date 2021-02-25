const input = document.getElementById('search-field');
const submit = document.getElementById('search-click'); 

submit.addEventListener('click', function(){
    if (input.value == "") {
        alert('Please Enter Valid Word for Search Box'); 
    } else {
        searchMeals();
        input.value = ""; 
    }
})



const searchMeals = () => {
    const searchText = input.value; 
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    // load data
    fetch(url)
    .then(res => res.json())
    .then(data => {
        if (data.meals == null) {
            const searchBoxResult = document.getElementById('search-box'); 
            const div = document.createElement('div'); 
            div.innerHTML = `<h3>Don't Match the Meal</h3>`
            searchBoxResult.appendChild(div);
            
        } else {
            displayMeals(data.meals); 
        }
    })
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
            <a href="#0" onclick="getMealById(${meal.idMeal})" id="detail">
                <img class="img-fluid mb-3" src="${meal.strMealThumb}" alt="">
                <h4>${meal.strMeal}</h4>
            </a>
        `; 
        mealStyleContainer.appendChild(mealDiv);
        mealContainer.appendChild(mealStyleContainer); 
    });
}; 




// display meal info 
const getMealById = id => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayInfoMill(data.meals[0]))
}


// display food info
const displayInfoMill = detail => {
    const mealInfo = document.getElementById('meal-info'); 
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
}

