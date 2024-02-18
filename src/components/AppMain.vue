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

  <div class="container">
    <h2>MOVIES</h2>
    <app-card v-for="movie in store.movies" :videoElement="movie" :key="movie.id"/>

    <h2>TV SERIES</h2>
    <app-card v-for="TVserie in store.TVseries" :videoElement="TVserie" :key="TVserie.id"/>

  </div>

</template>

<style scoped>
.container {
  margin: 0 auto;
  margin-bottom: 3rem;
}

</style>