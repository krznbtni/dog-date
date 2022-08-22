import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/map'
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
        path: 'map',
        component: () => import('@/views/MapPage.vue')
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
