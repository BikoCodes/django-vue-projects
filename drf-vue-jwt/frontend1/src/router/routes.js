import Vue from 'vue'
import VueRouter from 'vue-router'
import Posts from '../views/Posts.vue'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,

  routes: [
    {
      path: '/',
      name: 'Posts',
      component: Posts,
      meta: {
        requiresLogin: true
      }
    },

    {
      path: '/login',
      name: 'Login',
      component: Login
    },

    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    }
   
  ]
})






