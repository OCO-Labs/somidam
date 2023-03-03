import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    // 언제나 페이지 제일 위로 이동하기
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/menu',
      name: 'menu',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MenuView.vue')
    },
    {
      path: '/start',
      name: 'start',
      component: () => import('../views/StartView.vue')
    }
  ]
})

export default router
