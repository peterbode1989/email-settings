<template>
	<section class="loginForm">
		<b-container class="py-5">
			<b-row align-h="center" align-v="center" class="py-5">
				<b-col cols="7" class="text-center">

					<b-card class="shadow">
						<b-card-text>
							<h1>E-mail instellen</h1>
							<p class="lead">Vul om te beginnen uw e-mailadres in</p>

							<b-form-group class="d-inline-block mt-2 w-50">
								<b-form-input class="text-center" v-model="input.email" v-on:keyup.enter="login()" type="email" placeholder="Uw e-mailadres"></b-form-input>
							</b-form-group>

							
						</b-card-text>

						<b-button type="button" variant="primary" v-on:click="login()">Beginnen</b-button>
					</b-card>

				</b-col>
			</b-row>
		</b-container>
	</section>
</template>

<script>
export default {
	name: "Login",
	data() {
		return {
			input: {
				email: ""
			}
		};
	},
	methods: {
		login() {
			if (this.input.email != "") {
				if (this.input.email) {
					// this.$emit("setEmail", this.input.email);
					this.$router.replace({
						name: "overview",
						query: { email: this.input.email }
					});
				}
			} else {
				console.log("A email must be present");
			}
		}
	}
};
</script>

<style scoped>
</style>