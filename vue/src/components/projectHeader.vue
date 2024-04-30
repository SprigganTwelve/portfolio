<template>
<!-- for project's header--->
  <div class="projectHeader">
    <div>
          <div id="boxImage">
            <img id="projectImage" :src="image" alt="">
            <div class="projectHeader-imgIcon">
              <img class="projecticon" id="githubIcon" src="../assets/images/github-icon-24.jpg" alt="gitHub">
              <svg class="projecticon" id="downloadIcon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>
            </div>
          </div>
          <span>{{ name }}</span>
    </div>
    <p  v-rewrite>
       {{ description }}
    </p>
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
    displayProject: function () {
      axios.post("../../public/jsonContent/data.json")
      .then((resp)=>{
        resp.data.forEach(element => {
          if (element.id == this.param) {
              this.name  = element.name
              this.image = element.image
              this.description = element.description
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
  gap:20px;

}

.projectHeader > p{
  text-align : center;
  font-size:20px;
  padding:30px;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
}

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

</style>
