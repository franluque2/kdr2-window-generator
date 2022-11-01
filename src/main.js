import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import { rtdbPlugin } from 'vuefire'
import { firestorePlugin } from 'vuefire'


Vue.use(rtdbPlugin)
Vue.use(firestorePlugin)



Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
