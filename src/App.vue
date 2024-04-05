<template>
  <div id="app">
    <navBar></navBar>
    <showingUp></showingUp>
  </div>
</template>

<script>

import navBar from './components/navBar.vue'
import showingUp from './components/showingUp.vue'
// import './assets/styles/style.css'

export default {
  name: 'App',
  components: {
    navBar,
    showingUp
  }
}
</script>

<style>

*{
  list-style-type: none;
  text-decoration: none;
  margin:0;
  padding:0;
  overflow:hidden
}

@font-face {
  font-family: RedHat;
  src: url(../fontFamily/Red_Hat_Display/RedHatDisplay-VariableFont_wght.ttf);
}

#app {
 font-family: RedHat;
 color:white;
 height:100vh;
  background:url("assets/images/R.jpeg"); /*abstract-black-splat-grunge-brush-texture-free-vector.jpg*/
  height:100vh;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;

}
/* General style   */

</style>
