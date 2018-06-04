import Vue from 'vue'
import Router from 'vue-router'
import { Article, List, Admin } from '../views/CreateListView'
const Login = () =>
  import('../views/Login.vue')

const Register = () =>
  import('../views/Register.vue')


const Publish = () =>
  import('../views/admin/Publish.vue')

const UpdateAdminInfo = () =>
  import('../views/admin/UpdateAdminInfo.vue')

const UpdateAdminPassword = () =>
  import('../views/admin/UpdateAdminPassword.vue')
const About = () =>
  import('../views/About.vue')
const accountManage = () =>
  import('../views/admin/accountManage.vue')

Vue.use(Router)
export function createRouter () {
  return new Router({
    mode: 'history',
    linkActiveClass: 'current',
    scrollBehavior: () => ({ y: 0 }),
    routes: [{
      path: '/login',
      name: 'login',
      component: Login
    },{
      path: '/register',
      name: 'register',
      component: Register
    }, {
      path: '/category/:change?/:page?',
      name: 'category',
      component: List('category')
    }, {
      path: '/search/:change?/:page?',
      name: 'search',
      component: List('search')
    }, {
      path: '/archive/:change?/:page?',
      name: 'archive',
      component: List('archive')
    }, {
      path: '/article/:id',
      name: 'article',
      component: Article('article')
    },{
      path: '/about',
      name: 'about',
      component: About
    }, {
      path: '/admin/:page?',
      name: 'admin',
      meta: {
        Auth: true
      },
      component: Admin('admin')
    }, {
      path: '/publish/:id?',
      name: 'publish',
      meta: {
        Auth: true
      },
      component: Publish
    }, {
      path: '/account',
      name: 'account',
      meta: {
        Auth: true
      },
      component: accountManage
    }, {
      path: '/updateAdminInfo',
      name: 'updateAdminInfo',
      meta: {
        Auth: true
      },
      component: UpdateAdminInfo
    }, {
      path: '/updateAdminPassword',
      name: 'updateAdminPassword',
      meta: {
        Auth: true
      },
      component: UpdateAdminPassword
    }, {
      path: '/:page?',
      name: 'index',
      component: List('index')
    }, {
      path: '*',
      name: '404',
      redirect: '/'
    }]
  })
}
