<script>
  export default {
    props: {
      videoElement: Object,
    },
    
    methods: {
      getFlag(lang) {
        if (lang == 'it') {
          //gestisco dinamicamente il path relativo dell'immagine
          return new URL('../assets/img/ita.png', import.meta.url).href;
        }
        if (lang == 'en') return new URL('../assets/img/en.png', import.meta.url).href;
        return 'default flag';
      }
    }
  }
</script>

<template>
  <ul>
    <li>Titolo: {{ videoElement.title }}</li>
    <li>Titolo originale: {{ videoElement.original_title }}</li>
    <li><img :src="getFlag(videoElement.language)" alt=""></li>
    <li>
      Voto:
      <font-awesome-icon v-for="star in 5" :icon="(star <= videoElement.vote) ? 'fa-solid fa-star' : 'fa-regular fa-star'" />
    </li> 
    <li><img :src="`https://image.tmdb.org/t/p/w342/${videoElement.poster_path}`" alt=""></li> 
  </ul>
</template>

<style>
</style>