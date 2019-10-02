import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import DetailsComponent from './components/details.vue';
import AuthComponent from './components/auth.vue';
import OverviewComponent from './components/overview.vue';

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'auth',
			component: AuthComponent
		},
		{
			path: '/apparaten',
			name: 'overview',
			component: OverviewComponent,
			props: true
		},
		{
			path: '/apparaten/:device',
			name: 'details',
			component: DetailsComponent,
			props: true
		},
		{
			path: '*',
			redirect: {
				name: 'auth'
			}
		},
	]
});
