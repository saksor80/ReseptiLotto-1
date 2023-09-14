<template>
    <div class="ingredient-list">
        <span class="label" v-if="ingredients.length > 0"><h3>Added ingredients: </h3></span>
        <span class="list-item" v-for="ingredient in ingredients" :key="ingredient">
            {{ ingredient }}
            <button @click="removeIngredient(ingredient)">x</button>
        </span>
    </div>
</template>
  
<script>
export default {
    props: ['ingredients'],
    methods: {
        removeIngredient(ingredient) {
            this.$emit('remove-ingredient', ingredient);
        },
    }
}
</script>
  
<style scoped>
.ingredient-list .list-item {
    margin: 5px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
.ingredient-list .label {
    margin-right: 10px;
    font-weight: bold;
}
</style>