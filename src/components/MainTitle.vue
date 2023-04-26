<template>
    <div class="row" v-if="$q.screen.gt.sm">
        <div class="main-text col-xs-12 col-sm-6 col-md-6">
            <h2 class="first-text" data-aos="fade-down" data-aos-duration="1000">
                Somos una firma de abogados, contadores y asesores
            </h2>
            <p class="second-text" data-aos="fade-up" data-aos-duration="1000">
                con más de quince años de experiencia, protegiendo el patrimonio de nuestro clientes.
            </p>
        </div>
        <div class="flex flex-center col-xs-12 col-sm-6 col-md-6" style="flex-direction: column;">
            <div class="main-img">
                <q-img
                    src="../assets/img/lady_justice_2.png"
                    spinner-color="black"
                    spinner-size="3rem"
                    loading="lazy"
                    style="max-height: 100vh; margin-bottom: -20px;"
                />
            </div>
        </div>
        <div class="space gt-sm"></div>
    </div>
    
    <div class="main-card row justify-center self-center" v-if="$q.screen.lt.md">
        <div class="col-xs-12">
            <h2 class="main-title q-my-sm" data-aos="fade-down" data-aos-duration="1000">Somos una firma de abogados, contadores y asesores</h2>
            <div class="row">
            <div class="col-xs-7">
                <p class="p-text" data-aos="fade-up" data-aos-duration="1000">con más de quince años de experiencia, protegiendo el patrimonio de nuestro clientes. </p>
            </div>
            <div class="col-xs-5"></div>
        </div>
        <div class="row negative-margin">
                <div class="col-xs-5"></div>
                <div class="col-xs-7" style="text-align:center;">
                    <q-img
                        src="../assets/img/lady_justice_1.png"
                        fit="contain"
                        spinner-color="black"
                        spinner-size="3rem"
                        loading="lazy"
                        :ratio="3/5"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
    import { defineComponent, ref } from 'vue'
    import { useQuasar } from 'quasar';
    
    export default defineComponent({
        name: 'MainTitle',
        
        components: {
        
        },
    
        setup () {
            const $q = useQuasar()
            $q.screen.setSizes({ sm: 600, md: 1024, lg: 1440, xl: 1920 })
            return {
                slide: ref('first')
            }
        }
    })
</script>
<style scoped>
.main-card{
    padding-top: 6.25rem;
}
.main-title{
    font-family: 'Merriweather', serif;
    padding-left: 1.25rem;
    font-size: 1.625rem;
    font-weight: 700;
    color: #433f3f;
    line-height: normal;
}
.p-text{
    margin-bottom: 1rem;
    font-family: 'Merriweather Sans', sans-serif;
    padding-left: 1.25rem;
    font-size: .875rem;
    color: #433f3f;
}
.negative-margin{
    margin-top: -2.5rem;
}
/* Diseño web */
.space{
    height: 120px;
    width: 100%;
}
.main-text{
    align-self: center;
    padding: 0rem;
}
.main-img{
    max-height: 90vh;
    width: 70%;
}
.first-text{
    padding-left: 7.5rem;
    margin-top: .5rem;
    margin-bottom: .5rem;
    color: #000000;
    font-family: 'Merriweather', serif;
    font-size: 2.75rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
}
.second-text{
    padding-left: 7.5rem;
    color: #433f3f;
    font-family: 'Merriweather Sans', sans-serif;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.4375rem;
}
@media (min-width: 60rem) and (max-width: 79rem) {
    .first-text{
        padding-left: 3.75rem;
    }
    .second-text{
        padding-left: 3.75rem;
    }
}
</style>