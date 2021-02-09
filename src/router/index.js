/*
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2020-11-16 23:17:59
 * @LastEditors: tao
 * @LastEditTime: 2021-02-08 17:15:05
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import {
  routes
} from './routes';


Vue.use(VueRouter)



const router = new VueRouter({
  routes,
  mode: 'history'
})

function setStatus() {
  if (sessionStorage.getItem("store")) {
    store.replaceState(
      Object.assign({},
        store.state,
        JSON.parse(sessionStorage.getItem("store"))
      )
    );
  }
}

function emptyState() {
  store.commit('setRouteList', {
    routeList: []
  })
  store.commit('setPower', {
    power: []
  })
}

router.beforeEach((to, from, next) => {
  let power = store.getters.getPower;
  if (!power.length) {
    setStatus()
    power = store.getters.getPower;
  }
  let path = to.path.split('/')[1]
  if (to.path === "/" || power.indexOf(path) > -1) return next();
  if (to.path === '/login') {
    sessionStorage.removeItem("store");
    emptyState()
    next();
  } else {
    next('/login');
  }
})

export default router