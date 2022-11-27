
import ClientsLayout from '@/clients/layout/ClientsLayout.vue';
import CounterOptionsPage from '@/counter/pages/CounterOptionsPage.vue';
import CounterSetupPage from '@/counter/pages/CounterSetupPage.vue';
import ListPage from '@/clients/pages/ListPage.vue'
import ClientPage from '@/clients/pages/ClientPage.vue'
import { createRouter, createWebHistory } from 'vue-router';

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
    {
      path: '/clients',
      name: 'clients',
      component: ClientsLayout,
      children: [
        { path: '/client/list', name: 'list', component: ListPage },
        { path: '/client/:id', name: 'client-id', component: ClientPage },
      ],
      redirect: () => ({ name: 'list'})
      
    },
    {path: '/:pathMatch(.*)*', redirect: () => ({ name: 'counter-1'})},
  ]
})

export default router
