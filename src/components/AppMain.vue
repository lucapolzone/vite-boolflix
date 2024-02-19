<script>
  import { store } from '../store/';
  import AppCard from './AppCard.vue';

  export default {
    data() {
      return {
        store,
      }
    },

    components: { AppCard }
  };
</script>

<template>

<main>
  <div class="container">
    <h2>MOVIES</h2>
    <div class="wrapper d-flex">
      <app-card v-for="movie in store.movies" :videoElement="movie" :key="movie.id"/>
    </div>
  </div>

  <div class="container">
    <h2>TV SERIES</h2>
    <div class="wrapper d-flex">
    <app-card v-for="TVserie in store.TVseries" :videoElement="TVserie" :key="TVserie.id"/>
    </div>

  </div>
</main>

</template>

<style lang="scss" scoped>
  .container {
    margin: 0 auto;
    margin-top: 2rem;
    
    .wrapper {
      flex-wrap: wrap;
    }
  }

</style>