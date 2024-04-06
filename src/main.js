// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import App2 from './App2.vue'
import router from './router'

Vue.config.productionTip = false
// global
Vue.directive('rewrite', {
  bind (el, bind, vnode) {
    /* writting aniamtion */
    setTimeout(() => {
      let chars = el.textContent.split('')
      if (el.textContent !== '') {
        el.textContent = ''
        chars.forEach((char, index) => {
          setTimeout(() => {
            el.textContent += char
          }, index * 110)
        })
      }
    }, 200)
    /* end */
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

new Vue({
  el: '#app2',
  router,
  components: { App2 },
  template: '<App2/>'
})
