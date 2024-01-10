import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import './assets/app.css';
import { Icon } from '@iconify/vue2';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


export default {
	components: {
		Icon,
	},
};