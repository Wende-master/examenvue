import { createRouter, createWebHistory } from 'vue-router';
import CreateComponent from './components/CreateComponent.vue';
import HomeComponent from './components/HomeComponent.vue';
import ComentariosComponent from './components/ComentariosComponent.vue';
import UpdateComponent from './components/UpdateComponent.vue';
import DetallesCubo from './components/DetallesCubo.vue';

const myRoutes = [
    { path: '/', component: HomeComponent },
    { path: '/home', component: HomeComponent },
    { path: '/create', component: CreateComponent },
    { path: '/comentarios/:idcubo', component: ComentariosComponent },
    { path: '/detallescubo/:marca', component: DetallesCubo },
    { path: '/editar/:id', component: UpdateComponent },


]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})
export default router

