import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import * as filters from './filters'

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
      require(['./views/index'], resolve)
    }
  },
  '*': {
    component (resolve) {
      require(['./404'], resolve)
    }
  }
})

Vue.filter('doc', filters.obj2doc)

router.start(App, '#app')
