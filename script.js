const searchFood = () => {
    const foodText = document.getElementById('foodMeal').value;
    console.log(foodText);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s${foodText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayFood(data.meals))
        .catch(err => displayError('Something Went Wrong please try later!'))
        
}


const displayFood = names => {
    const recipes = document.getElementById('recipes');
    recipes.innerHTML = '';
    names.forEach(name => {
        const recipesDiv = document.createElement('div');
        recipesDiv.className = 'search-result container2';
        recipesDiv.innerHTML = `
        <h3 class="mealDetails">${name.strMeal}</h3
        <div class="item">
            <img src="${name.strMealThumb}" alt="images">
        </div>
        <div class="container">
                <h1 class="title"> ${name.strMeal}</h1>
        </div>
        `;
        recipes.appendChild(recipesDiv);
    })

}

const recipeDetails = (mealName) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s${mealName}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayItemDetails(data.meals))
}

const displayItemDetails = info => {
    const details = document.getElementById('recipe-info');
    details.innerHTML = `
        <img src="${info[0].strMealThumb}" alt="">
        <h1 class="title">${info[0].strMeal}</h1>
        <p>Ingredients</p>
        <ul>
            <li>${info[0].strIngredient1}<li>
            <li>${info[0].strIngredient2}<li>
            <li>${info[0].strIngredient3}<li>
            <li>${info[0].strIngredient4}<li>
            <li>${info[0].strIngredient5}<li>
            <li>${info[0].strIngredient6}<li>
            <li>${info[0].strIngredient7}<li>
            <li>${info[0].strIngredient8}<li>
        </ul>
    `
}

const displayError = error => {
    const errorMessage = document.getElementById('error-message');
    errorMessage.innerText = error;
}
