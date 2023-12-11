import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/home/home.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../pages/blog/blog.vue')
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('../pages/todo/todo.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../pages/product/product.vue')
    }
  ]
})

export default router
