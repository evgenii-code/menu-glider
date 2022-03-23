import 'normalize.css';
import Vue from 'vue';
import App from './App.vue';
import './plugins/fontAwesome';
import { router } from './router';
import './styles/index.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
