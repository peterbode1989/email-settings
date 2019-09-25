<template>
	<b-card class="device shadow">
		<div class="device-type">
			<img class="device-type-icon" v-bind:src="'./assets/img/icons/' + device.icon">
		</div>
		<h3 class="py-3">{{device.name}}</h3>

		<router-link v-if="device.slug" class="btn btn-primary" :to="{path: '/overview/' + device.slug, query: {email: this.$route.query.email} }">Toon uitleg</router-link>
		<a v-else href="javascript:void(0);" class="btn btn-primary disabled">Binnenkort verwacht</a>
	</b-card>
</template>

<script>
export default {
	name: "Device",
	props: ["device", "email"],
	methods: {
		showDetails() {
			this.$router.replace({
				path: '/overview/' + this.device.slug,
				query: { email: this.email }
			});
		}
	}
};
</script>

<style scoped>
</style>