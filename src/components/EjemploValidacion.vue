<template>
    <div class="row row-login" style="height:100vh">
        <div
            class="col-12 col-md-7"
            style="height:100vh;"
        >
            <q-card
                class="card-login center-items shadow-0"
            >
                <q-card-section>
                    <div class="q-pt-lg">
                        <div class="col flex justify-center">
                            <img src="rcLogin.png" >
                        </div>
                    </div>
                </q-card-section>
                <q-card-section class="q-mb-md" :style="widthFormulario">
                    <Form
                        @submit="enviar()"
                        ref="obs"
                        name="dnewForm"
                        v-slot="{ meta: formeta }"
                        :validation-schema="schema"
                    >
                        <Field
                            as="div"
                            name="user"
                            v-slot="{ errorMessage, field }"
                        >
                            <q-input
                                type="text"
                                outlined
                                v-model="user"
                                placeholder="Usuario"
                                hint=""
                                :dense="true"
                                v-bind="field"
                                :error-message="errorMessage"
                                :error="!!errorMessage"
                                bg-color="white"
                                class="q-mb-sm"
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
                                type="password"
                                outlined
                                v-model="password"
                                placeholder="Contraseña"
                                hint=""
                                :dense="true"
                                v-bind="field"
                                :error-message="errorMessage"
                                :error="!!errorMessage"
                                bg-color="white"
                                class="q-mb-sm"
                            >
                                <template v-slot:prepend>
                                    <q-icon name="las la-lock" />
                                </template>
                            </q-input>
                        </Field>
                        <q-btn
                            label="Enviar"
                            type="submit"
                            class="full-width btn-modal-enviar"
                            :loading="isLoading"
                        >
                        </q-btn>
                        <!-- <div>
                            <q-btn class="full-width" color="primary" label="Login" type="submit" rounded></q-btn>
                        </div> -->
                    </Form>
                </q-card-section>

            </q-card>


        </div>

        <div
            class="col-12 col-md-5 flex justify-end content-center"
        >
            <img src="imgLogin.png" style="width:100vw;" alt="login-image">
        </div>
    </div>
</template>
<script>
import { ref, onMounted, computed } from 'vue'
import { Field, Form } from "vee-validate";
import { useQuasar } from 'quasar'

export default {
    components: {
        Form,
        Field,
    },

    setup () {
        const $q            = useQuasar()
        const isLoading     = ref(false)
        const user          = ref()
        const password      = ref()
        const schema        = {
            user: 'required',
            password: 'required',
        };

        const widthFormulario = computed(() => {
            if ($q.screen.xs) {
                return 'width:80%'
            }
            else if($q.screen.sm){
                return 'width:60%'
            }
            else if($q.screen.md){
                return 'width:50%'
            }
            else if($q.screen.lg){
                return 'width:50%'
            }
            else {
                return 'width:40%'
            }
        })


        const enviar = () =>{
            console.log("Entre")
            isLoading.value = true
            console.log(
                `
                    user: ${user.value},
                    password: ${password.value},
                `
            )

            setTimeout(function() {
                isLoading.value = false
                $q.notify({
                    type: 'positive',
                    position: 'top',
                    message: 'Los datos fueron enviados correctamente.'
                })

                /* $q.notify({
                    type: 'negative',
                    position: 'top',
                    message: 'Error al enviar los datos.'
                }) */

            }, 3000);

        }

        return{
            //variables
            schema,
            user,
            password,
            isLoading,

            widthFormulario,

            //metodos
            enviar,
        }
    }
}
</script>
<style scoped>
    .row-login{
        background: #F2F2F2;
        overflow: hidden;
    }

    .center-items{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background-color: transparent;
    }

    .btn-modal-enviar{
        background: #B08877;
        color: #fff;
        text-transform: none;
    }
</style>