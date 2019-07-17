import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import './assets/style/reset.css'
import './assets/style/border.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  // components: { App: App },
  render: h => h(App),
  template: ' <App/>'
})
