<template>
<!--- -->
  <div id="aboutMe">
    <p id="title">A propos</p>
    <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <!--- espace insecables-->
        Dali zouayobo ange paterne, passionné du développement informatique, décide de s'avenurer dans ce monde fantastique,
        porteur de projets et d'inventions innovantes. Son but, acquérir une expérience et un savoir proffessionnel afin de pouvoir se parfaire et pouvoir
        s'affirmer ainsi qu'apporter une aide moins que négligeable.
    </p>
      <button id="cv"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>Mon Cv</button>
    <div class="intership">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-120v-560h160v-160h400v320h160v400H520v-160h-80v160H120Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 480h80v-80h-80v80Zm0-160h80v-80h-80v80Z"/></svg>
            <span>Ohana Entreprise</span>
            <button>Aller au site</button>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'graduate',

  data () {
    return {
      // object for color of homeIcon

    }
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
#aboutMe > #title {
    font-size: 27px;
    font-weight: bold;
}

#aboutMe > p {
    padding-top:0;
    width: 900px;
}

#aboutMe #cv{
  margin-left: 80%;
  display: flex;
}

#aboutMe #cv > svg {
  fill: white;
}

#aboutMe > .intership {
    border-top : 2px  solid white;
    border-bottom : 2px  solid white;
    padding : 30px
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

button {
    font-size:20px;
    padding:10px;
    border-radius:20px;
    border:none;
    outline:none;
    cursor:pointer;
    color:white;
    background: red;
}

</style>
