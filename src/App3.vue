<template>
<!-- for alone project--->
  <div id="app3">
    <homeIcon></homeIcon>
    <projectHeader></projectHeader>
    <stack></stack>
  </div>
</template>

<script>

import homeIcon from './components/homeIcon.vue'
import projectHeader from './components/projectHeader.vue'
import stack from './components/stack.vue'

export default {
  name: 'App3',
  components: {
    projectHeader,
    homeIcon,
    stack
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

#app3{
  height:100vh;
  background:black;
}
</style>
