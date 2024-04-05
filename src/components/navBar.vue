<template>
<!--transitionSpan/spaceBatween are global style-->
  <div class="navBar transitionSpan spaceBetween " :style="move">
    <div class = "inStart"  >
          <div id = "rond" ></div>
          <span v-rewrite>Portfolio</span>
    </div>
    <div class="inEnd " id="navBar-hoverOption">
        <a href='' >Veille Technologique</a>
        <a href='../.html/projets.html' >Projets</a>
        <a href = '' >Compétences</a>
        <a href ='' >A propos</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navBar',
  data: () => {
    return {
      move: {
        transform: 'translateY(100vh)'
      }
    }
  },
  mounted () {
    setTimeout(() => {
      this.move.transition = 'all 2s ease'
      this.move.transform = 'translateY(0)'
    }, 100)
  }
}
</script>

<style>
.navBar #navBar-hoverOption {
  cursor:pointer;
}
.navBar #navBar-hoverOption *:hover  {
  background:white;
  color:red;
  font-weight:bold;
  padding:9px;
  border-radius: 20px
}
.navBar > div #rond{
padding:10px;
height : 10px;
width:10px;
border-radius : 50%;
background:red;
}
#navBar-hoverOption a{
  text-decoration:none;
  color:white
}

/* position */

.spaceBetween{
    display:flex;
    justify-content:space-between;
}

.spaceBetween > div {
    display:flex;
    justify-content:baseline;
}

.transitionSpan > div *:not(.rond){
    transition: all 2s;
}

.inStart{
      gap:5px;
      margin-top:20px;
      margin-left:30px
}

.inEnd{
      gap:40px;
      margin-top:20px;
      margin-right:30px
}

</style>
