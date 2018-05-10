<template>
  <div class="prevnext" v-show="prevnextData.prevBtnShow">
    <div class="btn-area">
        <span class="prev-btn" @click="sliderChangeIndex('left')">{{prevnextData.prevText || '上一张'}}</span>
        <span class="next-btn" @click="sliderChangeIndex('right')">{{prevnextData.nextText || '下一张'}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'prevnext',
  props: [ 'data', 'slider', 'sliderChange' ],
  data () {
    return {
      prevnextData: this.data,
      sindex: this.slider
    };
  },
  created () {
  },
  methods: {
    sliderChangeIndex (type, event) {
      // 修改父组件值
      this.$emit('sliderChangeIndex', type);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-area{
    position: absolute;
    bottom: 7px;
    left: 5px;
}
.btn-area span {
    color: #333;
    font-size: 12px;
    line-height: 12px;
    background-color: #ffd139;
    padding: 3px 10px;
    border-radius: 5px;
}
</style>
