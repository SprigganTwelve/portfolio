import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import App2 from './App2.vue'
// import App3 from './App3.vue'
// import App4 from './App4.vue'
// import App5 from './App5.vue'
// import App6 from './App6.vue'
import router from './routers/routers.js'



createApp(App).use(router).mount('#app')

// const app2 =  createApp(App2).mount('#app2')
// const app3 = createApp(App3).mount('#app3')
// const app4 = createApp(App4).mount('#app4')
// const app5 = createApp(App5).mount('#app5')
// const app6 = createApp(App6).mount('#app6')


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