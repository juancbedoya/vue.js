import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import helpView from '../views/helpView.vue'
import AboutView from '../views/AboutView.vue'
import ConsulServe from '../views/ConsulServe.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/help',
    name: 'help',
    component: helpView
  },
  {
    path: '/consul',
    name: 'consul',
    component: ConsulServe
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
