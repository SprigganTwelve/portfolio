<template>
<!-- for alone project--->
  <div id="app3">
    <!-- <homeIcon :color="colorIcon"></homeIcon> -->
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
  },
  data () {
    return {
      colorIcon: {
        'iswhite': true,
        'isblack': false
      }
    }
  },  
  created: function () {
    let getParams = window.location.search[4]
  }
}
</script>

<style scoped>

#app3{
  height:100vh;
  background:black;
  overflow:auto;
  color:white;
}

#app3::-webkit-scrollbar {
  display: none; /* Chrome, Safari, et Opera */
}


</style>
