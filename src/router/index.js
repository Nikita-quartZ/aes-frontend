import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../pages/LoginPage.vue'
import MainPage from '../pages/MainPage.vue'
import ProfilePage from '../pages/ProfilePage.vue'
import ProjectPage from '../pages/ProjectPage.vue'
import StudentPage from '../pages/StudentPage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'

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
  },
  {
    path: '/projects',
    name: 'ProjectPage',
    component: ProjectPage
  },
  {
    path: '/students',
    name: 'StudentsPage',
    component: StudentPage
  },
  {
    path: '*',
    name: 'NotFoundPage',
    component: NotFoundPage
  }
]

const router = new VueRouter({
  routes
})

export default router
