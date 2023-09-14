<template>
    <div class="recipe-list">
        <RecipeCard v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" @recipe-clicked="recipeClicked" />
    </div>
</template>
  
<script>
import RecipeCard from './RecipeCard.vue';

export default {
    components: {
        RecipeCard,
    },
    props: ['recipes'],
    methods: {
        recipeClicked(recipeId) {
        this.$emit('recipe-selected', recipeId);
        },
    },
};
</script>
  
<style scoped>
.recipe-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
};
</style>
