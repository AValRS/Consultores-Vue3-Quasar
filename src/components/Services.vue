<template>
    <div id="services">
        <div class="separator"></div>
        <div v-if="$q.screen.lt.sm">
            <h3 class="services-title">Servicios</h3>
            <div class="row">
                <div class="service-col col-lg-4 col-md-6 col-xs-12 box q-mb-md">
                    <q-expansion-item 
                        class="service-title"
                        v-for="service in services" 
                        :key="service.id"
                        :label="service.title"
                        header-class="text-grey-10"
                        data-aos="fade-up"
                        data-aos-duration="400"
                    >
                        <q-card class="q-px-md q-ml-xs">
                            <q-card-section class="service-text">
                                <p v-if="service.description !== ''"> 
                                    {{ service.description }}
                                </p>
                                <li v-for="element in service.list" style="list-style:none;">
                                {{ element }}
                                </li>
                            </q-card-section>
                        </q-card>
                    </q-expansion-item>
                </div>
            </div>
        </div>
        <div v-if="$q.screen.gt.xs" class="services-card" data-aos="fade-up" data-aos-duration="800">
            <h3 class="services-title">Servicios</h3>
            <div class="row">
                <div v-for="service in services" :key="service.id" class="service-card col col-sm-6 col-md-4 q-pa-lg">
                    <q-img 
                        :src="getImageUrl(service.img)"
                        spinner-color="black"
                        spinner-size="3rem"
                    />
                    <h3 class="service-title-sm-up">{{ service.title }}</h3>
                    <div class="ellipsis-3-lines">
                        <p class="service-description-sm-up">
                            {{ service.description }}
                        </p>
                        <li class="service-list-sm-up" v-for="element in service.list">
                            {{ element }}
                        </li>
                    </div>
                    <q-card-actions>
                        <ServiceDialog v-if="service.description !== ''" :service="service" :state="serviceDialog"/>               
                    </q-card-actions>
                </div>                
            </div>
        </div>
        <div class="separator"></div>
    </div>
</template>
  
<script>
    import { defineComponent, ref } from 'vue'           
    import { useQuasar } from 'quasar' 
    import ServiceDialog from '../components/ServiceDialog.vue'

    export default defineComponent({
        name: 'Services',
    
        components: {
            ServiceDialog
        },
        setup () {
            const $q = useQuasar()
            $q.screen.setSizes({ sm: 600, md: 1024, lg: 1440, xl: 1920 })

            const getImageUrl = (name) => {
                return new URL(`../assets/img/servicios/${name}`, import.meta.url).href
            }

            let services = [
                {   
                    id: 0,
                    title: 'Auditoría',
                    description: 'Garantizamos la tranquilidad de nuestros clientes al llevar a cabo análisis exhaustivos sobre el área que consideren necesario revisar; confirmando su correcto desempeño o guiándoles en los ajustes necesarios a realizar para el correcto cumplimiento de las normativas vigentes.',
                    list: [
                        'Estado financiero.',
                        'Dictamen fiscal.', 
                        'Control interno.',
                        'Auditoría gubernamental.',
                        'Dictamen seguridad social.'
                    ],
                    img: '01.png'
                },
                {   
                    id: 1,
                    title: 'Consultoría',
                    description: 'Prestamos un servicio oportuno, de alta calidad profecional y técnica, que ayuda a nuestros clientes a una toma de decisiones eficientes en todo lo relativo al cumplimiento de sus obligaciones fiscales.',
                    list: [
                        'Legal.',
                        'Impuestos.', 
                    ],
                    img: '02.png'
                },
                {   
                    id: 2,
                    title: 'Estrategia y transacciones patrimoniales',
                    description: '',
                    list: [
                            'Reestructuras corporativas.',
                            'Fusiones y escisiones.',
                            'Fideicomisos.'
                    ],
                    img: '03.png'
                },
                {   
                    id: 3,
                    title: 'Contabilidad e impuestos',
                    description: '',
                    list: [
                        'Supervisión contable y sobre cumplimiento de obligaciones fiscales.',
                        'Contabilidad personas físicas y morales.'
                    ],
                    img: '04.png'
                },
                {   
                    id: 4,
                    title: 'Defensa fiscal y administrativa',
                    description: 'Brindamos una adecuada y completa defensa en contra de las resoluciones y actos de las autoridades fiscales, con la finalidad de proteger los derechos fundamentales de los contribuyentes.',
                    list: [
                        'Defensa fiscal de créditos fiscales.',
                        'Defensa contra multas o resoluciones emitidas por autoridades administrativas.',
                        'Atención de auditorías, inspecciones o revisiones.',
                        'Interposición de amparo en contra de normas generales.',
                        'Atención de revisiones electrónicas.',
                        'Reactivación de sellos digitales.',
                        'Revisión, atención y defensa en contra de la aplicación del artículo 69-B del Código Fiscal de la Federación.'
                    ],
                    img: '05.png'
                },
                {   
                    id: 5,
                    title: 'Derecho laboral',
                    description: 'Protegemos a nuestros clientes en un entorno laboral complejo, asegurándonos de que disponen de las mejores herramientas para gestión de equipos y de las estrategias fiscales adecuadas para minimizar las cargas finacieras en caso de que se presente alguna contigencia con los trabajadores.',
                    list: [
                        'Atención a demandas laborales.',
                        'Celebración de convenios por terminación laboral y ratificaciones.',
                        'Contratos laborales.'
                    ],
                    img: '06.png'
                },
                {   
                    id: 6,
                    title: 'Derecho notarial y societario',
                    description: '',
                    list: [
                        'Constitución de empresas.',
                        'Actas de asambleas.',
                        'Contratos mercantiles.'
                    ],
                    img: '07.png'
                },
                {   
                    id: 7,
                    title: 'Derecho migratorio',
                    description: 'Facilitamos la integración legal de los trabajadores o inversionistas extranjeros en México favoreciendo su estabilidad y la protección legal para sus empleados.',
                    list: [
                        'Constancia de empleador para emitir ofertas de empleo a extranjeros.',
                        'Visas de trabajo.',
                        'Residencias y ciudadanía.',
                        'Litigio migratorio.',
                        'Apostillas, legalizaciones y traducciones (Inglés y francés).'
                    ],
                    img: '08.png'
                },
            ]
            return {
                services, getImageUrl,
                serviceDialog: ref(false)
            }
        }
    })
