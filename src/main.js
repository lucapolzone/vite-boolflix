import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faStar as faStarFull } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

/* add icons to the library */
library.add(faStarFull, faStarEmpty)

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
