<template>
    <div  class="BoxCard mainBox">
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
                <div>
            <img src="../assets/images/gojo.jpeg" class="BoxCard-img" alt="">
            <span>Name</span>
            <p>lodhdhdhdhdhdhddkdkkdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</p>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Box-Card'
}

</script>

<style>
.BoxCard{
    display:flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items:center;
    flex-wrap: wrap;
    gap: 20px;
    border-radius:20px;
    background:#110E0E;
    padding:15px;
    margin:10px;
}

.BoxCard > div  {
    display:flex;
    flex-direction:column;
    width:262px;
    gap: 20px;
    word-wrap: break-word;
    overflow-wrap: break-word;
    background:white;
    color:black;

}

.BoxCard > div > p {
    font-size:25
}

.BoxCard-img{
    height:262px;
    width:100%;
    object-fit:cover;
    object-position:center;
    border-radius:20px 0 0 0;
}
</style>
