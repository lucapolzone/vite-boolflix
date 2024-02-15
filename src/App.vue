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
        axios.get('https://api.themoviedb.org/3/search/movie',
          {
            params: {
              api_key: '59ca97a78bb8f370a70c11dbdd07bb0f',
              query: this.searchedTerm
            }
          }
        ).then((response) => {
          console.log(response.data)
        })

      }
    },

    components: {AppHeader}
  }
</script>

<template>
  <header>
    <h1> {{ this.store.title }} </h1>
      <input type="text" id="search" v-model="searchedTerm" @keyup.enter="startResearch()">
      <button type="button" id="submit" @click="startResearch()">CERCA</button>
  </header>
</template>

<style>

body {
  background-color: #c3dadb;
  font-family: Arial, Helvetica, sans-serif;
}

</style>