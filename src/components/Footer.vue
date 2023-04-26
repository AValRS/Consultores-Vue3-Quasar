<template>
    <div class="footer" data-aos="fade-up" data-aos-duration="800">
        <div class="footer-margins">
            <div class="row">
                <div class="col col-xs-12 q-pa-lg text-center lt-sm">
                    <q-img
                        width="110px"
                        height="50px"
                        fit="contain"
                        src="../assets/img/img-footer.png"
                        spinner-color="primary"
                        spinner-size="82px"
                    />
                </div>
                <div class="col col-xs-12 col-sm-6 col-md-6 q-pa-lg gt-xs">
                    <div class="col-12 q-mb-lg">
                        <q-img
                            width="110px"
                            height="50px"
                            fit="contain"
                            src="../assets/img/img-footer.png"
                            spinner-color="primary"
                            spinner-size="82px"
                        />
                    </div>
                    <div class="footer-description col-12 ">
                        Somos un despacho enfocado en garantizar la protección 
                        patrimonial de nuestros clientes a través de servicios 
                        de planeación patrimonial, más de 15 años de experiencia 
                        nos respaldan.
                    </div>
                </div>
                <div class="col col-xs-12 col-sm-6 col-md-6 q-pa-lg">
                    <div class="contact-title col-12 q-mb-lg">
                        Contacto
                    </div>
                    <div class="contact-info col-12 responsive-footer-text-contacto">
                        <p>Calle 35 No. 356 entre 28 y 30 Col. Emiliano Zapata norte.</p>
                        <p>Mérida Yucatán, C.P. 97129</p>
                        <p>9997576194</p>
                        <p>info@eromeroconsultores.com.mx</p>
                    </div>
                </div>
                <div class="col-12 q-py-xs q-my-xs">
                    <div class="separator"></div>
                </div>
                <div class="footer-bottom-text col col-xs-12 col-sm-6 col-md-4 q-pa-lg text-center">
                    Copyright © 2022 Romero Consultores. Todos los derechos reservados 
                </div>
                <div class="terms col col-xs-12 col-sm-6 col-md-4 q-pa-lg text-center">
                    <div class="row">
                        <div class="footer-bottom-text col col-xs-6 col-sm-6">Aviso de privacidad</div>
                        <div class="footer-bottom-text col col-xs-6 col-sm-6">Información legal</div>
                    </div>
                </div>
                <div class="footer-icons col col-xs-12 col-md-4 q-py-lg text-center">
                    <div class="icons q-mr-md">
                        <q-icon class="lab la-linkedin-in" color="white"></q-icon>
                    </div>
                    <div class="icons">
                        <q-icon class="lab la-instagram" color="white"></q-icon>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
    import { defineComponent, ref } from 'vue'  

    export default defineComponent({
        name: 'Footer',
        components: {
        },
        setup () {

            return {
            }
        }
    })

</script>
<style scoped>
.footer{
    background-color: #211f1f;
}
.footer-margins{
    margin-left: 6.25rem;
    margin-right: 6.25rem;
    margin-top: 5.625rem;
}
.separator{
    height: 1px;
    background-color:#b08877;
}
.contact-title{
    color: #b08877;
    font-family: 'Merriweather', serif;
    font-size: .875rem;
    font-weight: 700;
    text-align: left;
}
.contact-info{
    color: #d2ad9e;
    margin-bottom: 1rem;
    font-family: 'Merriweather', serif;
    font-size: 1rem;
    font-weight: 300;
    text-align: left;
    line-height: 1.25rem;
}
.footer-bottom-text{
    color: #b08877;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: 140.62%;
    text-align: left;
}
.footer-description{
    color: #d2ad9e;
    font-family: 'Merriweather Sans', sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 300;
}
.terms{
    align-self: center;
}
.footer-icons{
    display: flex;
    justify-content: flex-end;
}
.icons{
    width: 2.5rem;
    height: 2.5rem;
    font-size:2rem
}
@media (max-width: 37.5rem) {
    .separator{
        margin-left: 1rem;
        margin-right: 1rem;
    }
    .footer-margins{
        margin-left: 0rem;
        margin-right: 0rem;
        margin-top: 0rem;
    }
    .contact-title{
        font-size: 1rem;
        text-align: center;
    }
    .contact-info{
        font-size: .625rem;
        text-align: center;
        font-weight: 400;
        line-height: .8125rem;
    }
    .footer-bottom-text{
        font-size: .5625rem;
        line-height: .75rem;
        text-align: center;
    }
    .footer-icons{
        justify-content: center;
    }
}
@media (min-width: 37.5rem) and (max-width: 60rem) {
    .footer-margins{
        margin-left: 1.875rem;
        margin-right: 1.875rem;
        margin-top: 3.125rem;
    }
    .footer-icons{
        justify-content: center;
    }
}
@media (min-width: 60rem) and (max-width: 79rem) {
    .footer-margins{
        margin-left: 3.75rem;
        margin-right: 3.75rem;
        margin-top: 5.625rem;
    }
}
</style>