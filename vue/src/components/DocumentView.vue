<template>
    <div id="container">

        <div class="section">
            <h2 class="big-txt">Gestion des incidents</h2>
            <div class="list">
                <div class="item text-black">        
                        <img class="img"src="../assets/images/docs/Project-management-2.png" alt="image">
                        <span>Gestion d'incidents </span>
                </div>
            </div>
        </div>

        <div class="section">
            <h2 class="big-txt">Programing</h2>
            <div class="list">
                <div class="item text-black">        
                        <img class="img"src="../assets/images/docs/Project-management-2.png" alt="image">
                        <span>Gestion d'incidents </span>
                </div>
                <div class="item text-black">        
                        <img class="img"src="../assets/images/docs/Project-management-2.png" alt="image">
                        <span>Gestion d'incidents </span>
                </div>
                <div class="item text-black">        
                        <img class="img"src="../assets/images/docs/Project-management-2.png" alt="image">
                        <span>Gestion d'incidents </span>
                </div>
                <div class="item text-black">        
                        <img class="img"src="../assets/images/docs/Project-management-2.png" alt="image">
                        <span>Gestion d'incidents </span>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

export default {
  name: 'Document-View',
  methods: {

  }
}

</script>

<style scoped>

#container{
  padding: 30px 70px 20px 70px ;  
  background-color: #eee;
}

.section{
  display: flex;
  flex-direction: column;
  gap: 7px;
  background-color: red;
  flex-wrap: wrap;
}

.big-txt{
  font-size: 30px;
}

.list{
  display: flex;
  align-items: center;
  background-color: purple;
  gap: 40px;
  margin: 10px ;
  margin-left: 40px;
  flex-wrap: wrap;
}

.list .item {
  position: relative;
}

.list .item span{
  position: absolute;
  left: 10px;
  bottom: 85px;
  font-weight: bold;
  font-size: 20px;
}

.img{
  height: 180px;
  width: 240px;
  border-radius: 10%;
}

.text-black{
  color: black;
}

.text-white{
  color: white;
}

.space-between{
  justify-content: space-around;
}

</style>