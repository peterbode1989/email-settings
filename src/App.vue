<template>
	<div id="app" class="h-100">
		<!-- <div id="nav">
			<router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
		</div>-->
		<!-- <router-view @authenticated="setEmail" v-bind:email="data.email" /> -->
		<router-view v-bind:email="data.email" />
	</div>
</template>

<script>
export default {
	name: "App",
	data() {
		return {
			authenticated: false,
			data: {
				email: ""
			}
		};
	},
	mounted() {
		if (!this.authenticated) {
			this.$router.replace({ name: "login" });
		}
	},
	methods: {
		// setAuthenticated(status) {
		// 	this.authenticated = status;
		// },
		// setEmail(email) {
		// 	this.mockAccount.email = email;
		// },
		// logout() {
		// 	this.authenticated = false;
		// }
	}
};
</script>

<style>
</style>