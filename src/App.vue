<script>
  import axios from 'axios';
  import { store } from './store/';

  import AppHeader from './components/AppHeader.vue';

  export default {
    data() {
      return {
        store,
        searchedTerm: ''
      }
    },

    methods: {
      startResearch() {
        axios.get(store.api.uri + '/search/movie',
          {
            params: {
              api_key: store.api.key,
              query: this.searchedTerm
            }
          }
        ).then((response) => {
          store.movies = response.data.results;
          console.log(response.data.results)
        })

      }
    },

    components: {AppHeader}
  }
</script>

<template>
  <div class="container">
    <h1> {{ this.store.title }} </h1>
    <input type="text" id="search" v-model="searchedTerm" @keyup.enter="startResearch()">
    <button type="button" id="submit" @click="startResearch()">CERCA</button>
  </div>

  <div class="container">
    <ul v-for="movie in store.movies">
      <li>Titolo: {{ movie.title }}</li>
      <li>Titolo originale: {{ movie.original_title }}</li>
      <li>Lingua: {{ movie.original_language }}</li>
      <li>Voto: {{ movie.vote_average }}</li> 
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