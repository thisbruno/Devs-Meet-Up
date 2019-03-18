import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import * as firebase from 'firebase'
import router from './router'
import {store} from './store'

import './registerServiceWorker'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import Datefilter from './filters/date'
import AlertCmp from './components/shared/Alert.vue'
import EditMeetupDetailsDialog from './components/edit/EditMeetupDetailsDialog.vue'


Vue.config.productionTip = false

Vue.filter('date', Datefilter)
Vue.component('app-alert',AlertCmp)
Vue.component('app-edit-meetup-details-dialog',EditMeetupDetailsDialog)

new Vue({
  router,
  store,
  render: h => h(App),
  created(){
    firebase.initializeApp({
      apiKey: 'AIzaSyAe-my6FsgmAjWMOgd7CnxemjKopDSZefo',
    authDomain: 'devs-meetup.firebaseapp.com',
    databaseURL: 'https://devs-meetup.firebaseio.com',
    projectId: 'devs-meetup',
    storageBucket: 'gs://devs-meetup.appspot.com' 
    })
    firebase.auth().onAuthStateChanged((user)=>{
      if(user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadMeetups')
  }
}).$mount('#app')
