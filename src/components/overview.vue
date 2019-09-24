<template>
	<section id="overview" class="h-100">
		<Devices v-bind:devices="devices" v-bind:email="email" />
	</section>
</template>

<script>
import Devices from "./devices";

export default {
	name: "Overview",
	components: {
		Devices
	},
	computed: {
		devices() {
			return this.$root.devices;
		}
	},
	props: ["email"]
};
</script>

<style scoped>
</style>