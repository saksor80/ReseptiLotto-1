<template>
    <div>
        <SearchBar @add-ingredient="addIngredient" @search-recipes="searchRecipesMock" />
        <IngredientList :ingredients="ingredients" @remove-ingredient="removeIngredient" />
        <RecipeList :recipes="filteredRecipes" @recipe-selected="showRecipeDetails" />
    </div>
</template>
  
<script>
import SearchBar from '../components/SearchBar.vue';
import IngredientList from '../components/IngredientList.vue';
import RecipeList from '../components/RecipeList.vue';
import axios from 'axios';

export default {
    components: {
        SearchBar,
        IngredientList,
        RecipeList,
    },
    data() {
        return {
            ingredients: [],
            filteredRecipes: [],
        }
    },
    methods: {
        addIngredient(ingredient) {
            this.ingredients.push(ingredient);
        },
        removeIngredient(ingredient) {
            this.ingredients = this.ingredients.filter(item => item !== ingredient);
        },
        searchRecipesMock() {
            if (this.ingredients.length > 0) {
                // Fetch recipes based on ingredients. For now, mock data
                this.filteredRecipes = [
                    { id: 1, name: 'Spaghetti Bolognese', imageURL: require('@/assets/anna-pelzer-IGfIGP5ONV0-unsplash.jpg'), description: 'A classic Italian dish' },
                    { id: 2, name: 'Chicken Curry', imageURL: require('@/assets/anna-pelzer-IGfIGP5ONV0-unsplash.jpg'), description: 'A spicy favorite' },
                    { id: 3, name: 'Veggie Stir-Fry', imageURL: require('@/assets/anna-pelzer-IGfIGP5ONV0-unsplash.jpg'), description: 'A healthy option' },
                    { id: 4, name: 'Sushi Platter', imageURL: require('@/assets/anna-pelzer-IGfIGP5ONV0-unsplash.jpg'), description: 'Delicate and delicious' },
                ]
            }
        },
        searchRecipes() {
            axios.post('http://localhost:5000/api/searchRecipes', {
                ingredients: this.ingredients // array of ingredients
            })
                .then(response => {
                    // handle success
                    console.log("Received recipes from backend: ", response.data);
                    this.filteredRecipes = response.data; // Assuming the server returns the filtered recipes
                })
                .catch(error => {
                    // handle error
                    console.log("An error occurred: ", error);
                });
        },
        showRecipeDetails(recipeId) {
            // Do something when a recipe is clicked, e.g., show details, navigate, etc.
            alert(`Recipe with ID: ${recipeId} clicked!`);
        },
    }
}
</script>
<style scoped>
/* css in here */

</style>