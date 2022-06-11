import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/homePage',
    name: 'homePage',
    component: () => import('../views/homePage.vue')
  },
  {
    path: '/',
    redirect: "homePage"
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
