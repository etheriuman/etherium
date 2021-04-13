import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
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

router.beforeEach((to, from, next) => {
  // go to top of the page
  // console.log('go to page:', to.name)
  window.scrollTo(0, 0)
  next()
})

export default router
