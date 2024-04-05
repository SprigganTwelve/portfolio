<template>
  <div class="showingUp spaceBetween" :style="move" >
    <div class="showingUp-mainTrunck">
        <span class="one">Ange Paterne dali</span>
        <span class="two">Developppeur Fullstack</span>
        <div class = "three">
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
  background-image: linear-gradient(to right,#2AD5FA, #FF0000);;
  -webkit-background-clip: text;
  color: transparent;
  font-weight:bold;
}

.showingUp-mainTrunck .two{
    margin-left: 180px;
}

.showingUp-mainTrunck .three{
    display:flex;
    gap:20px;
    margin-left:230px;
}

.showingUp-mainTrunck .three{
    cursor:pointer
}

</style>
