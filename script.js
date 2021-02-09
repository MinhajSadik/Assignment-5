const searchFood = () =>{
    const searchText = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s`
    fetch(url)
    .then(response => response.json())
    .then(data => displayFood(data.meals))
}

const displayFood = foods =>{
    const foodContainer = document.getElementById('food-container');

    foods.forEach(food => {
        const foodDiv = document.createElement('div');
        foodDiv.className = 'single-result row align-items-center my-3 p-3';
        foodDiv.innerHTML = `
         <div class="col-md-9">
            <h3 class="food-name">${food.strMeal}</h3>
            <p class="">Made by <span>${food.strArea}</span></p>
        </div>
        <div class="images">
            <img onclick="getDetails('${food.info}','${food.info}')" src="${food.strMealThumb}">
        </div>
        <div class="col-md-3 text-md-right text-center">

        </div>
        `;
        foodContainer.appendChild(foodDiv);

    })
}

const getDetails = (meal, recipe) =>{
    const url = `http://https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}/ ${recipe}`;
    fetch(url)
    .then(response => response.json())
    .then(data => displayItem(data.meals));
}

const displayItem = recipe =>{
    const recipeInfo = document.getElementById('recipe-info');

    recipe.forEach(info =>{
        const recipeDiv = document.createElement('div');
        recipeDiv.innerText = `
        <img src="${info.idMeal}" alt="">
        <h1 class="title">${info.strArea}</h1>
        <p>Ingredients</p>
        <ul>
            <li>${info.strIngredient1}<li>
            <li>${info.strIngredient2}<li>
            <li>${info.strIngredient3}<li>
            <li>${info.strIngredient4}<li>
            <li>${info.strIngredient5}<li>
            <li>${info.strIngredient6}<li>
            <li>${info.strIngredient7}<li>
            <li>${info.strIngredient8}<li>
            <li>${info.strIngredient9}<li>
            <li>${info.strIngredient10}<li>
            <li>${info.strIngredient11}<li>
            <li>${info.strIngredient12}<li>
            <li>${info.strIngredient13}<li>
            <li>${info.strIngredient14}<li>
            <li>${info.strIngredient15}<li>
            <li>${info.strIngredient16}<li>
        </ul>
    `;
    recipeInfo.appendChild(recipeDiv);
    
    })
}