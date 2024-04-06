<template>
<!-- for project's header--->
  <div  class="stack">

    <!--stack : language elements--->

      <div>

          <div class="stack-technique">
              <div class="language">
                <div class="type">
                  <span>html</span>
                  <span>advanced</span>
                </div>
                <div class="gauge"><div id="color1">color</div></div>
              </div>
          </div>

      </div>

    <!--stack: additionnal element--->

      <div class="stack-additional">

              <span>Technologies et compétences additionnel</span>
              <ul>
                  <ul>
                    <li>- git</li>
                    <li>- vs-Code</li>
                    <li>- quick learning</li>
                  </ul>
                  <ul>
                    <li>- git</li>
                    <li>- vs-Code</li>
                    <li>- quick learning</li>
                  </ul>
              </ul>

      </div>

  </div>

</template>

<script>

export default {
  name: 'stack'
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
