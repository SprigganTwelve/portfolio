<template>
<!----->
  <div id="app6">
    <homeIcon :color="colorIcon"></homeIcon>
    <aboutMe></aboutMe>
    <graduate></graduate>
  </div>
</template>

<script>

import homeIcon from './components/homeIcon.vue'
import aboutMe from './components/aboutMe.vue'
import graduate from './components/graduate.vue'

export default {
  name: 'App6',
  components: {
    homeIcon,
    aboutMe,
    graduate
  },
  data () {
    return {
      // object for color of homeIcon
      colorIcon: {
        'iswhite': true,
        'isblack': false
      }
    }
  }
}
</script>

<style>

*{
  /* list-style-type: none; */
  text-decoration: none;
  margin:0;
  padding:0;
}

#app6{
  height:100vh;
  overflow:auto;
  color:white;
  background-color: black;
}
</style>
