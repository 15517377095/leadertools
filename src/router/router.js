import Vue from 'vue'
import Router from 'vue-router'

import Main from '../components/Main'
import ImageProcessing_compression from '../components/imageProcessing/Compression'

Vue.use(Router)
 
export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
    },
    {
      path: '/imageProcessing_compression',
      name: 'imageProcessing_compression',
      component: ImageProcessing_compression,
    }
  ]
})
