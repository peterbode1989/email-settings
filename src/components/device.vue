<template>
	<div class="device">
		<p>device: {{device.name}}</p>
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