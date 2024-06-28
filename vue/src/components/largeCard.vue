<template>
    <div>
      <div class="mainComponent">
        <div style="height: 20px;"></div>
        <div v-for="item in articles" :key="item.guid" class="rowLayout">
            <img  :src="item.enclosure.link??'../../public/depositphotos_62706797-stock-illustration-document-flat-circle-icon-with.jpg'" :alt="item.title">
            <div class="columnLayout">
                <h2>{{ item.title }}</h2>
                <p>{{ item.description}}</p>
                <a style="text-align: start;" :href="item.link">En savoir plus</a>
            </div>
        </div>

      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'App5',
    props: ['color'],
    data() {
      return {
        articles: []
      }
    },
    methods: {
      async fetchRSSFeed() {
        const RSS_JSON_URL = "https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fiatranshumanisme.com%2Ffeed%2F";
  
        try {
          const response = await axios.get(RSS_JSON_URL);
          this.articles = response.data.items.slice(0, 2) || [];
          console.log(response);
        } catch (error) {
          console.error('Error fetching the RSS feed:', error);
        }
      }
    },
    mounted() {
      this.fetchRSSFeed();
    }
  }
  </script>
  
  <style scoped>
  .mainComponent {
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
    align-items: center;
  }
  
  .rowLayout {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  .columnLayout{
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    width: 700px;
    gap: 20px;
  }

img{
    height: 350px;
    width: 400px;
    border-radius: 20px;
}

p{
    font-size: 20px;
}
  </style>
  