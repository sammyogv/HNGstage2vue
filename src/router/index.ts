import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import LandingPage from '../pages/LandingPage.vue'
import LoginPage from '../pages/LoginPage.vue'
import SignupPage from '../pages/RegisterPage.vue'
import Dashboard from '../pages/Dashboard.vue'
import Tickets from '../pages/Tickets.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: LandingPage },
  { path: '/login', component: LoginPage },
  { path: '/register', component: SignupPage },
  { path: '/dashboard', component: Dashboard },
  { path: '/tickets', component: Tickets },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
