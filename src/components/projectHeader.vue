<template>
<!-- for project's header--->
  <div class="projectHeader">
    <div>
          <img src="../assets/images/gojoSatoru.jpeg" alt="">
          <span>name</span>
    </div>
    <p>
        Description
    </p>
  </div>
</template>

<script>

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

.projectHeader > div{
  display:flex;
  flex-direction : column;
  gap:20px;

}

.projectHeader > p{
  text-align : center;
  font-size:20px;
  padding:20px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}

.projectHeader > div img {
  height:200px;
  object-fit:cover;
  object-position:center;
}

.projectHeader > div span{
  padding-left:70px
}
</style>
