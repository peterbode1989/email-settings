<template>
	<b-container class="details">
		<b-row align-v="center">
			<b-col v-bind:cols="device.grid[0]">
				<!-- <h1>E-mail instellen</h1>
				<p class="lead mb-4">
					Hieronder is een handleiding gemaakt voor het instellen van
					<span
						class="text-primary"
					>{{ email }}</span>
					op de {{ device.name }}.
				</p> -->

				<slick class="slider-nav" ref="slick" :options="slickOptionsText">
					<div
						v-for="(step, index) in device.tutorial"
						v-bind:key="index"
						v-html="'<h1>' + step.title + '</h1><p>' + step.desc + '</p>'"
					></div>
				</slick>
			</b-col>

			<b-col v-bind:cols="device.grid[1]" class="text-center">
				<div class="device" v-bind:class="device.frame">
					<div class="device-frame">
						<div class="device-content">
							<slick class="slider-for" ref="slick" :options="slickOptionsDevice">
								<div
									class="device-actual-content"
									v-for="(step, index) in device.tutorial"
									v-bind:key="index"
								>
									<img
										class="img-fluid"
										v-bind:src="'/assets/img/devices/' + device.slug + '/slide-' + (index + 1) + '.jpg'"
										v-bind:alt="'Stap '+(index + 1)"
									/>
									<div v-if="step.tooltip" class="overlay">
										<div
											class="overlay-item"
											v-for="(tip, o) in step.tooltip"
											v-bind:key="o"
											v-bind:class="['x-' + tip.x + (typeof tip.subX != 'undefined' ? '-' + tip.subX : ''), 'y-' + tip.y + (typeof tip.subY != 'undefined' ? '-' + tip.subY : '')]"
										>
											<span v-if="tip.title">{{ tip.title }}</span>
										</div>
									</div>
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
			address: {
				name: "",
				domain: ""
			},
			slickOptionsText: {
				slidesToShow: 1,
				dots: false,
				arrows: true,
				infinite: false,
				draggable: false,
				asNavFor: ".slider-for",
				fade: true,
				prevArrow:
					'<button type="button" class="btn btn-link slick-prev"><span>Vorige stap</span><span></span></button>',
				nextArrow:
					'<button type="button" class="btn btn-link slick-next"><span>Volgende stap</span><span></span></button>'
			},
			slickOptionsDevice: {
				slidesToShow: 1,
				dots: true,
				arrows: false,
				infinite: false,
				fade: true,
				asNavFor: ".slider-nav"
			}
		};
	},
	computed: {
		device() {
			return this.$root.devices.find(
				device => device.slug === this.$route.params.device
			);
		}
	},
	created: function() {
		let email = this.$route.query.email;
		let index = email.lastIndexOf("@");
		let name = email.substring(0, index);
		let domain = email.substring(index + 1);
		this.address = { name, domain };
	}
};
</script>

<style scoped>
</style>