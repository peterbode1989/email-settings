<template>
	<div id="overview" class="h-100">
		<!-- <h1>{{email}}</h1>
		<p>This is a overview area</p>-->

		<Devices v-bind:devices="Devices" />
	</div>
</template>

<script>
import Devices from "./devices";

export default {
	name: "Overview",
	components: {
		Devices
	},
	data() {
		return {
			Devices: [
				{ id: 1, name: "z", desc: "" },
				{ id: 2, name: "x", desc: "" },
				{ id: 3, name: "c", desc: "" }
			]
		};
	},
	props: ["email", "devices"]
};
</script>

<style scoped>
</style>