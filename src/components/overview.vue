<template>
	<section id="overview" class="h-100">
		<List v-bind:devices="devices" v-bind:email="email" />
	</section>
</template>

<script>
// import Devices from "./devices";
import List from './list';

export default {
	name: "Overview",
	props: ["email"],
	components: {
		List
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