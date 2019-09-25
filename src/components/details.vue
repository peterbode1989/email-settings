<template>
	<b-container class="details">
		<b-row align-v="center">

			<b-col cols="6">
				<h1>E-mail instellen</h1>
				<p class="lead mb-4">
					Hieronder is een handleiding gemaakt voor het instellen van
					<span
						class="text-primary"
						v-b-tooltip.hover
						title="Uw e-mailadres"
					>{{ email }}</span>
					op de {{ device.name }}.
				</p>

				<slick class="slider-nav" ref="slick" :options="slickOptionsText">
					<div v-for="(step, index) in device.tutorial" v-bind:key="index" v-html="'<h5>' + step.title + '</h5>' + step.desc"></div>
				</slick>
			</b-col>

			<b-col cols="6">
				<div class="device" v-bind:class="device.frame">
					<div class="device-frame">
						<div class="device-content">
							<slick class="slider-for" ref="slick" :options="slickOptionsDevice">
								<div class="device-actual-content" v-for="(step, index) in device.tutorial" v-bind:key="index">
									<img
										class="img-fluid"
										v-bind:src="'/assets/img/devices/' + device.slug + '/slide-' + (index + 1) + '.jpg'"
										v-bind:alt="'Stap '+(index + 1)"
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
			</b-col>

		</b-row>
	</b-container>
</template>

<script>
import Slick from "vue-slick";
export default {
	name: "Details",
	props: ["email"],
	components: {
		Slick
	},
	data() {
		return {
			slickOptionsDevice: {
				slidesToShow: 1,
				dots: true,
				arrows: false,
				infinite: false,
				asNavFor: '.slider-nav'
			},
			slickOptionsText: {
				slidesToShow: 1,
				dots: false,
				arrows: true,
				infinite: false,
				draggable: false,
				asNavFor: '.slider-for',
				fade: true,
				prevArrow: '<button type="button" class="btn btn-link slick-prev">Vorige stap</button>',
				nextArrow: '<button type="button" class="btn btn-link slick-next">Volgende stap</button>'
			},
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