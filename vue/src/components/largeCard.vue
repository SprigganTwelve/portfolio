<template>
<!-- present--->
  <div id="largeCard">

        <div class="atEnd">
            <div>
                <img  src="../assets/images/satellite-meteorologique_Nasa_wiki_dp.jpg" alt="">
                <div class="downloadLink">
                    <h1>Les satellite</h1>
                    <a href="../../public/satellite.docx" download="satellite.docx">   <svg :class="color" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg></a>
                </div>
            </div>
        </div>
 
        <div class="atFirst" >
            <div >
             
                <img src="../assets/images/Intelligence-Artificielle.jpg" alt="">
                <div class="downloadLink">    
                    <h1>L'intelligance artificiel</h1>
                    <a href="../../public/ia_veilles_techno.docx" download="ia_veilles_techno.docx">   <svg :class="color" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg></a>
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
