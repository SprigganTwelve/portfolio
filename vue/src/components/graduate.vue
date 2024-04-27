<template>
  <!---all in white color-->
  <div id="graduate">
    <div id="line">line</div>
    <div>
      <div>circle</div>
      <p>
        2022-2023 <br/> Obtention du baccalauréat (Bac C) avec mansion assez bien en côte d'ivoire au collège catholique  Saint jean de Gagnao
      </p>
    </div>
    <div>
      <div>circle</div>
      <p>2023 <br /> Début de la formation BTS SIO option SLAM au campus de l'Ipssi,  grande école d'ingénierie , à Saint-Quentin-En-Yvelyne </p>
    </div>
    <div>
      <div>circle</div>
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'graduate'
}
</script>

<style>

#graduate {
  position: relative;
  overflow: auto;
  color: white;
  display: flex;
  justify-content: space-evenly;
  margin-top: 2rem;
  margin-bottom: 30px;
}
#graduate > #line {
  position: absolute;
 /* if  #graduate >div >div /width = 80% => 800px/1000vh */
  width: 80%;
  height: 3px;
  border-radius: 20px;
  margin-top: 7px;
  color: transparent;
  background-color: white;
  border: none;
  outline: none;
}

#graduate > div {
padding-top:0;
margin-top:0
}

#graduate >div >div {
  background: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

#graduate >div > p {
  margin-top: 5px;
  text-align: center;
  width: 190px;
}
</style>
