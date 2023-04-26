<template>
    <q-layout>
           <div class="row" style="height:100vh">
				<div class="flex flex-center col-xs-12 col-sm-12 col-md-6">
					<q-card class="login-card" flat>
						<div class="text-center">
							<q-img
								src="../assets/img/logo-romero.png"
								fit="contain"
								spinner-color="black"
								spinner-size="3rem"
								loading="lazy"
								style="max-width:150px;"
							/>
						</div>

						<q-card-section>
							<Form
								@submit="enviar()"
								ref="obs"
								name="loginForm"
								v-slot="{ meta: formeta }"
								:validation-schema="schema"
							>
								<Field
									as="div"
									name="user"
									v-slot="{ errorMessage, field }"
								>
									<q-input
										class="login-input q-mb-sm"
										type="text"
										outlined
										v-model="user"
										placeholder="Usuario"
										hint=""
										:dense="true"
										v-bind="field"
										:error-message="errorMessage"
										:error="!!errorMessage"
										color="brown-8"
										bg-color="white"
									>
										<template v-slot:prepend>
											<q-icon name="las la-user" />
										</template>
									</q-input>
								</Field>
								<Field
									as="div"
									name="password"
									v-slot="{ errorMessage, field }"
								>
									<q-input
										class="login-input q-mb-sm"
										type="password"
										outlined
										v-model="password"
										placeholder="Contraseña"
										hint=""
										:dense="true"
										v-bind="field"
										:error-message="errorMessage"
										:error="!!errorMessage"
										color="brown-8"
										bg-color="white"
									>
										<template v-slot:prepend>
											<q-icon name="las la-lock" />
										</template>
									</q-input>
								</Field>
								<q-btn
									class="send-btn full-width"
									label="Enviar"
									type="submit"
									no-caps
								>
								</q-btn>
							</Form>
						</q-card-section>

					</q-card>


				</div>
				<div v-if="$q.screen.gt.sm" class="col-md-6">
					<q-img
						src="../assets/img/imgLogin.png"
						fit="cover"
						spinner-color="black"
						spinner-size="82px"
						style="max-height:100vh"
						loading="lazy"
					/>
				</div>
		   </div> 
    </q-layout>
</template>
    
<script>
    import { defineComponent, ref } from 'vue'
    import { useQuasar } from 'quasar';
	import { Field, Form } from "vee-validate";

    export default defineComponent({
      	name: 'LoginPage',
		components: {
			Form,
			Field,
		},
		setup(){
			const user          = ref()
			const password      = ref()
			const schema        = {
				user: 'required',
				password: 'required',
			};
			const $q = useQuasar()
            $q.screen.setSizes({ sm: 600, md: 1024, lg: 1440, xl: 1920 })
			return{
				schema,
				user,
				password,
			}
		}
    })
</script>
<style scoped>
.login-card{
	width: 400px;
}
.send-btn{
	background: #B08877;
    color: #fff;
	font-family: 'Merriweather', serif;
}
.login-input{
	font-family: 'Merriweather', serif;
}
</style>