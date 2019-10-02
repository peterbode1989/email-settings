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
								<b-form-input
									class="text-center"
									v-model="input.email"
									v-on:keyup.enter="login()"
									type="email"
									placeholder="Uw e-mailadres"
									autocomplete="off"
								></b-form-input>
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
		containsEmail(email) {
			var re = /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
			return re.test(email);
		},
		login() {
			if (this.input.email != "") {
				if (this.containsEmail(this.input.email)) {
					this.$router.replace({
						name: "overview",
						query: { email: this.input.email }
					});
				} else {
					this.$bvToast.toast(
						"Het door u ingevoerde e-mailadres voldoet niet aan onze eisen.",
						{
							title: "Let op!",
							variant: "warning",
							autoHideDelay: 5000,
							solid: true
						}
					);
				}
			} else {
				this.$bvToast.toast("U heeft geen e-mailadres opgegeven.", {
					title: "Let op!",
					variant: "danger",
					autoHideDelay: 5000,
					solid: true
				});
			}
		}
	}
};
</script>

<style scoped>
</style>