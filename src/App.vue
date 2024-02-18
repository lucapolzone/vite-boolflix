<script>
  import axios from 'axios';
  import { store } from './store/';

  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';

  export default {
    data() {
      return {
        store,
        // searchedTerm: 'scrubs'
      }
    },

    components: { AppHeader, AppMain },

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
              vote: Math.ceil(movie.vote_average / 2),
              poster_path: movie.poster_path
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
              vote: Math.ceil(TVserie.vote_average / 2),
              poster_path: TVserie.poster_path
            }
          })
        })
      },


      startResearch(searchedTerm) {
        this.fetchMovies(searchedTerm);
        this.fetchTVSeries(searchedTerm);
      },


    },

    components: {AppHeader, AppMain}
  }
</script>

<template>
  <div class="container">
    <h1> {{ this.store.title }} </h1>
    <app-header @searchEvent="startResearch" />
    <app-main />
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