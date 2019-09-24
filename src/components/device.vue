<template>
	<div class="card shadow device">
		<div class="card-body text-center">
			<div class="device-type">
				<img class="device-type-icon" v-bind:src="'./assets/img/icons/' + device.icon">
			</div>
			<h3 class="py-3">{{device.name}}</h3>
			<router-link class="btn btn-primary" :to="{path: '/overview/' + device.slug, params: { data: device } }">Read more</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: "Device",
	props: ["device"]
};
</script>

<style scoped>
</style>