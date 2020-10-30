import '@/assets/tailwind.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faChevronDown,
  faSearch,
  faTimes,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

library.add(faChevronDown);
library.add(faSearch);
library.add(faTrash);
library.add(faTimes);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
