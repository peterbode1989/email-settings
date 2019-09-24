import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import LoginComponent from './components/login.vue';
import OverviewComponent from './components/overview.vue';
import DetailsComponent from './components/details.vue';

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: {
				name: 'login'
			}
		},
		{
			path: '/login',
			name: 'login',
			component: LoginComponent
		},
		{
			path: '/overview',
			name: 'overview',
			component: OverviewComponent,
			props: true
		},
		{
			path: '/overview/:device',
			name: 'details',
			component: DetailsComponent,
			props: true
		}
	]
});
