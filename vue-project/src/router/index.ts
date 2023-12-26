import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Forms from '../views/Forms.vue'
import ApiCall from '../views/ApiCall.vue'
import VillaRent from '../views/VillaRent.vue'
import Gallery from '../views/gallery.vue'
import Treemap from '../components/Treemap.vue'
import { Tree } from 'ant-design-vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/forms',
      name: 'forms',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => Forms
    },
    {
      path: '/api',
      name: 'api',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => ApiCall
    },
    {
      path: '/modal',
      name: 'modal',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => ApiCall
    },
    {
      path: '/Villa',
      name: 'villa',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => VillaRent
    },
    {
      path: '/gallery',
      name: 'gallery',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => Gallery
    },
    {
      path: '/details',
      name: 'details',
      component: ()=> Gallery
    },
    {
      path:'/tree',
      name:'tree',
      component:()=>Treemap
    }
  ]
})

export default router
