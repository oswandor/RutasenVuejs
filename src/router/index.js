import { createRouter, createWebHistory } from '@ionic/vue-router';
//importacion de los componentes 
import  PaginaUno  from '../views/PaginaUno.vue'
import Paginados from  '../views/Paginados.vue'

const routes= [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: PaginaUno
  },
  {
    path: '/paginados/:nombre',
    name: 'Pagina',
    component: Paginados
  },
  {
    path: '/padre/',
    component: PaginaUno,
    children:[

      {
        path:'hijo1', 
        component: Paginados
      }


    ]
  } 


]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
