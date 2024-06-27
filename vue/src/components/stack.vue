<template>
<!-- for project's header--->
  <div  class="stack" :style= "moved">

    <!--stack : language elements--->

      <div id="el" >
                 <div v-for="item in projectData.stat" class="stack-technique">
                      <div class="language">
                          <div class="type">
                            <span >{{ item.name }}</span>
                            <span >advanced</span>
                          </div>
                          <div class="gauge"><div  class="color1" :style="item.percent" >color</div></div>
                        </div>
                  </div>
      </div>

      <div class="spacer"></div>
    <!--stack: additionnal element--->

      <div class="stack-additional">

              <span>Technologies et compétences additionnelles</span>
              
              <ul>
                  <ul>
                    <li  v-rewrite>- git</li>
                    <li  v-rewrite>- vs-Code</li>
                  </ul>
                  <!-- <ul>
                    <li  v-rewrite>- git</li>
                    <li  v-rewrite>- vs-Code</li>
                    <li  v-rewrite>- quick learning</li>
                  </ul> -->
              </ul>

      </div>

  </div>

</template>

<script>
import axios from 'axios';

export default {
  name: 'stack',
  props: ['param'],
  data () {
    return {
      moved: {}, //for animation
      projectData:{},
    }
  },  

  mounted: function() {
   this.getData()
  },
  methods: {
    // gaugeColor: function (){
    //   let Allgauge = document.querySelectorAll('.percent')
    //   console.log(Allgauge)
    // },
    getData: function () {
      axios.post("../../public/jsonContent/data.json")
      .then((resp)=>{

        let stackParent = document.getElementById('el')
        console.log(stackParent)
        // stackParent.style.color = red
        resp.data.forEach(element => {
          if (element.id == this.param) {
            this.projectData = element
            console.log(this.projectData)  
            
          }    
        });
      })
      .catch((error)=>{

      })

    }
  }
}

</script>

<style scoped>
/*----position  stack element ----*/

.stack{
  margin-top : 50px;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column
}

.stack-technique{
  display:flex;
  justify-content:center;
  align-items:flex-start;
}

.stack-technique .language{
  padding:20px;
  width:700px
}

.stack-technique .language > .type  {
  display:flex;
  justify-content:space-between
}

.stack-technique .language > .gauge {
  margin-left:-15px;
  background:#162950;
  border-radius:20px;
}

/*--------*/

/*gauge percent */

.stack-technique .language > .gauge > .color1 {
  width: 0%;
  background-image: linear-gradient(to right,#13ADC7, #6978D1,#945DD6);
  border-radius:20px;
  color:transparent;
  transition: all 1.3ms ease;
}



/*-----------*/

/*----position  stack additional element ----*/

.stack-additional{
  padding:50px;
}

.stack-additional > span {
  margin-left: -40px;
  width:100%;
}
.stack-additional > ul{
  display:flex;
  justify-content:space-evenly;
  width:100%;
  margin:20px;
  font-size:22px
}

/*-----------*/

/*----design  stack additional element ----*/

.stack-additional > ul > li:before{
  content:'gg';
  color:white;
  padding:20px
}

li::marker{
  content: '';
  color:white;
  font-size: 20px;
}

.marker {
}

/*-----------*/

/*-----experiences------*/

.exp{
  color: red !important;
}

.spacer {
  height: 50px;
}

</style>
