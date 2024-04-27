<template>
<!-- for all project--->
<div id="app2">
  <!-- <homeIcon :color="colorIcon"></homeIcon> -->
  <BoxCard></BoxCard>
</div>
</template>

<script>
import homeIcon from './components/homeIcon.vue'
import BoxCard from './components/Box-Card.vue'

export default {
  name: 'App2',
  components: {
    homeIcon,
    BoxCard
  },
  data () {
    return {
      colorIcon: {
        'iswhite': true,
        'isblack': false
      }
    }
  }
}
</script>

<style scoped>

#app2{
background:#110E0E;
height:100vh;
overflow-y: auto;
}

.navBar{
  display: none;
}
</style>
