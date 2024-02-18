<script>
  import axios from 'axios';
  import { store } from './store/';

  import AppHeader from './components/AppHeader.vue';

  export default {
    data() {
      return {
        store,
        // searchedTerm: 'scrubs'
      }
    },

    components: { AppHeader },

    methods: {
      fetchMovies(searchedTerm) {
        axios.get(this.store.api.uri + '/search/movie',
          {
            params: {
              api_key: store.api.key,
              query: searchedTerm
            }
          }
        ).then((response) => {
          //uso map() per ottimizzare il mio array dei risultati
          store.movies = response.data.results.map( (movie) => {
            return {
              title: movie.title,
              original_title: movie.original_title,
              language: movie.original_language,
              vote: movie.vote_average
            }
          })
        })
      },

      fetchTVSeries(searchedTerm) {
        axios.get(this.store.api.uri + '/search/tv',
          {
            params: {
              api_key: store.api.key,
              query: searchedTerm
            }
          }
        ).then((response) => {
          store.TVseries = response.data.results.map( (TVserie) => {
            return {
              name: TVserie.name,
              original_title: TVserie.original_name,
              language: TVserie.original_language,
              vote: TVserie.vote_average
            }
          })
        })
      },


      startResearch(searchedTerm) {
        this.fetchMovies(searchedTerm);
        this.fetchTVSeries(searchedTerm);
      },

      getFlag(lang) {
        if (lang == 'it') {
          //gestisco dinamicamente il path relativo dell'immagine
          return new URL('./assets/img/ita.png', import.meta.url).href;
        }
        if (lang == 'en') return new URL('./assets/img/en.png', import.meta.url).href;
      }
    },

    components: {AppHeader}
  }
</script>

<template>
  <div class="container">
    <h1> {{ this.store.title }} </h1>
    <app-header @searchEvent="startResearch"  />
  </div>

  <h2>MOVIES</h2>

  <div class="container">
    <ul v-for="movie in store.movies">
      <li>Titolo: {{ movie.title }}</li>
      <li>Titolo originale: {{ movie.original_title }}</li>
      <li><img :src="getFlag(movie.language)" alt=""></li>
      <li>Voto: {{ movie.vote }}</li> 
    </ul>
  </div>

  <h2>TV SERIES</h2>

  <div class="container">
    <ul v-for="TVserie in store.TVseries">
      <li>Titolo: {{ TVserie.name }}</li>
      <li>Titolo originale: {{ TVserie.original_title }}</li>
      <li><img :src="getFlag(TVserie.language)" alt=""></li>
      <li>Voto: {{ TVserie.vote }}</li> 
    </ul>
  </div>

</template>

<style>

body {
  font-family: Arial, Helvetica, sans-serif;
}

.container {
  margin: 0 auto;
  margin-bottom: 3rem;
}

</style>