</script>
<style scoped>
.separator{
    height: 1px;
    background-color:#b08877;
    margin-left: 6.25rem;
    margin-right: 6.25rem;
}
.services-title{
    margin-top: 0rem;
    margin-bottom: 0rem;
    color: #433f3f;
    font-family: 'Merriweather', serif;
    font-size: 38px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px;
    text-align: center;
}
.service-title{
    padding-left: 1rem;
    padding-right: 1rem;
    font-family: 'Merriweather',serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.25rem;
    margin-bottom: 1rem;
}
.service-text{
    text-align: justify;
    color: #433f3f;
    font-family: 'Merriweather Sans', sans-serif;
    font-size: .75rem;
    font-style: normal;
    font-weight: 400;
    line-height: .9375rem;
}
.services-card{
    margin-top: 5.625rem;
    margin-left: 6.25rem;
    margin-right: 6.25rem;
}
/* Diseño web */
.service-title-sm-up{
    margin-top: 1.375rem;
    margin-bottom: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    color: #1c1a17;
    font-family: 'Merriweather', serif;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5625rem;
}
.service-description-sm-up{
    margin-top: .625rem;
    margin-bottom: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    color: #433f3f;
    font-family: 'Merriweather', serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
}   
.service-list-sm-up{
    margin-left: 1rem;
    margin-right: 1rem;
    list-style: none;
    color: #433f3f;
    font-family: 'Merriweather Sans', sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
}
.service-card:hover{
    box-shadow: 0px 1px 3px 0px rgba(196, 195, 195, 0.6)
}
@media (max-width: 37.5rem) {
    .separator{
        margin-left: 1rem;
        margin-right: 1rem;
    }
    .services-title{
        text-align: center;
        margin-top: 3rem;
        margin-bottom: 3rem;
        color: #433f3f;
        font-family: 'Merriweather', serif;
        font-size: 3rem;
        font-weight: 400;
    }
}
@media (min-width: 37.5rem) and (max-width: 60rem) {
    .separator{
        margin-left: 1.875rem;
        margin-right: 1.875rem;
    }
    .services-card{
        margin-top: 3.125rem;
        margin-left: 1.875rem;
        margin-right: 1.875rem;
    }
}
@media (min-width: 60rem) and (max-width: 79rem) {
    .separator{
        margin-left: 3.75rem;
        margin-right: 3.75rem;
    }
    .services-card{
        margin-top: 3.75rem;
        margin-left: 3.75rem;
        margin-right: 3.75rem;
    }
}
</style>