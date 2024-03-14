<template>
  <div class="container">
    <strong :style="strongStyle">Mon portfolio</strong>
    <div :style="containerStyle">
      <a href='me.html'>Description</a>
      <a>Projets</a>
      <a>Veille technologique</a>
      <a>Tableau de synthèse</a>
      <a>L'école</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      strongStyle: {
        transition: 'transform 1s',
        transform: 'translateY(-1000px)'
      },
      containerStyle: {
        transition: 'transform 2s',
        transform: 'translateY(1000px)'
      }
    }
  },
  mounted () {
    // Utilisation d'un délai pour démarrer l'animation après le rendu initial
    setTimeout(() => {
      this.strongStyle.transform = 'translateY(0)'
      this.containerStyle.transform = 'translateY(0)'
    }, 100)
  }
}
</script>

<style>
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 17px;
  flex-direction: column;
  background: black;
  color: white;
}

strong {
  font-size: 100px;
}

a {
  font-size: 20px;
  padding: 5px;
  background: red;
  color: white;
  margin: 7px;
  border-radius: 5px;
  border: none;
  outline: none;
}
</style>
