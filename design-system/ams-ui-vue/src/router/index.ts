import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/about.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../pages/contact.vue')
    },
    {
      path: '/todo-list',
      name: 'todo-list',
      component: () => import('../pages/todo/index.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../pages/NotFound.vue')
    },
  ]
})

export default router
