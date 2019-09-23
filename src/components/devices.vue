<template>
	<!-- <div class="container devices">
		<h1>Devices</h1>

		<div class="row">
			<div v-bind:key="device.id" v-for="device in devices" class="col-3">
				<p>{{device.name}}</p>
				<Device v-bind:device="device" />
			</div>
		</div>
	</div>-->

	<section class="fdb-block devices h-100">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-12">
					<!-- <img alt="image" class="fdb-icon" src="./icons/github.svg" /> -->
					<h1>Design Blocks</h1>
					<p
						class="lead"
					>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

					<div class="row">
						<div v-bind:key="device.id" v-for="device in devices" class="col-3">
							<p>{{device.name}}</p>
							<Device v-bind:device="device" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import Device from "./device";
export default {
	name: "Devices",
	components: {
		Device
	},
	props: ["devices"]
};
</script>

<style scoped>
</style>