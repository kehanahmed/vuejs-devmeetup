import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue'

Vue.use(Vuetify)

Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCkTzeSYyHNxdlRcNJOfOCwGq1CJRrASWI',
      authDomain: 'my-project-8315a.firebaseapp.com',
      databaseURL: 'https://my-project-8315a.firebaseio.com',
      projectId: 'my-project-8315a',
      storageBucket: 'my-project-8315a.appspot.com'
    })
  }
})
