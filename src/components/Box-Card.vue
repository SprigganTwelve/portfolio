<template>
    <div  class="BoxCard mainBox">
        <div>
            <img  src="../assets/images/gojo.jpeg" class="BoxCard-img" alt="">
            <span v-rewrite>Name</span>
            <p>lodhdhdhdhdhdhddkdkkdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</p>
        </div>
        <div>
            <img src="../assets/images/gojo.jpeg" class="BoxCard-img" alt="">
            <span>Name</span>
            <p>lodhdhdhdhdhdhddkdkkdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</p>
        </div>
                <div>
            <img src="../assets/images/gojo.jpeg" class="BoxCard-img" alt="">
            <span>Name</span>
            <p>lodhdhdhdhdhdhddkdkkdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</p>
        </div>
                <div>
            <img src="../assets/images/gojo.jpeg" class="BoxCard-img" alt="">
            <span>Name</span>
            <p>lodhdhdhdhdhdhddkdkkdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</p>
        </div>
                <div>
            <img src="../assets/images/gojo.jpeg" class="BoxCard-img" alt="">
            <span>Name</span>
            <p>lodhdhdhdhdhdhddkdkkdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</p>
        </div>
                <div>
            <img src="../assets/images/gojo.jpeg" class="BoxCard-img" alt="">
            <span>Name</span>
            <p>lodhdhdhdhdhdhddkdkkdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</p>
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

<style>
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
