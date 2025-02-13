import { createRouter, createWebHistory } from 'vue-router';
import GeneralSunVegan from '../views/GeneralSunVegan.vue';
import MarcaSunVegan from '../views/MarcaSunVegan.vue';
import ProductDetail from '../views/ProductDetail.vue';

const routes = [
  {
    path: '/',
    name: 'GeneralSunVegan',
    component: GeneralSunVegan
  },
  {
    path: '/la-marca',
    name: 'MarcaSunVegan',
    component: MarcaSunVegan
  },
  {
    path: '/producto/:id',
    name: 'ProductDetail',
    component: ProductDetail,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
