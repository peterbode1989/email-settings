<template>
	<section class="loginForm">
		<div class="container py-5">
			<div class="row justify-content-center py-5">
				<div class="col-12 col-md-10 col-lg-7 text-center">

					<div class="card shadow">
						<div class="card-body">
							<h1>E-mail instellen</h1>
							<p class="lead">Vul om te beginnen uw e-mailadres in</p>

							<!-- <form autocomplete="off"> -->
							<div class="form-group">
								<input
									type="email"
									name="email"
									class="form-control text-center"
									placeholder="Uw e-mailadres"
									v-model="input.email"
								/>
							</div>
							<p class="mt-4">
								<button class="btn btn-primary" type="button" v-on:click="login()">Beginnen</button>
							</p>
							<!-- </form> -->
						</div>
					</div>

				</div>
			</div>
		</div>
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
						params: { email: this.input.email }
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