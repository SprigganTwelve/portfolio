<template>
<!----->
  <div id="app6">
    <!-- <homeIcon :color="colorIcon"></homeIcon> -->
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

<style scoped>



#app6{
  height:110vh;
  overflow:auto ! important;
  color:white;
  background-color: black;
  padding: 20px;
  scroll-behavior: smooth;
}
/* hidden scroll bar */

/* sur WebKit-based browsers */
#app6{
  scrollbar-width: none; /*  Firefox 64+ */
  -ms-overflow-style: none;  /* Internet Explorer et Edge */
}

#app6::-webkit-scrollbar {
  display: none; /* Chrome, Safari, et Opera */
}


/* .navBar{
  display: none;
} */


</style>
