<script>
  import { store } from '../store/';

  export default {
    data() {
      return {
        store,
      }
    },
    methods: {
      getFlag(lang) {
        if (lang == 'it') {
          //gestisco dinamicamente il path relativo dell'immagine
          return new URL('../assets/img/ita.png', import.meta.url).href;
        }
        if (lang == 'en') return new URL('../assets/img/en.png', import.meta.url).href;
      }

    }
  };
</script>

<template>

    <div class="container">
    <h2>MOVIES</h2>

    <ul v-for="movie in store.movies">
      <li>Titolo: {{ movie.title }}</li>
      <li>Titolo originale: {{ movie.original_title }}</li>
      <li><img :src="getFlag(movie.language)" alt=""></li>
      <li>Voto: {{ movie.vote }}</li> 
    </ul>

    <h2>TV SERIES</h2>

    <ul v-for="TVserie in store.TVseries">
      <li>Titolo: {{ TVserie.name }}</li>
      <li>Titolo originale: {{ TVserie.original_title }}</li>
      <li><img :src="getFlag(TVserie.language)" alt=""></li>
      <li>Voto: {{ TVserie.vote }}</li> 
    </ul>
  </div>

</template>

<style scoped>
.container {
  margin: 0 auto;
  margin-bottom: 3rem;
}

</style>