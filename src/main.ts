import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MyPlugin from './plugins/myplugin'

Vue.config.productionTip = false

Vue.use(MyPlugin)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
