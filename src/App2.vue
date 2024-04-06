<template>
<!-- for all project--->
<div id="app2">
  <homeIcon></homeIcon>
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
  }
}
</script>

<style>
*{
  overflow:hidden;
}
#app2{
background:#110E0E;
height:100vh;
overflow-y: auto;
}
</style>
