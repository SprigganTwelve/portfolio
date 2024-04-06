<template>
<!-- for project's header--->
  <div  class="stack" :style= "move">

    <!--stack : language elements--->

      <div>

          <div class="stack-technique">
              <div class="language">
                <div class="type">
                  <span v-rewrite>html</span>
                  <span  v-rewrite >advanced</span>
                </div>
                <div class="gauge"><div id="color1">color</div></div>
              </div>
          </div>

          <div class="stack-technique">
              <div class="language">
                <div class="type">
                  <span  v-rewrite>css</span>
                  <span  v-rewrite>advanced</span>
                </div>
                <div class="gauge"><div id="color2">color</div></div>
              </div>
          </div>

          <div class="stack-technique">
              <div class="language">
                <div class="type">
                  <span  v-rewrite>js</span>
                  <span  v-rewrite>advanced</span>
                </div>
                <div class="gauge"><div id="color3">color</div></div>
              </div>
          </div>

          <div class="stack-technique">
              <div class="language">
                <div class="type">
                  <span  v-rewrite>php</span>
                  <span  v-rewrite>regular</span>
                </div>
                <div class="gauge"><div id="color4">color</div></div>
              </div>
          </div>

          <div class="stack-technique">
              <div class="language">
                <div class="type">
                  <span  v-rewrite>vue js</span>
                  <span  v-rewrite>begginer</span>
                </div>
                <div class="gauge"><div id="color5">color</div></div>
              </div>
          </div>

      </div>

    <!--stack: additionnal element--->

      <div class="stack-additional">

              <span>Technologies et compétences additionnel</span>
              <ul>
                  <ul>
                    <li  v-rewrite>- git</li>
                    <li  v-rewrite>- vs-Code</li>
                    <li  v-rewrite>- quick learning</li>
                  </ul>
                  <ul>
                    <li  v-rewrite>- git</li>
                    <li  v-rewrite>- vs-Code</li>
                    <li  v-rewrite>- quick learning</li>
                  </ul>
              </ul>

      </div>

  </div>

</template>

<script>

export default {
  name: 'stack',
  data () {
    return {

    }
  }
}

</script>

<style>
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

.stack-technique .language > .gauge > #color1 {
  width:60%;
  background-image: linear-gradient(to right,#13ADC7, #6978D1,#945DD6);
  border-radius:20px;
  color:transparent
}

.stack-technique .language > .gauge > #color2{
  width:80%;
  background-image: linear-gradient(to right,#13ADC7, #6978D1,#945DD6);
  border-radius:20px;
  color:transparent
}

.stack-technique .language > .gauge > #color2{
  width:70%;
  background-image: linear-gradient(to right,#13ADC7, #6978D1,#945DD6);
  border-radius:20px;
  color:transparent
}

.stack-technique .language > .gauge > #color3{
  width:30%;
  background-image: linear-gradient(to right,#13ADC7, #6978D1,#945DD6);
  border-radius:20px;
  color:transparent
}

.stack-technique .language > .gauge > #color4{
  width:60%;
  background-image: linear-gradient(to right,#13ADC7, #6978D1,#945DD6);
  border-radius:20px;
  color:transparent
}

.stack-technique .language > .gauge > #color5 {
  width:10%;
  background-image: linear-gradient(to right,#13ADC7, #6978D1,#945DD6);
  border-radius:20px;
  color:transparent
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

</style>
