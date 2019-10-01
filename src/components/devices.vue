<template>
	<section class="devices">
		<b-container>
			<b-row align-v="center">
				<b-col cols="12">
					<h1>E-mail instellen</h1>
					<p class="lead">
						U heeft aangegeven dat u de e-mail wil instellen voor <span class="text-primary">{{ this.$route.query.email }}</span>
						<br />Kies hieronder het programma waar u het e-mailadres op wenst in te stellen.
					</p>

					<b-row class="mt-5">
						<b-col cols="12" md="4" class="device-holder" v-bind:key="device.id" v-for="device in devices">
							<Device v-bind:device="device" v-bind:email="email" />
						</b-col>
					</b-row>
				</b-col>
			</b-row>
		</b-container>
	</section>
</template>

<script>
import Device from "./device";
export default {
	name: "Devices",
	props: ["devices", "email"],
	components: {
		Device
	}
};
</script>

<style scoped>
</style>