<script>
  
  export default {
    data() {
      return {
        searchedTerm: ''

      }
    },

    emits: ['searchEvent']
  };
</script>

<template>

  <header class="py-2">
    <div class="container d-flex justify-content-between align-items-center">
      <h1>BOOLFLIX</h1>
      <div>
        <input type="text" class="me-4 p-1" id="search" v-model="searchedTerm" @keyup.enter="$emit('searchEvent', this.searchedTerm)">
        <button type="button" class="btn btn-danger" id="submit" @click="$emit('searchEvent', this.searchedTerm)">CERCA</button>
      </div>
    </div>
  </header>

</template>

<style lang="scss" scoped>

header {
  background-color: #181818;

  h1 {
    color: red;
  }

  button#submit {
    --bs-btn-padding-x: 4px;
    --bs-btn-padding-y: 2px;
  }
}

</style>