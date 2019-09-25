<template>
	<section id="overview" class="h-100">
		<Devices v-bind:devices="devices" v-bind:email="email" />
	</section>
</template>

<script>
import Devices from "./devices";

export default {
	name: "Overview",
	props: ["email"],
	components: {
		Devices
	},
	computed: {
		devices() {
			return this.$root.devices;
		}
	}
};
</script>

<style scoped>
</style>