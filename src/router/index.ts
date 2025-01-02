import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WelcomeView from '@/views/WelcomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: WelcomeView
  },
  // {
  //   path: '/pessoal',
  //   name: 'pessoal',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/ProjectsView.vue')
  // },
  // {
  //   path: '/profissional',
  //   name: 'profissional',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/ProfissionalExperience.vue')
  // },
  // {
  //   path: '/estudo',
  //   name: 'estudo',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AcademyView.vue')
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
