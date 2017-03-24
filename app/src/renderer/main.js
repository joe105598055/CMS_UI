import Vue from 'vue'
import Electron from 'vue-electron'
import Router from 'vue-router'

import App from './App'

import 'jquery/dist/jquery.min.js'
import all from '../../asset/css/all.css'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import bootstrapJS from 'bootstrap/dist/js/bootstrap.min.js'



import MainVideoClip from './components/VideoClip/MainVideoClip'
import AddClip_Video from './components/VideoClip/AddClip_Video'
import MainPlayList from './components/PlayList/MainPlayList'
import MainSchedule from './components/Schedule/MainSchedule'
import MainDisplayer from './components/Displayer/MainDisplayer'
import MakeQRCode from './components/MakeQRCode'

Vue.use(Electron)
Vue.use(Router)
Vue.config.debug = true

const router = new Router({
  routes: [
    { path: '/videoclip', component: MainVideoClip },
    { path: '/addclip_video', component: AddClip_Video },
    { path: '/playlist', component: MainPlayList },
    { path: '/schedule', component: MainSchedule },
    { path: '/displayer', component: MainDisplayer },
    { path: '/makeqrcode', component: MakeQRCode },
    { path: '*', redirect: 'videoclip' }
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  ...App
}).$mount('#app')
