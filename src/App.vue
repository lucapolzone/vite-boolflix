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
          console.log(response.data.results)
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