<template>
  <div>
    <div class="slider">
      <div class="wrap" id="slide-wrap">
        <div class="slide-box cleafix">
            <img ref="img" v-for="(item, index) in slideItem" v-show="index == sliderIndex" :key="item.id" :class="{ 'active': item.isActive }" :src='"/static/image/" + item.url' />
        </div>
        <prevnext :data="sliderData" :slider="sliderIndex" @sliderChangeIndex="clickSliderBtn"/>
        <navigat :data="sliderData" :image-data="slideItem"  :slider="sliderIndex"/>
      </div>
    </div>
  </div>
</template>

<script>
import navigat from '../components/navigat/navigat';
import prevnext from '../components/prevnext/prevnext';
// import { mapMutations, mapActions } from 'vuex'

export default {
  name: 'slider-state',
  props: ['data', 'slideItem'],
  data () {
    return {
      // imageData: this.slideItem,
      sliderData: this.data,
      sliderIndex: 0,
      sliderLength: this.slideItem.length
    };
  },

  components: {
    navigat,
    prevnext
  },

  created () {
    // this.imageData[0].isActive = true
  },

  mounted () {
    this.$nextTick(function () {
      this.slideStart();
    });
  },

  methods: {
    // ...mapActions({
    //   change: 'changeSliderItem' // 将 `this.change()` 映射为 `this.$store.commit('changeSliderItem')`
    // }),
    change (id, type) {
      this.$store.dispatch('changeSliderItem', {id, type});
    },
    slideStart () {
      let index = this.sliderIndex;
      this.timer = setInterval(function () {
        const sliderLength = this.slideItem.length;
        index = index === sliderLength ? 0 : index;
        if (index === sliderLength) {
          this.sliderIndex = 0;
          index = 0;
          return false;
        } else {
          this.slideItem.forEach((data, i) => {
            if (index === i) {
              this.change(data.id);
            } else {
              this.change(data.id, 'change');
            }
          });
          this.sliderIndex = index;
          index++;
        }
      }.bind(this), this.sliderData.time);
    },
    clickSliderBtn (type) {
      const sliderLength = this.sliderLength;
      clearInterval(this.timer);
      this.sliderIndex = type === 'left' ? (this.sliderIndex === 0 ? sliderLength - 1 : --this.sliderIndex) : this.sliderIndex === sliderLength - 1 ? 0 : ++this.sliderIndex;
      this.slideStart();
    }
  },

  destroyed () {
    clearInterval(this.timer);
  }
};
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
/*    height: 357px;*/
    font-size: 0;
}
.slide-box img {
    display: inline-block;
    width: 100%;
    max-height: 300px;
}
.slide-box img.active {
  animation: active 1s forwards;
}
@keyframes active{
  from {opacity: 0.3;}
  to {opacity: 1;}
}
</style>
