<template>
	<!-- <div id="login">
		<h1>Login</h1>
		<input type="text" name="email" v-model="input.email" placeholder="Email" />
		<button type="button" v-on:click="login()">Login</button>
	</div>-->
	<section class="fdb-block py-0">
		<div class="container py-5 my-5 block-item">
			<div class="row justify-content-center py-5">
				<div class="col-12 col-md-10 col-lg-8 text-center">
					<div class="fdb-box">
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
								autocomplete="off"
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