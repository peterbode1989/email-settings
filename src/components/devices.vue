<template>
	<section class="devices">
		<b-container>
			<b-row class="align-items-center">
				<div class="col-12">
					<h1>E-mail instellen</h1>
					<p class="lead">
						U heeft aangegeven dat u de e-mail wil instellen voor {{ email }}
						<br />Kies hieronder het programma waar u het e-mailadres op wenst in te stellen.
					</p>

					<div class="row mt-5">
						<div v-bind:key="device.id" v-for="device in devices" class="col-3">
							<Device v-bind:device="device" />
						</div>
					</div>
				</div>
			</b-row>
		</b-container>
	</section>
</template>

<script>
import Device from "./device";
export default {
	name: "Devices",
	components: {
		Device
	},
	props: ["devices", "email"]
};
</script>

<style scoped>
</style>