import Vue from 'vue';
import Router from 'vue-router';
import LoginComponent from './components/login.vue';
import OverviewComponent from './components/overview.vue';

Vue.use(Router);

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
		}
	]
});
