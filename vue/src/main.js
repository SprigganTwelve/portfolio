import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import App2 from './App2.vue'
import App3 from './App3.vue'
import App4 from './App4.vue'
import App5 from './App5.vue'
import App6 from './App6.vue'

createApp(App).mount('#app')
createApp(App2).mount('#app2')
createApp(App3).mount('#app3')
createApp(App4).mount('#app4')
createApp(App5).mount('#app5')
createApp(App6).mount('#app6')

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


// Vue.config.productionTip = false
// // global
// Vue.directive('rewrite', {
//   bind (el, bind, vnode) {
//     /* writting aniamtion */
//     setTimeout(() => {
//       let chars = el.textContent.split('')
//       if (el.textContent !== '') {
//         el.textContent = ''
//         chars.forEach((char, index) => {
//           setTimeout(() => {
//             el.textContent += char
//           }, index * 110)
//         })
//       }
//     }, 200)
//     /* end */
//   }
// })
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })

// new Vue({
//   el: '#app2',
//   router,
//   components: { App2 },
//   template: '<App2/>'
// })

// new Vue({
//   el: '#app3',
//   router,
//   components: { App3 },
//   template: '<App3/>'
// })

// new Vue({
//   el: '#app4',
//   router,
//   components: { App4 },
//   template: '<App4/>'
// })

// new Vue({
//   el: '#app5',
//   router,
//   components: { App5 },
//   template: '<App5/>'
// })

// new Vue({
//   el: '#app6',
//   router,
//   components: { App6 },
//   template: '<App6/>'
// })
