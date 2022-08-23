import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/parks'
  },
  {
    path: '/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'undecided',
        component: () => import('@/views/UndecidedPage.vue')
      },
      {
        path: 'parks',
        component: () => import('@/views/ParksPage.vue'),
      },
      {
        path: 'parks/:name',
        component: () => import('@/views/ParkPage.vue')
      },
      {
        path: 'pets',
        component: () => import('@/views/PetsPage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
