import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('./../views/About.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('./../views/Projects.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('./../views/Contact.vue')
  },
  {
    path: '*',
    name: 'not-found',
    component: () => import('./../views/NotFound.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
