<template>
  <div class="showingUp" :style="move" >
    
    <img id="showingUp-backView" src="../assets/images/back.jpg" alt="">
    
    <div class="showingUp-mainTrunck">

    <!--presentation--->

        <span v-rewrite class="one">Ange-Paterne</span>
        <span v-rewrite class="two">Zouayobo Dali</span>
        <span v-rewrite ref="devWeb" class="three">Développeur fullStack Junior</span>

    <!--link image--->

        <div ref="boxImage" class = "four">
            <img @click="changeLocation(linkedin)" class="showingUp-imgIcon" src="../assets/images/ink.png" alt="linkdin">
            <img  @click="changeLocation(github)" class="showingUp-imgIcon" src="../assets/images/github-icon-24.jpg" alt="gitHub">
            <img class='showingUp-imgIcon' src='../assets/images/9204385.png' alt='gitHub'>
        </div>
    </div>
    <!--my image--->
            <img class='showingUp-imgProfil' src='../assets/images/profil/profil.jpg' alt='gitHub'>
  </div>
</template>

<script>
export default {
  name: 'showingUp',
  data: () => {
    return {
      move: {
        transform: 'translate(100%)',
        transition: 'all 0s'
      },
      linkedin:'https://www.linkedin.com/in/zouayobo-ange-paterne-dali-aa385429b/',
      github:'https://github.com/SprigganTwelve',
    }
  },
  mounted () {
    // moving main conetnt and stay foward at the top

    setTimeout(() => {
      this.move.transform = 'translateX(0)'
      this.move.transition = 'all 3s ease'
      window.scrollTo({
        top: 0
      })
    }, 100)
    setTimeout(() => {
      this.devWebText = 'fgfg'
    }, 2900)
  },
  directives: {

    /* writting aniamtion */
    rewrite: function (el, binding) {
      setTimeout(() => {
        let chars = el.textContent.split('')
        if (el.textContent !== '') {
          el.textContent = ''
          chars.forEach((char, index) => {
            setTimeout(() => {
              el.textContent += char
            }, index * 120)
          })
        }
      }, 200)
    }

    /* end */

  },
  methods: {
    appearsBefore: function (parent, before, next, time = 0) {
      setTimeout(() => {
        parent.insertBefore(before, next)
      }, time)
    },
    changeLocation(location){
      window.location.href = location;
    }
  }
}
</script>

<style scoped>

/*----glabal display (first and second items) -----*/

.showingUp{
    display:flex;
    align-items:center;
    justify-content: space-around;
    height:100%;
    width:100%;
}

.showingUp-mainTrunck {
    display:flex;
    flex-direction:column;
    gap: 40px;
    font-size:25px
}

#showingUp-backView {
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: -452;
  object-fit: cover;
  object-position: center;
}
/*---------*/

/*---image setting */

.showingUp-imgIcon{
    height:30px;
    width: 30px;
    border-radius:50%;
}

.showingUp-imgProfil{
   height:320px;
   width:320px;
   border-radius:50%;
   margin-right:40px;
   margin-bottom:15px;
   object-fit:cover;
   object-position:center;
   background-attachment: fixed;
}

/*---------*/

/* indentation/space */

.showingUp-mainTrunck .one{
  margin-left:140px;
  background-image: linear-gradient(to right,#2AD5FA, #FF0000);
  -webkit-background-clip: text;
  color: transparent;
  font-weight:bold;
  transition: all 1;
  font-size: 2rem;
}

.showingUp-mainTrunck .two{
    margin-left: 180px;
    background: linear-gradient(to right,#FF0000, #d1f1f8 );
    -webkit-background-clip: text;
    color: transparent;
    font-weight:bold;
    transition: all 1.5;
    font-size: 3rem;
}

.showingUp .three{
  margin-left: 200px;
  transition: all 2.0;
  font-size: 2rem;
}

.showingUp-mainTrunck .four{
    display:flex;
    gap:20px;
    margin-left:240px;
}

/*------*/

.showingUp-mainTrunck .four{
    cursor:pointer
}
</style>
