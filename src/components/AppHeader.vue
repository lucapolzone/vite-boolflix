<script>
  
  export default {
    data() {
      return {
        searchedTerm: 'scrubs'

      }
    },

    emits: ['searchEvent']
  };
</script>

<template>
  <input type="text" id="search" v-model="searchedTerm" @keyup.enter="$emit('searchEvent', this.searchedTerm)">
  <button type="button" id="submit" @click="$emit('searchEvent', this.searchedTerm)">CERCA</button>


</template>


<style scoped>



</style>