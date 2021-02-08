const searchFood = () => {
    const foodText = document.getElementById('foodMeal').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodText}`

    fetch(url)
        .then(res => res.json())
        .then(data => displayFood(data.meals))
        .catch(error => displayError('Something Went Wrong!! Please try again later!'));
}


const displayFood = names => {
    const recipes = document.getElementById('recipes');
    recipes.innerHTML = '';
    names.forEach(name => {
        const recipesDiv = document.createElement('div');
        recipeDiv.className = 'search-result container2';
        recipeDiv.innerHTML = `
        <div onclick="recipeDetails('${strMeal}')" class="item">
            <img src="${strMealThumb}" alt="img">
        <div class="flex-container">
                <h1 class="title"> ${name.strMeal}</h1>
            </div>
        </div>
        `;
        recipes.appendChild(recipesDiv);
    })
}

const recipeDetails = async (mealName) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayItemDetails(data.meals);
    }
    catch (error) {
        displayError('Sorry! I failed to load lyrics, Please try again later!!!')
    }
}

const displayItemDetails = info => {
    const details = document.getElementById('recipeInfo');
    details.innerText = info;
}

const displayError = error => {
    const errorTag = document.getElementById('error-message');
    errorTag.innerText = error;
}