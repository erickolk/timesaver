import { createRouter, createWebHistory } from 'vue-router'
import ServiceView from '../views/ServiceView.vue'
import RegisterServiceView from '@/views/RegisterServiceView.vue'
import Scheduling from '@/components/Scheduling.vue'
import Requests from '@/components/Requests.vue'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/edit',
      name: 'edit-services',
      component: () => import('../views/EditView.vue')
    },
    {
      path: '/register',
      name: 'register-services',
      component: RegisterServiceView
    },
    {
      path: '/schedule',
      name: 'scheduling',
      component: Scheduling
    },
    {
      path: '/requests',
      name: 'requests-scheduling-of',
      component: Requests
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]
})

export default router
