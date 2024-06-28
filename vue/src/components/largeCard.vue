<template>
  <!-- present--->
    <div id="largeCard">
  
          <div class="atEnd">
            <div class="describe">
              <h1>les technologies de communication par satellites </h1>
              <div  style="height: 20px;"></div>
              <p>
                Cette étude explore les avancées récentes dans les technologies de communication par satellites, depuis les méthodes de communication entre satellites et appareils, en passant par les différentes catégories de satellites, jusqu'aux technologies émergentes et leurs applications. Elle examine également les perspectives d'avenir pour ce secteur en constante évolution, mettant en lumière son impact potentiel sur divers domaines.
              </p>
              <a href="../../public/satellite.docx" download="satellite.docx">   <svg :class="color" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg></a>
              <div  style="width: 20px;"></div>
            </div>
              <div>
                  <img  src="../assets/images/satellite-meteorologique_Nasa_wiki_dp.jpg" alt="">
                  <div class="downloadLink">
                      <h1>Les satellite</h1>
                  </div>
              </div>
          </div>
   
          <div class="atFirst" >
              <div>
                <h1>Outils de veilles</h1>

                  <div class="tools">
                      <img src="../assets/images/feedly-logo.jpeg" alt="">
                      <p>
                        Feedly est une application web et mobile qui agrège du contenu de diverses sources en ligne, comme des blogs, sites d'actualités et podcasts, via des flux RSS. Elle permet aux utilisateurs de suivre, organiser et lire facilement ces contenus en un seul endroit. Lancée en 2008, Feedly est populaire pour sa capacité à centraliser et personnaliser les flux d'information.
                      </p>
                  </div>

              </div>
          </div>
  
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'App5',
    props: ['color']
  }
  </script>
  
  <style scoped>
  /*----position---*/
  
  #largeCard {
      display:flex;
      flex-direction:column;
      justify-content: center;
      align-items: center;
      gap: 30px;
      padding:30px;
      margin: 70px;
  }
  
  #largeCard  div > img {
      border-radius: 30px;
  }
  
  #largeCard > .atEnd {
      width: 100%;
      display: flex;
      justify-content: end;
  }
  
  #largeCard > .atFirst {
      width: 100%;
      display: flex;
      justify-content: start;
  }

  #largeCard > .atFirst > div{
    display: flex;
    flex-direction: column;
    gap: 20px;

  }
  


  #largeCard > .atFirst >div >div >img{
    width: 200px;
    height: 200px;
  }


  #largeCard > div >div > img {
      object-fit:cover;
      object-position:center;
      width:700px;
      height:330px;
      border: none;
  
  }
  
  
  #largeCard > div >div > span {
      position:absolute;
      z-index:9999;
      bottom:5px;
      left:30px;
  }
  
  #largeCard > div> div {
      position: relative;
      width:700px;
  }
  
  #largeCard > div> div > svg{
      position:absolute;
      z-index:9999;
      bottom:5px;
      right:5px;
      transition: all 1.3s
  }
  
  /*-----color---*/
  
  /*---- Svg -color---*/
  
  .iswhite{
      fill:black;
      background:white;
      margin-left:30px;
      padding:10px;
      margin-top:20px;
      border-radius:50%;
      margin-bottom:15px;
      cursor:pointer
  }
  .isblack {
      fill:white;
      background:black;
      margin-left:30px;
      padding:10px;
      margin-top:20px;
      border-radius:50%;
      margin-bottom:15px;
      cursor:pointer
  }
  
  #largeCard > div > div>  svg:hover{
   background:red;
   fill:white
  }
  /*--------*/
  
  /*-----border card Color ---*/
  
  .atEnd >div  {
  }
  
  .downloadLink{
      display: flex;
      justify-content: space-evenly;
      align-items: center;
  }
  

 
  
  </style>