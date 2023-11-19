import { createRouter, createWebHistory } from 'vue-router';
import CreateComponent from './components/CreateComponent.vue';
import HomeComponent from './components/HomeComponent.vue';
import UpdateComponent from './components/UpdateComponent.vue';

const myRoutes = [
    { path: '/', component: HomeComponent },
    { path: '/home', component: HomeComponent },
    { path: '/create', component: CreateComponent },
    { path: '/editar/:id', component: UpdateComponent },


]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})
export default router

