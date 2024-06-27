<template>
<!--- -->
  <div id="aboutMe">
    <p id="title">A propos de Dali Zouayobo Ange Paterne</p>
    <div>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <!--- espace insecables-->
          Dali Zouayobo Ange Paterne, actuellement étudiant à l'IPSSI SQY (Saint-Quentin-en-Yvelines), est passionné par le développement informatique. Il décide de s'aventurer dans le monde du numérique, porteur de projets et d'inventions innovantes. Son objectif est d'acquérir une expérience professionnelle solide afin de se perfectionner, de s'affirmer et de pouvoir apporter une contribution significative
      </p>
      <div style="height:10px ;"></div>
        <a id="cv" class="download" download="mon_cv.pdf" href="../../public/mon_cv.pdf"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>Mon Cv</a>
        <div class="spacer"></div>

        <p id="title">A Propos de l'IPSSI Saint-Quentin-en-Yvelines</p>
        <div style="height: 30px;"></div>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <!--- espace insecables-->
              
      L'IPSSI, établie à Saint-Quentin-en-Yvelines, est un institut spécialisé dans le numérique et l'informatique, formant depuis sa création à former des professionnels du digital avec une approche pratique et d'excellence. Nos formations, du bac+2 au bac+5, incluent le développement web, le design graphique, le marketing digital, et la cybersécurité. En partenariat avec des entreprises renommées, nous offrons des opportunités d'alternance pour une expérience concrète. Notre campus moderne favorise un environnement d'apprentissage stimulant, promouvant l'innovation et la créativité, et nous nous engageons fermement envers l'excellence académique et professionnelle, contribuant ainsi au développement continu du secteur numérique.
      </p>
<div class="spacer"></div>
      <p id="title">Mes expériences professionnelles</p>
    </div>
    <div class="intership">
        <div>
            <div><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-120v-560h160v-160h400v320h160v400H520v-160h-80v160H120Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 480h80v-80h-80v80Zm0-160h80v-80h-80v80Z"/></svg>
              <span>Stage développeur web à Ohana Entreprise</span></div>
            <a href="../../public/Rapport_de_stage.pdf" class="download" download="Rapport_de_stage.pdf">Télécharger le rapport</a>
        </div>
    </div>
  </div>
</template>

<script>

import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

export default {
  name: 'graduate',
  components: {
  },
  data () {
    return {

    }
  },
  mounted: function () {
  },
  methods: {

  }
}
</script>

<style>

*{
  /* list-style-type: none; */
  text-decoration: none;
  margin:0;
  padding:0;
}
#aboutMe{
    position:relative;
    font-size:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    padding-left:30px;
    padding-right: 30px;
    flex-direction:column;
    gap:40px;
}
#aboutMe  #title {
    font-size: 27px;
    font-weight: bold;
}

#aboutMe  p {
    padding-top:0;
    width: 900px;
}

/* #aboutMe > div {
  width: 100%;
} */

#aboutMe > div > #cv{
  margin-left: 80%;
  display: flex;
}

#aboutMe > div > #cv > svg {
  fill: white;
}


#aboutMe > .intership{
  border-top : 2px  solid white;
  margin: 20;
}
#aboutMe > .intership > div{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#aboutMe > .intership > div{
     position:relative;
     margin-top : 40px;
     border:2px solid white;
     width: 900px;
     padding:30px;
     border-radius:20px;
     color: black;
     background-color: white;
}

#aboutMe > .intership > div  button {
    position:absolute;
    right:20px;
    bottom:20px;
}

.download {
    font-size:20px;
    padding:10px;
    border-radius:20px;
    border:none;
    outline:none;
    cursor:pointer;
    color:white;
    background: red;
}

.spacer{
  height: 40px;
}

</style>
