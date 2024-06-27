<template>
<!-- for first page--->
  <div id="app">
    
<!-- main trunck-->

  <div class="navBar transitionSpan spaceBetween " :style="move">

      <!-- circle -->

      <div class = "inStart"  >
            <img src="../src/assets/images/rond.jpg" id="rond" alt="">
            <span v-rewrite>Portfolio</span>
      </div>

      <!--nav options-->

      <div class="inEnd " id="navBar-hoverOption">
        <router-link class="routerLink" :to="{name: 'Home'}">Accueil</router-link>
          <router-link class="routerLink" :to="{name: 'veilles'}">Veilles Technologiques</router-link>
          <router-link class="routerLink" :to="{name: 'Competences'}">Compétences</router-link>
          <router-link class="routerLink" :to="{name: 'projets'}">Projets</router-link>
          <router-link class="routerLink" :to="{name: 'About'}">A propos</router-link>
      </div>

  </div>
<!-------  -------->
  
    <router-view />
  </div>

</template>

<script>


import showingUp from './components/showingUp.vue'
// import './assets/styles/style.css'

export default {
  name: 'App',
  components: {
    showingUp
  }
}
</script>

<style scoped>


@font-face {
  font-family: RedHat;
  src: url(assets/fontFamily/Red_Hat_Display/RedHatDisplay-VariableFont_wght.ttf);
}

#app {
  font-family: RedHat;
  color:white;
  height:100vh;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  width: 100%;
  overflow: auto;
}
.inStart span{
  font-size: 30px;
}

a{
  font-size: 20px;
}

/* -----------------  */
/* dealing with link/nav options */

.navBar{
  padding-top: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 1rem;
  background-color: black;
}

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
height : 40px;
width:40px;
border-radius : 50%;
}
#navBar-hoverOption .routerLink{
  text-decoration:none;
  color:white
}

/*----*/

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

/*---*/

</style>

