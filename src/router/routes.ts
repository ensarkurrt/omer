import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: () => import('pages/IndexPage.vue') },
      {path: 'page1', component: () => import('src/pages/TheLoginPage.vue') },
      {path: 'comp2', component: () => import('src/pages/TheMainPage.vue') },
      {path: 'comp3', component: () => import('src/pages/AnaSayfa.vue') },


    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
