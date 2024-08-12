import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/bookings',
      name: 'bookings',
      component: () => import('..//views//MyBooknings.vue')
    },
    {
      path: '/overview',
      name: 'overview',
      component: () => import('../views/MyOverview.vue')
    },
    {
      path: '/messages',
      name: 'messagesg',
      component: () => import('../views/MyMessages.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/MyProfile.vue')
    },
    {
      path: '/forms',
      name: 'forms',
      component: () => import('../views/MyForms.vue')
    }
  ]
})

export default router
