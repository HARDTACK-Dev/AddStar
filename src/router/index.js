import Vue from 'vue'
import VueRouter from 'vue-router'
import addBookmark from '../views/addBookmark.vue'
import searchBookmark from '../views/searchBoomark.vue'
import setting from '../views/setting.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'addBookmark',
    component: addBookmark
  },
  {
    path: '/search',
    name: 'searchBookmark',
    component: searchBookmark
  },
  {
    path: '/setting',
    name: 'setting',
    component: setting
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
