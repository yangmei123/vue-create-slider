<template>
  <div id="app">
    <h3 class="title">简单的轮播图</h3>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
@import "assets/css/style.css"
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.title {
  text-align: center;
  font-weight: normal;
}
</style>
