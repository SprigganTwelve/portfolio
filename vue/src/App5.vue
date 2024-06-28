<template>
<!--techno doc pages--->
  <div id="app5">
    <largeCard :color="colorDownloadIcon"></largeCard>
  </div>
</template>

<script>

import homeIcon from './components/homeIcon.vue'
import largeCard from './components/largeCard.vue'

export default {
  name: 'App5',
  components: {
    homeIcon,
    largeCard,
  },
  data () {
    return {
      // object for color of homeIcon
      colorIcon: {
        'iswhite': true,
        'isblack': false
      },
      colorDownloadIcon: {
        'iswhite': true,
        'isblack': false
      }
    }
  }
}
</script>

<style scoped>

#app5{
  height:100vh;
  overflow:auto;
  background:black;
  color:white;
}

</style>
