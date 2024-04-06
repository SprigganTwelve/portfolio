<template>
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
#app2{
height:100%;
overflow-y: auto;
}
</style>
