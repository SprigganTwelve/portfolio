<template>
  <div class="showingUp spaceBetween" :style="move" >
    <div class="showingUp-mainTrunck">
        <span v-rewrite class="one">Ange-Paterne</span>
        <span v-rewrite class="two">Zouayobo Dali</span>
        <span v-rewrite ref="devWeb" class="three">Développeur fullStack Junior</span>

        <div ref="boxImage" class = "four">
            <img class="showingUp-imgIcon" src="../assets/images/ink.png" alt="linkdin">
            <img class="showingUp-imgIcon" src="../assets/images/github-icon-24.jpg" alt="gitHub">
            <img class='showingUp-imgIcon' src='../assets/images/9204385.png' alt='gitHub'>
        </div>
    </div>
            <img class='showingUp-imgProfil' src='../assets/images/okotsu.jpg' alt='gitHub'>
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
      }
    }
  },
  mounted () {
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
    }
  }
}
</script>

<style >
.showingUp{
    display:flex;
    align-items:center;
    height:100%;
    width:100%
}

.showingUp-imgIcon{
    height:30px;
    width: 30px;
    border-radius:50%;
}
.showingUp-imgProfil{
   height:220px;
   width:220px;
   border-radius:50%;
   margin-right:40px;
   margin-bottom:15px;
   object-fit:cover;
   object-position:center
}

.showingUp-mainTrunck {
    display:flex;
    flex-direction:column;
    gap: 40px;
    font-size:25px
}
/* indentation  */
.showingUp-mainTrunck .one{
  margin-left:140px;
  background-image: linear-gradient(to right,#2AD5FA, #FF0000);
  -webkit-background-clip: text;
  color: transparent;
  font-weight:bold;
  transition: all 0.5;
}

.showingUp-mainTrunck .two{
    margin-left: 180px;
    background: linear-gradient(to right,#FF0000, #d1f1f8 );
    -webkit-background-clip: text;
    color: transparent;
    font-weight:bold;
    transition: all 0.5;
}

.showingUp .three{
  margin-left: 200px;
}

.showingUp-mainTrunck .four{
    display:flex;
    gap:20px;
    margin-left:240px;
}

.showingUp-mainTrunck .four{
    cursor:pointer
}
</style>
