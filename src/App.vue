<template>
	<div id="app" class="h-100">
		<router-view v-bind:email="this.$route.query.email" />
	</div>
</template>

<script>
export default {
	name: "App",
	data() {
		return {
			email: false
		};
	},
	mounted() {
		if (!this.$route.query.email
			&& this.$router.currentRoute.name != 'auth') {
			this.$router.replace({ name: "auth" });
		}
	}
};
</script>

<style>
</style>