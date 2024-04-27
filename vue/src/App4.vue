<template>
<!-- for alone skills page--->
  <div id="app4">
    <!-- <homeIcon :color="colorIcon"></homeIcon> -->
    <skills></skills>
  </div>
</template>

<script>

import homeIcon from './components/homeIcon.vue'
import skills from './components/skills.vue'

export default {
  name: 'App4',
  components: {
    homeIcon,
    skills
  },
  data () {
    return {
      // object for color of homeIcon
      colorIcon: {
        'iswhite': false,
        'isblack': true
      }
    }
  }
}
</script>

<style scoped>

#app4{
  height:100vh;
  overflow:auto;
  color:white;
}

</style>
