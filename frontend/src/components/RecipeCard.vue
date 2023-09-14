<template>
    <div v-if="recipe" class="recipe-card" @click="clickRecipe">
        <h3>{{ recipe.name }}</h3>
        <img :src="recipe.imageURL" alt="Recipe Image" />
        <p>{{ recipe.description }}</p>
    </div>
</template>
  
<script>
export default {
    props: ['recipe'],
    methods: {
        clickRecipe() {
            this.$emit('recipe-clicked', this.recipe.id);
        },
    },
    mounted() {
        console.log('Recipe:', this.recipe);
    }
}
</script>
  
<style scoped>
.recipe-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 16px;
    overflow: hidden;
    width: 300px;
    cursor: pointer;
    transition: box-shadow 0.3s ease;
    background-color: rgba(91, 200, 175, 0.2);
}

.recipe-card:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.recipe-card h3 {
    background-color: rgb(91, 200, 175);
    color: white;
    margin: 0;
    padding: 16px;
    text-align: center;
}

.recipe-card img {
    max-width: 100%;
    height: auto;
}

.recipe-card p {
    padding: 16px;
    text-align: left;
}</style>