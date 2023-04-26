<template>
    <div>
        <div class="separator lt-sm"></div>
        <div id="mision-vision" class="row mision-vision-card">
            <div class="col col-xs-12 col-sm-12 col-md-6 q-pa-md" data-aos="fade-up" data-aos-duration="800">
                <q-img
                    class="mision-vision-img gt-xs"
                    src="../assets/img/misionVision/mision.png"
                    spinner-color="black"
                    spinner-size="3rem"
                />
                <h3 class="mision-vision-title">Misión</h3>
                <p class="mision-vision-text">
                    Nuestra razón de ser es brindar 
                    asesoría a las empresas para la 
                    correcta toma de decisiones en el 
                    ámbito legal y fiscal. Asimismo 
                    asesoramos a los empresarios para 
                    proteger su patrimonio, a través 
                    de un sólido equipo de abogados y 
                    contadores comprometidos con la 
                    actualización constante en sus 
                    conocimientos.
                </p>
            </div>
            <div class="col col-xs-12 col-sm-12 col-md-6 q-pa-md" data-aos="fade-up" data-aos-duration="800">
                <q-img
                    class="mision-vision-img gt-xs"
                    src="../assets/img/misionVision/vision.png"
                    spinner-color="black"
                    spinner-size="3rem"
                />
                <h3 class="mision-vision-title">Visión</h3>
                <p class="mision-vision-text"> 
                    Posicionamos a nivel península 
                    entre los líderes en el sector, 
                    a través de nuestros servicios 
                    especializados que brindan nuestros 
                    profesionistas con los conocimientos 
                    adquiridos a con la capacitación 
                    continua. 
                </p>
            </div>
        </div>
    </div>
</template>
  
<script>
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    name: 'MisionVision',
  
    setup () {
      return {
        
      }
    }
  })
</script>
<style scoped>
.separator{
    height: 1px;
    background-color:#b08877;
    margin-bottom: 3.125rem;
    margin-right: .625rem;
    margin-left: .625rem;
}
.mision-vision-card{
    margin-top: 5.625rem;
    margin-left: 6.25rem;
    margin-right: 6.25rem;
}
.mision-vision-title{
    margin: 0rem;
    color: #433f3f;
    font-family: 'Merriweather', serif;
    font-size: 2.375rem;
    font-style: normal;
    font-weight: 700;
    line-height: 48px;
}
.mision-vision-text{
    font-family: 'Merriweather Sans', sans-serif;
    margin-top: 1.25rem;
    margin-bottom: 1rem;
    color: #433f3f;
    font-style: normal;
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 24px;
}
.mision-vision-img{
    max-width: 3.4375rem;
    margin-bottom: 1rem;
}
@media (max-width: 37.5rem) {
    .mision-vision-card{
        margin-top: 1.25rem;
        margin-left: .625rem;
        margin-right: .625rem;
    }
    .mision-vision-title{
        font-size: 1.625rem;
        line-height: 2.0625rem;
    }
    .mision-vision-text{
        font-size: .875rem;
        line-height: 1.125rem;
    }
}
@media (min-width: 37.5rem) and (max-width: 60rem) {
    .mision-vision-card{
        margin-top: 3.125rem;
        margin-left: 1.875rem;
        margin-right: 1.875rem;
    }
}
@media (min-width: 60rem) and (max-width: 79rem) {
    .mision-vision-card{
        margin-top: 3.75rem;
        margin-left: 3.75rem;
        margin-right: 3.75rem;
    }
}
</style>
