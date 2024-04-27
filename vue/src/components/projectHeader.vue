<template>
<!-- for project's header--->
  <div class="projectHeader">
    <div>
          <img src="../assets/images/gojoSatoru.jpeg" alt="">
          <span>name</span>
    </div>
    <p  v-rewrite>
        Description
    </p>
  </div>
</template>

<script scoped>

export default {
  name: 'projectHeader'
}
</script>

<style>
.projectHeader{
  display:flex;
  flex-direction : column;
  gap:20px;
  margin-left:40px;
  margin-right:40px;
}

.projectHeader::-webkit-scrollbar {
  display: none; /* Chrome, Safari, et Opera */
}

.projectHeader > div{
  display:flex;
  flex-direction : column;
  gap:20px;

}

.projectHeader > p{
  text-align : center;
  font-size:20px;
  padding:30px;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
}

.projectHeader > div img {
  height:200px;
  border-radius:20px;
  object-fit:cover;
  object-position:center;
}

.projectHeader > div span{
  padding-left:70px
}
</style>
