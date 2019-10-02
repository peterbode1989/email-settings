<template>
	<b-card class="device shadow">
		<div class="device-type" v-bind:class="device.type">
			<img class="device-type-icon" v-bind:src="'./assets/img/icons/' + device.icon">
		</div>
		<h4 class="py-3">
			<span>{{device.name}}</span>
		</h4>

		<b-button variant="outline-primary" v-if="device.slug" class="m-auto stretched-link" :to="{ name: 'details', params: { device: device.slug }, query: {email: this.$route.query.email} }">Toon uitleg</b-button>
		<b-button variant="link" v-else class="m-auto disabled">Binnenkort verwacht</b-button>
	</b-card>
</template>

<script>
export default {
	name: "Device",
	props: ["device", "email"]
};
</script>

<style scoped>
</style>