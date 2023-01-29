import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '',
    component: async () => await import('@/pages/main/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
