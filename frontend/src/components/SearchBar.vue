<template>
    <div class="search-bar">
        <input type="text" v-model="query" placeholder="Enter ingredients..." />
        <button @click="addIngredient">Add</button>
        <button @click="searchRecipes">Search Recipes</button>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            query: ''
        };
    },
    methods: {
        addIngredient() {
            if (this.query) {
                this.$emit('add-ingredient', this.query);
                this.query = '';
            }
        },
        searchRecipes() {
            this.$emit('search-recipes');
        }
    }
}
</script>  
  
<style scoped>
.search-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}

.search-bar input {
    font-size: 18px;
    padding: 10px;
    width: 60%;
    margin-right: 10px;
}

.search-bar button {
    font-size: 18px;
    padding: 12px 20px;
    margin-right: 10px;
    cursor: pointer;
}

.ingredient-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>