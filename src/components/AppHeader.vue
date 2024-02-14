<script>
  import { store } from '../store/';
  
  export default {
    data() {
      return {
        store
      }
    }
  };
</script>

<template>
  <header>
    <h1> {{ store.title }} </h1>
    <form>
      <input type="search">
      <input type="submit" value="submit">
    </form>
  </header>
</template>

<style lang="scss" scoped>

</style>