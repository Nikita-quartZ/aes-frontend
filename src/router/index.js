import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../pages/LoginPage.vue'
import MainPage from '../pages/MainPage.vue'
import ProfilePage from '../pages/ProfilePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'mainPage',
    component: MainPage
  },
  {
    path: '/profile',
    name: 'profilePage',
    component: ProfilePage
  },
  {
    path: '/login',
    name: 'loginPage',
    component: LoginPage
  }
]

const router = new VueRouter({
  routes
})

export default router
