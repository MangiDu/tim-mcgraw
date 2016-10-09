import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

Vue.use(VueRouter)
let router = new VueRouter({
  mode: 'hash',
  hashbang: true,
  saveScrollPosition: false,
  suppressTransitionError: true
})
router.map({
  '/': {
    component (resolve) {
      require(['./loading'], resolve)
    }
  },
  '/index': {
    component (resolve) {
      require(['./views/home'], resolve)
    }
  },
  '*': {
    component (resolve) {
      require(['./404'], resolve)
    }
  }
})

router.start(App, '#app')
