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
		if (!this.$route.query.email) {
			this.$router.replace({ name: "login" });
		}
	}
};
</script>

<style>
</style>