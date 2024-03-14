<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>

import home from './components/home.vue'

export default {
  name: 'App',
  components: {
    home
  }
}
</script>

<style>

*{
  background:black;
  margin:0;
  padding:0
}

@font-face {
  font-family: RedHat;
  src: url(../fontFamily/Red_Hat_Display/RedHatDisplay-VariableFont_wght.ttf);
}

#app {
 font-family: RedHat
}
</style>
