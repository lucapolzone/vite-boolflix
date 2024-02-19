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
        if (lang == 'de') return new URL('../assets/img/de.png', import.meta.url).href;
        if (lang == 'es') return new URL('../assets/img/es.png', import.meta.url).href;
        if (lang == 'fi') return new URL('../assets/img/fi.png', import.meta.url).href;
        if (lang == 'fr') return new URL('../assets/img/fr.png', import.meta.url).href;
        if (lang == 'jp') return new URL('../assets/img/jp.png', import.meta.url).href;
        return new URL('../assets/img/default.png', import.meta.url).href;
      }
    }
  }
</script>

<template>
  <div class="wrapper-card mx-1 d-flex">
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
  </div>
</template>

<style lang="scss" scoped>
  .wrapper-card {
    border: 2px solid red;
    justify-content: center;
    align-items: center;
    width: 380px;
    
    .fa-star {
      color: orange;
    }
  }
</style>