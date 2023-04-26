<template>
    <div>
        <q-btn 
            class="contact-btn" 
            color="grey-9" 
            unelevated 
            label="Contacto" 
            no-caps 
            @click="contact=true" 
        />
        <q-dialog v-model="contact">
                <q-card class="contact-card" style="width: 700px; max-width: 85vw;">
                    <q-card-section class="row items-center justify-end">
                        <q-btn icon="close" flat round @click="clear()"/>
                    </q-card-section>
                    <q-card-section class="q-pt-none q-pb-xl">
                        <div class="row">
                            <div class="col col-xs-12 col-sm-5 q-px-md q-mb-md">
                                <div class="text-center q-mb-lg">
                                    <q-img
                                        src="../assets/img/rc-icon.png"
                                        spinner-color="black"
                                        spinner-size="3rem"
                                        style="height: 50px; max-width: 50px;"
                                    />
                                </div>
                                <div class="form-title text-center q-mb-sm">
                                    Contacto comercial
                                </div>
                                <div class="form-description">
                                    Somos un despacho enfocado en garantizar 
                                    la protección patrimonial de nuestros clientes 
                                    a través de servicios de planeación patrimonial, 
                                    más de 15 años de experiencia nos respaldan. 
                                </div>
                            </div>
                            <div class="col col-xs-12 col-sm-7 q-px-md">
                                <Form
                                    @submit=""
                                    ref="obs"
                                    name="contactForm"
                                    v-slot="{ meta: formeta }"
                                    :validation-schema="schema"
                                >
                                    <Field
                                        as="div"
                                        name="name"
                                        v-slot="{ errorMessage, field }"
                                    >
                                        <q-input
                                            class="form-input" 
                                            outlined 
                                            dense
                                            placeholder="Nombre"
                                            color="brown-8" 
                                            bg-color="white" 
                                            v-model="params.name"
                                            v-bind="field"
                                            :error-message="errorMessage"
                                            :error="!!errorMessage"
                                        >
                                        </q-input>
                                    </Field>
                                    <Field
                                        as="div"
                                        name="lname"
                                        v-slot="{ errorMessage, field }"
                                    >
                                        <q-input 
                                            class="form-input" 
                                            outlined 
                                            dense 
                                            placeholder="Apellido"
                                            color="brown-8" 
                                            bg-color="white" 
                                            v-model="params.lname"
                                            v-bind="field"
                                            :error-message="errorMessage"
                                            :error="!!errorMessage"
                                        >
                                        </q-input>
                                    </Field>
                                    <Field
                                        as="div"
                                        name="cel"
                                        v-slot="{ errorMessage, field }"
                                    >
                                        <q-input
                                            class="form-input"  
                                            outlined 
                                            dense 
                                            placeholder="Teléfono/Celular"
                                            color="brown-8" 
                                            bg-color="white" 
                                            v-model="params.cel"
                                            v-bind="field"
                                            :error-message="errorMessage"
                                            :error="!!errorMessage"
                                        >
                                        </q-input>
                                    </Field>
                                    <Field
                                        as="div"
                                        name="email"
                                        v-slot="{ errorMessage, field }"
                                    >
                                        <q-input
                                            class="form-input"  
                                            outlined 
                                            dense 
                                            placeholder="Email"
                                            color="brown-8" 
                                            bg-color="white" 
                                            v-model="params.email"
                                            v-bind="field"
                                            :error-message="errorMessage"
                                            :error="!!errorMessage"
                                        >
                                        </q-input>
                                    </Field>
                                    <Field
                                        as="div"
                                        name="message"
                                        v-slot="{ errorMessage, field }"
                                    >
                                        <q-input
                                            class="form-input"  
                                            outlined 
                                            dense 
                                            placeholder="Mensaje"
                                            color="brown-8" 
                                            bg-color="white" 
                                            v-model="params.message"
                                            v-bind="field"
                                            :error-message="errorMessage"
                                            :error="!!errorMessage"
                                        >
                                        </q-input>
                                    </Field>
                                    <q-btn 
                                        class="send-btn" 
                                        unelevated 
                                        color="grey-9" 
                                        label="Enviar" 
                                        no-caps 
                                        type="submit"
                                        style="width:100%"
                                    />
                                    <div class="form-terms q-mt-lg">
                                        Autorizo a Romero Consultores a mantenerme 
                                        informado sobre actualizaciones ocasionales 
                                        sobre servicios... Si quiero darme de baja 
                                        más adelante, sé que puedo darme de baja en 
                                        cualquier momento. Mis datos se manejarán 
                                        de acuerdo con la 
                                        <span class="statement">
                                            declaración de privacidad de Romero Consultores.
                                        </span>
                                        <br>
                                        <br>
                                        Información legal. Preferencias sobre cookies.
                                        <br>
                                        Copyright © 2022 Romero Consultores.  
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </q-card-section>
                </q-card>
        </q-dialog>
    </div>
</template>
  
<script>
    import { defineComponent, ref } from 'vue'
    import { Field, Form } from "vee-validate";
    export default defineComponent({
    name: "MenuDialog",
    components: {
        Form,
        Field,
    },
    setup() {
        const contact = ref(false);
        const schema = {
            name: 'required',
            lname: 'required',
            cel: 'required',
            email: 'required',
            message: 'required'
        };
        const params = {
            name: ref(null),
            lname: ref(null),
            cel: ref(null),
            email: ref(null),
            message: ref(null)
        };
        const clear = () =>{
            contact.value = false;
            params.name = null;
            params.lname = null;
            params.cel = null;
            params.email = null;
            params.message = null;
        };
        return {
            contact, params, schema, clear
        };
    },
})
</script>
<style scoped>
.contact-btn{
    width: 10rem;
    border-radius: .625rem;
    font-family: 'Merriweather Sans', sans-serif;
    font-size: .875rem;
}
.contact-card{
    background-color: #f2f2f2;;
}
.form-title{
    color: #4f4f4f;
    font-family: 'Merriweather Sans', sans-serif;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140.62%;
}
.form-description{
    color: #433f3f;
    font-family: 'Merriweather Sans', sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140.62%;
    text-align: left;
}
.form-input{
    padding-bottom: 1.25rem;
    margin-bottom: .5rem;
    color: #433f3f;
    font-family: 'Merriweather Sans', sans-serif;
    font-size: .875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.125rem;
}
.form-terms{
    font-family: 'Merriweather', serif;
    font-size: .75rem;
    font-style: normal;
    font-weight: 300;
    line-height: 1rem;
    color: #828282;
    text-align: center;
}
.statement{
    text-decoration: underline;
    color: black;
}
.send-btn{
    width: 10rem;
    border-radius: .625rem;
    font-family: 'Merriweather Sans', sans-serif;
    font-size: .875rem;
}
@media (max-width: 37.5rem) {
    .form-description{
        font-size: .75rem;
        text-align: center;
    }
    .form-terms{
        font-size: .625rem;
    }
    .contact-btn{
        width: 100%;
        font-size: 1.125rem;
        font-weight: 700;
    }
}
@media (min-width: 37.5rem) and (max-width: 60rem) {
    .contact-btn{
        width: 100%;
        font-size: 1.125rem;
        font-weight: 700;
    }
}

</style>
