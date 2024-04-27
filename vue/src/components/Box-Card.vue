<template>
    <div  class="BoxCard mainBox">
        <div>
            <img  src="../assets/images/calc.jpg" class="BoxCard-img" alt="">
            <h2 v-rewrite>PhoneCalc</h2>
            <p>
                PhoneCalc est un projet multiplateforme accessible depuis le navigateur ou
                une application mobile.
                Ce projet reprend l'idée d'une calculatrice et de ses fonctions de calcule...
            </p>
        </div>
        <div>
            <img src="../assets/images/company.jpg" class="BoxCard-img" alt="">
            <h2>profect For Company</h2>
            <p>
                Ce projet reprend la réalisation d'un site web complet à multipage 
                pour une entreprise fictive. Il s'agit de l'entreprise Infinit link. Cette...
            </p>
        </div>
        <div>
            <img src="../assets/images/leboncote.jpg" class="BoxCard-img" alt="">
            <h2>LeBonCoté</h2>
            <p>
                LeBonCote est un projet basé sur la réalisation d'un site web du même nom (leboncote).
                Ce site web est une plateforme de partage d'article.
                Autrement dit, LeBonCote... 
            </p>
        </div>
        <div>
            <img src="../assets/images/biblio.jpg" class="BoxCard-img" alt="">
            <h2>BiBlio</h2>
            <p>
                Un projet assez simple basé sur la réalisation d'un système de BiBliothèque où
                les utilisateurs ont la possibilité de rechercher des livres, de...
            </p>
        </div>
        <div>
            <img src="../assets/images/meteo3.jpg" class="BoxCard-img" alt="">
            <h2>Meteo</h2>
            <p>
                Comme l'indique le titre, il s'agit ici de la réalisation d'une application météo, qui
                à l'aide d'une api fournit différentes  services utilisateurs...
            </p>
        </div>
        <div>
            <img src="../assets/images/eshop.jpg" class="BoxCard-img" alt="">
            <h2>Eshop</h2>
            <p>
                Eshop est un projet basé sur le dévéloppement d'un site web de e-commerce.
                Eshop fournit de nombreux services utilisateurs variés. En effet...  
            </p>
        </div>
        <div>
            <img src="../assets/images/dictionnary.jpg" class="BoxCard-img" alt="">
            <h2>Dictionnary</h2>
            <p>
                Dictionnary est un projet utilisant des services Api et des technologies variés.
                Ce projet évolutif construit un model de dictionnaire anglais-anglais. il...
            </p>
        </div>
        <div>
            <img src="../assets/images/meal.jpg" class="BoxCard-img" alt="">
            <h2>Meal</h2>
            <p>
                Il s'agit ici  d'un projet de recettes en ligne.
                ce projet fournit à l'aide de services Api, des conseils...
            </p>
        </div>

    </div>
</template>

<script>

export default {
  name: 'Box-Card',
  methods: {
    scale: function (scale) {
      let container = document.querySelector('.mainBox')
      container.style.transform = 'scale(' + scale + ')'
    }
  }
}

</script>

<style scoped>
.BoxCard{
    display:flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items:center;
    flex-wrap: wrap;
    gap: 50px;
    border-radius:20px;
    background:black;
    padding:20px;
    margin:10px;
    border: none;
    outline: none;
}

.BoxCard > div  {
    display:flex;
    flex-direction:column;
    width:262px;
    gap: 20px;
    overflow-wrap: break-word;
    background:white;
    color:black;
    padding:15px;
    border-radius:0px 0 0 20px;
    cursor:pointer;
    transition: transform 0.5s ease;
}

.BoxCard > div:hover {
    transform: scale(1.09)
}
.BoxCard > div > p {

}

.BoxCard-img{
    height:262px;
    width:100% important;
    object-fit:cover;
    padding:0;
    object-position:center;
    margin:-20px; /* set off the padding of its parent element */
    border: none;
    outline: none;
}
</style>
