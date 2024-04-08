<template>
<!-- present--->
  <div id="largeCard">
        <div>
            <img src="../assets/images/gojo.jpeg" alt="">
            <span>Name</span>
            <svg :class="color" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>
        </div>

        <div>
            <img src="../assets/images/okotsu.jpg" alt="">
            <span>Name</span>
            <svg :class="color" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>
        </div>
  </div>
</template>

<script>

export default {
  name: 'App5',
  props: ['color']
}
</script>

<style>
/*----position---*/

#largeCard {
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding:50px;
}

#largeCard > div {
    position: relative;
    height:200px;
    width:100%;
    border-radius: 20px
}

#largeCard > div > img {
    object-fit:cover;
    object-position:center;
    width:100%;
    height:300px;
}

#largeCard > div > span {
    position:absolute;
    z-index:9999;
    bottom:5px;
    left:30px;
}

#largeCard > div > svg{
    position:absolute;
    z-index:9999;
    bottom:5px;
    right:5px;
    transition: all 1.3s
}

/*-----color---*/

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

#largeCard > div >  svg:hover{
 background:red;
 fill:white
}
/*--------*/

</style>
