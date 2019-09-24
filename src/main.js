import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);

import App from './App.vue';
import Router from './router';

import { devices } from './data';

Vue.config.productionTip = false;

import './assets/scss/theme.scss';

new Vue({
	router: Router,
	data() {
		return {
			devices
		}
	},
	render: h => h(App)
}).$mount('#app');
