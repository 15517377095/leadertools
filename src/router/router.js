import Vue from 'vue'
import Router from 'vue-router'

import Main from '../views/main/Index'
import Error_404 from '../views/404/Index'
import ImageProcessing_compression from '../views/imageProcessing/Compression/Index'
import ImageProcessing_imgCut from '../views/imageProcessing/imgCut/Index'
import HtmlHandlr_cssChange from '../views/htmlHandle/cssChange/Index'

Vue.use(Router)
 
export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
    },
    {
      path: '/error_404',
      name: 'error_404',
      component: Error_404,
    },
    {
      path: '/imageProcessing_compression',
      name: 'imageProcessing_compression',
      component: ImageProcessing_compression,
    },
    {
      path: '/imageProcessing_imgCut',
      name: 'imageProcessing_imgCut',
      component: ImageProcessing_imgCut,
    },
    {
      path: '/htmlHandlr_cssChange',
      name: 'htmlHandlr_cssChange',
      component: HtmlHandlr_cssChange,
    }
  ]
})
