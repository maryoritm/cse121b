async function searchRecipes() {
    const ingredientInput = document.getElementById('ingredientInput').value;
    if (!ingredientInput) {
        alert('Please enter ingredients.');
        return;
    }

    const ingredients = ingredientInput.split(',').map(ingredient => ingredient.trim());

    const appId = '335addd8';
    const appKey = '149c4d9a0591ba45a41d9d7138080054';

    const apiUrl = `https://api.edamam.com/api/recipes/v2?q=${encodeURIComponent(ingredientInput)}&app_id=${appId}&app_key=${appKey}`;
    
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        const recipeList = document.getElementById('recipeList');
        recipeList.innerHTML = '';

        if (data.hits.length > 0) {
            data.hits.forEach(hit => {
                const recipeItem = document.createElement('div');
                recipeItem.textContent = hit.recipe.label;
                recipeList.appendChild(recipeItem);
            });
        } else {
            recipeList.textContent = 'No recipes found.';
        }
    } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
        alert('There was a problem fetching recipes. Please try again later.');
    }
}
