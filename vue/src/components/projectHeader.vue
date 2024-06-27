<template>
<!-- for project's header--->
  <div class="projectHeader">
    <div>
          <div id="boxImage">
            <img id="projectImage" :src="image" alt="">
            <div class="projectHeader-imgIcon">
              <img   @click="handleImageClick" class="projecticon" id="githubIcon" src="../assets/images/github-icon-24.jpg" alt="gitHub">
            </div>
          </div>
          <h1 >{{ name }}</h1>
    </div>
    <div>
      <div class="text_block"> 
         
          <p style="text-align: start;"  v-rewrite>
            {{ description }}
          </p>

        <div class="textpoint"  v-if="fonctionnality.length != 0 ">
          
         <h2 class="title"  v-if="fonctionnality.length != 0 " >Fonctionnalités</h2>
          <div class="ulBlock">
           <ul v-for="item in fonctionnality ">
              <li style="text-align: start;"  >• {{ item }}</li>
           </ul>   
         </div>  

         <h2 class="title"  v-if="technDetails.length != 0 " >Détails Techniques</h2>
          <div class="ulBlock">
           <ul v-for="item in technDetails ">
              <li style="text-align: start;"  >• {{ item }}</li>
           </ul>   
         </div>  

        </div>

      </div>

    </div>
  </div>
</template>

<script scoped>

import axios from 'axios';

export default {
  name: 'projectHeader',
  props: ['param'],
  data() {
    return {
      name: '',
      image:'',
      description:'',
      fonctionnality:[],
      technDetails:[],
      httpGitHub:'',
    }
  },
  beforeMount: function (){
    this.displayProject()
  },
  mounted: function () {
    //debug : see variable content at mounted event
    let imageItem = document.getElementById("projectImage")
    console.log(imageItem)
  },
  methods: {

    handleImageClick(){
      window.location.href = this.httpGitHub;
    },

    displayProject: function () {
      axios.post("../../public/jsonContent/data.json")
      .then((resp)=>{
        resp.data.forEach(element => {
          if (element.id == this.param) {
              this.name  = element.name
              this.image = element.image
              this.description = element.description
              this.fonctionnality = element.fonctionnality ?? []
              this.technDetails = element.technDetails??[]
              this.httpGitHub = element.httpGitHub
          }
        });
      })
      .catch((error)=>{
         console.log("error of connexion : "+error)
      })
    }
  }
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
  align-items: center;
  justify-content: center;
  gap:20px;

}

/* .projectHeader > p{
  text-align : center;
  font-size:20px;
  padding:30px;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
} */

.projectHeader > div >  #boxImage {
  position: relative;
  width: fit-content;
  height:230px;
  width: 100%;
}

.projectHeader > div >  #boxImage > #projectImage {
  width: 100%;
  border-radius:20px;
  object-fit:cover ;
  object-position:center ;
}

.projectHeader > div span{
  padding-left:70px
}

.projectHeader-imgIcon{
    position: absolute;
    bottom: 10px;
    right: 10px;
}


.projecticon{
  border-radius:50%;
  height:30px;
  width: 30px;
  object-fit: contain;
  cursor: pointer;
  margin: 5px;
}

#githubIcon{
  border: 5px solid white;
  outline: none;
}

#downloadIcon{
  background-color: red;
  fill: white;
  padding: 10px;

}
.text_block{
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  gap: 40px;
}
.textpoint{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}
.ulBlock{
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  gap: 20px;
}

.title{
  text-align: center;
}
</style>
