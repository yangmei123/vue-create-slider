import Vue from 'vue'
import Router from 'vue-router'
import SliderWrap from '@/page/SliderWrap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/slider'
    },
    {
      path: '/slider',
      name: 'slider-wrap',
      component: SliderWrap
    },
    {
      path: '/sliderComputed',
      name: 'slider-wrap-computed',
      component: SliderWrap
    }
  ]
})
