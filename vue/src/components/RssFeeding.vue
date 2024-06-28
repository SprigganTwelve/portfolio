<template>
    <div>
      <h1>Articles RSS</h1>
      <ul>
        <li v-for="article in articles" :key="article.link">
          <a :href="article.link" target="_blank">{{ article.title }}</a>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  
  export default {
    data() {
      return {
        articles: []
      };
    },

  };
  </script>
  
  <style scoped>
  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin-bottom: 10px;
  }
  </style>
  