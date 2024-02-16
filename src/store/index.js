import { reactive } from 'vue'

export const store = reactive({
  title: 'Titolo di prova',
  
  api: {
    uri: 'https://api.themoviedb.org/3',
    key: '59ca97a78bb8f370a70c11dbdd07bb0f'
  },

  movies: [],
  TVseries: []
  
})