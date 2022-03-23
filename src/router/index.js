import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('../views/SimplePage.vue'),
    meta: {
      icon: 'fa-house',
    },
  },
  {
    name: 'account',
    path: '/account',
    component: () => import('../views/SimplePage.vue'),
    meta: {
      icon: 'fa-user',
    },
  },
  {
    name: 'messages',
    path: '/messages',
    component: () => import('../views/SimplePage.vue'),
    meta: {
      icon: 'fa-comment',
    },
  },
  {
    name: 'photos',
    path: '/photos',
    component: () => import('../views/SimplePage.vue'),
    meta: {
      icon: 'fa-camera',
    },
  },
  {
    name: 'settings',
    path: '/settings',
    component: () => import('../views/SimplePage.vue'),
    meta: {
      icon: 'fa-gear',
    },
  },
];

export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
