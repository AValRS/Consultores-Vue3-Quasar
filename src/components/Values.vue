<template>
    <div class="values-card">
        <div class="row">
            <div class="col col-xs-12 col-sm-6 col-md-4 q-pa-lg" data-aos="fade-up" data-aos-duration="800">
                <q-img
                    class="gt-xs"
                    src="../assets/img/valores/confianza.png"
                    spinner-color="black"
                    spinner-size="3rem"
                    style="max-width:3.75rem"
                />
                <div class="col-12 values-title">Confianza</div>
                <div class="col-12 values-text">
                    Puede estar seguro de que nuestras 
                    acciones se rigen por el marco regulatorio 
                    y un estricto código de ética y calidad.
                </div>
            </div>
            <div class="col col-xs-12 col-sm-6 col-md-4 q-pa-lg" data-aos="fade-up" data-aos-duration="800">
                <q-img
                    class="gt-xs"
                    src="../assets/img/valores/experiencia.png"
                    spinner-color="black"
                    spinner-size="3rem"
                    style="max-width:3.75rem"
                />
                <div class="col-12 values-title">Experiencia</div>
                <div class="col-12 values-text">
                    Tenemos más de 10 años de experiencia 
                    asesorando a todo tipo de empresas, 
                    organizaciones y entidades gubernamentales.
                </div>
            </div>
            <div class="col col-xs-12 col-sm-6 col-md-4 q-pa-lg" data-aos="fade-up" data-aos-duration="800">
                <q-img
                    class="gt-xs"
                    src="../assets/img/valores/calidad.png"
                    spinner-color="black"
                    spinner-size="3rem"
                    style="max-width:3.75rem"
                />
                <div class="col-12 values-title">Calidad</div>
                <div class="col-12 values-text">
                    Nos distinguimos por ofrecer el mejor 
                    servicio basado en valores como proximidad, 
                    profesionalismo y confidencialidad.
                </div>
            </div>
        </div>
        <div class="values-spacer"></div>    
    </div>
</template>
  
<script>
    import { defineComponent, ref } from 'vue'

    export default defineComponent({
        name: 'Values',
    
        setup () {
            return {
                
            }
        }
    })
</script>
<style scoped>
.values-card{
    margin-left: 6.25rem;
    margin-right: 6.225rem;
}
.values-title{
    margin-top: 1.375rem;
    color: #211f1f;
    font-family: 'Merriweather', serif;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
}
.values-text{
    margin-top: 1.375rem;
    margin-bottom: 0rem;
    color:#433f3f;
    font-family: 'Merriweather Sans', sans-serif;
    font-style: normal;
    font-size: 1rem;
    font-weight: 400;
}
.values-spacer{
    height: 6.25rem;
}
@media (max-width: 37.5rem) {
    .values-title{
        font-size: 1.625rem;
    }
    .values-text{
        font-size: .875rem;
    }
    .values-card{
        margin-left: 0rem;
        margin-right: 0rem;
    }
    .values-spacer{
        height: 3.125rem;
    }
}
@media (min-width: 37.5rem) and (max-width: 60rem) {
    .values-card{
        margin-left: 1.875rem;
        margin-right: 1.875rem;
    }
}
@media (min-width: 60rem) and (max-width: 79rem) {
    .values-card{
        margin-left: 3.75rem;
        margin-right: 3.75rem;
    }
}
</style>
