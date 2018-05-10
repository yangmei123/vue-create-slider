<template>
  <div class="navigat" v-show="navigatData.navigatShow"><span v-for="(n, index) in imageData" :key="index" :class="{ active: index == sliderIndex }"></span></div>
</template>

<script>
export default {
  name: 'navigat',
  props: ['data', 'slider', 'imageData'],
  data () {
    return {
      navigatData: this.data,
      imageItem: this.imageData,
      sliderIndex: this.slider
    };
  },
  created () {
  },
  watch: {
    slider: {
      handler: function (val, oldVal) {
        this.sliderIndex = this.slider;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navigat {
    position: absolute;
    left: 50%;
    bottom: 5%;
    height: 10px;
    line-height: 10px;
    transform: translateX(-50%);
}
.navigat span {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 2px;
    background: #fff;
    border-radius: 50%;
    line-height: 10px;
}
.navigat span.active {
    opacity: 0.5;
}
</style>
