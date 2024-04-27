<template>
<div id="homeIcon-box">
        <svg :class="color" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
</div>
</template>

<script>

export default {
  name: 'homeIcon',
  props: ['color']
}

</script>

<style >

.homeIcon-box{
    width:100vh;
    position:absolute;
    left: 20px;
}

/* color  */
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

</style>
