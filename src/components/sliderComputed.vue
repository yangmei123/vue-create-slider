<template>
  <div>
    <div class="slider">
      <div class="wrap" id="slide-wrap">
        <div class="slide-box cleafix">
        <img ref="img" v-for="item in imageComputed" :key="item.id" :src='"/static/image/" + item.url' :class="[item.class]"/>
        </div>
        <prevnext :data="sliderData" :slider="sliderIndex" @sliderChangeIndex="clickSliderBtn"/>
        <navigat :data="sliderData" :image-data="imageData"  :slider="sliderIndex"/>
      </div>
    </div>
  </div>
</template>

<script>
import navigat from '../components/navigat/navigat'
import prevnext from '../components/prevnext/prevnext'
export default {
  name: 'slider-computed',
  props: ['data', 'slideItem'],
  data () {
    return {
      imageData: this.slideItem,
      sliderData: this.data,
      sliderIndex: 0,
      sliderLength: this.slideItem.length
    }
  },

  components: {
    navigat,
    prevnext
  },

  created () {
    this.imageActiveChange(0)
  },

  mounted () {
    this.$nextTick(function () {
      this.slideStart()
    })
  },

  methods: {
    slideStart () {
      const sliderLength = this.sliderLength
      let index = this.sliderIndex
      this.timer = setInterval(() => {
        index = index === sliderLength ? 0 : index
        this.imageActiveChange(index)
        index++
      }, this.sliderData.time)
    },

    imageActiveChange (index) {
      this.imageData.forEach((data, i) => {
        index === i ? this.$set(this.imageData[i], 'isActive', true) : this.$set(this.imageData[i], 'isActive', false)
        index === i ? this.$set(this.imageData[i], 'class', (i % 2) === 0 ? 'active' : 'active1') : this.$set(this.imageData[i], 'class', '')
      })
      this.sliderIndex = index
    },

    clickSliderBtn (type) {
      const sliderLength = this.sliderLength
      clearInterval(this.timer)
      this.sliderIndex = type === 'left' ? (this.sliderIndex === 0 ? sliderLength - 1 : --this.sliderIndex) : this.sliderIndex === sliderLength - 1 ? 0 : ++this.sliderIndex
      this.imageActiveChange(this.sliderIndex)
      this.slideStart()
    }
  },

  computed: {
    imageComputed () {
      return this.imageData.filter(function (image) {
        return image.isActive
      })
    }
  },

  destroyed () {
    clearInterval(this.timer)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap {
  position: relative;
  margin: 0;
  margin-top: 20px;
  overflow: hidden;
  border: 1px solid #000;
}
.slide-box {
  font-size: 0;
}
.slide-box img {
  display: inline-block;
  width: 100%;
  max-height: 300px;
}
.slide-box img.active{
  animation: active 1s forwards;
}
.slide-box img.active1 {
  animation: active1 1s forwards;
}
@keyframes active{
  from {opacity: 0.3;}
  to {opacity: 1;}
}
@keyframes active1{
  from {opacity: 0.3;}
  to {opacity: 1;}
}
</style>
