<template>
<!-- for alone skills--->
  <div id="skills">
      <span>Stack technique</span>
      <div>
          <img src="../assets/images/html.png" alt="">
          <img src="../assets/images/css.png" alt="">
          <img src="../assets/images/js.jpeg" alt="">
          <img src="../assets/images/jquery.png" alt="">
          <img src="../assets/images/vue.png" alt="">
          <img src="../assets/images/react.png" alt="">
          <img src="../assets/images/node.png" alt="">
          <img src="../assets/images/php.png" alt="">
          <img src="../assets/images/phpMailer.png" alt="">
          <img src="../assets/images/python.png" alt="">
          <img src="../assets/images/flutter.png" alt="">
          <img src="../assets/images/vs-code.png" alt="">
          <img src="../assets/images/github.jpeg" alt="">
      </div>
  </div>
</template>

<script>

export default {
  name: 'App3'
}
</script>

<style>
#skills{
  position: relative;
  height:100%;
  color:black;
  overflow:auto
}

#skills > span{
  display:flex;
  justify-content:center;
  font-size: xx-large;
  background-image: linear-gradient(to right,#001AFF, #998888);
  -webkit-background-clip: text;
  color: transparent;
  font-weight:bold;
}

#skills >div {
  display:flex;
  justify-content:center;
  align-items:center;
  gap:40px;
  flex-wrap:wrap;
}

#skills img {
  margin:20px;
  height:150px;
  width:150px;
  object-fit:contain;
  object-position: cover
}
</style>
