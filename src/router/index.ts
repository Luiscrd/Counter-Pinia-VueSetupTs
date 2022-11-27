
import CounterOptionsPage from '@/counter/pages/CounterOptionsPage.vue'
import CounterSetupPage from '@/counter/pages/CounterSetupPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/options',
      name: 'counter-1',
      component: CounterOptionsPage
    },
    {
      path: '/setup',
      name: 'counter-2',
      component: CounterSetupPage
    },
    {path: '/:pathMatch(.*)*', redirect: () => ({ name: 'counter-1'})},
  ]
})

export default router
