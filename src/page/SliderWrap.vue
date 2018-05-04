<template>
  <div>
    <p v-if="!isSlider"><router-link to="/slider" class="btn next">使用v:show的方式显示轮播图</router-link></p>
    <p v-if="isSlider"><router-link to="/sliderComputed" class="btn next">使用computed方法显示轮播图</router-link></p>
    <slider v-if="isSlider" :slide-item="imageData" :data="sliderData" />
    <slider v-if="isSlider" :slide-item="imageSecond" :data="sliderSecond" />
    <slider-computed v-if="!isSlider" :slide-item="imageData" :data="sliderData" />
  </div>
</template>

<script>
import slider from '../components/slider'
import sliderComputed from '../components/sliderComputed'
export default {
  name: 'silder-wrap',
  data () {
    return {
      imageData: [{
        url: '1.jpg'
      }, {
        url: '2.jpg'
      }, {
        url: '3.jpg'
      }, {
        url: '4.jpg'
      }],
      imageSecond: [{
        url: '1.jpg'
      }, {
        url: '2.jpg'
      }, {
        url: '3.jpg'
      }, {
        url: '4.jpg'
      }, {
        url: '5.jpg'
      }, {
        url: '6.jpg'
      }],
      sliderData: {
        time: 2000,
        prevBtnShow: true,
        navigatShow: true,
        prevText: '<',
        nextText: '>'
      },
      sliderSecond: {
        time: 3000
      },
      isSlider: true
    }
  },
  components: {
    slider,
    sliderComputed
  },
  created () {
    this.isSlider = this.$route.path === '/slider'
  },
  watch: {
    '$route' (to, from) {
      this.isSlider = this.$router.currentRoute.path === '/slider'
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap {
    position: relative;
    margin: 0;
    padding-bottom: 36px;
    margin-bottom: 20px;
    overflow: hidden;
    border: 1px solid #000;
}
.slide-box {
    position: absolute;
    font-size: 0;
}
.slide-box img {
    display: inline-block;
}
</style>
