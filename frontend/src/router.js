import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import RecipeDetailsPage from './views/RecipeDetailsPage.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/recipe/:id',
        name: 'Recipe',
        component: RecipeDetailsPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
