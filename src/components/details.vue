<template>
	<b-container class="details">
		<b-row>
			<div class="col-12 text-center">
				<div class="device" v-bind:class="device.frame">
					<div class="device-frame">
						<div class="device-content">
							<slick ref="slick" :options="slickOptions">
								<div v-bind:key="i" v-for="i in device.steps">
									<img
										class="img-fluid"
										v-bind:src="'/assets/img/devices/' + device.slug + '/slide-' + i + '.jpg'"
										alt
									/>
								</div>
							</slick>
						</div>
					</div>
					<div class="device-stripe"></div>
					<div class="device-header"></div>
					<div class="device-sensors"></div>
					<div class="device-btns"></div>
					<div class="device-power"></div>
					<div class="device-home"></div>
				</div>
			</div>
		</b-row>
		<!-- {{ device.name }}
		<div class="device" v-bind:class="device.frame">
			<div class="device-frame">
				<img class="device-content" src="/assets/img/bg-06.jpg" />
			</div>
			<div class="device-stripe"></div>
			<div class="device-header"></div>
			<div class="device-sensors"></div>
			<div class="device-btns"></div>
			<div class="device-power"></div>
			<div class="device-home"></div>
		</div>-->
	</b-container>
</template>

<script>
import Slick from "vue-slick";
export default {
	name: "Details",
	components: {
		Slick
	},
	data() {
		return {
			slickOptions: {
				slidesToShow: 1,
				dots: true,
				arrows: false,
				infinite: false
				// Any other options that can be got from plugin documentation
			}
		};
	},
	computed: {
		device() {
			return this.$root.devices.find(
				device => device.slug === this.$route.params.device
			);
		}
	}
};
</script>

<style scoped>
</style>