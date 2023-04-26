<template>
    <div class="blog-card">
        <h2 class="blog-title">Noticia y cultura empresarial</h2>
        <div class="row">
            <div class="col col-xs-12 col-md-6 q-pa-sm">
                <q-img
                    src="../assets/img/about-plan.jpg"
                    spinner-color="black"
                    spinner-size="3rem"
                />
                <div>
                    <p class="posted-by">
                        PUBLICADO POR
                        <br>
                        LUIS VALENCIA - 9 FEB 2023
                    </p>
                </div>
            </div>
            <div class="col col-xs-12 col-md-6 q-pa-sm">
                <div class="new-topic">
                    TEMA NUEVO
                </div>
                <div class="new-topic-title">
                    Acciones preventivas y resolutivas
                </div>
                <div class="new-topic-description">
                    Consistente en la asesoría respecto 
                    de las obligaciones que tienen patrones 
                    y trabajadores para cumplir con la Ley 
                    y que se refieren a elaboración de Contratos, 
                    recibos, documentos que están obligados a 
                    llevar las Empresas, respecto de sus trabajadores. 
                </div>
                <span class="read-more">
                    Leer más >
                </span>
            </div>
        </div>
        <div>
            <div class="new-topic">TEMA NUEVO</div>
            <div class="other-topics">
                Otros temas de interés
            </div>
            <div class="row">
                <div v-for="n in 3" :key="n" class="col col-xs-12 col-sm-6 col-md-4 q-pa-lg">
                    <div class="col-12">
                        <q-img
                            src="../assets/img/about-mission.jpeg"
                            spinner-color="black"
                            spinner-size="3rem"
                        />
                    </div>
                    <div class="col-12 other-topic-category">
                        Categoría {{ n }}
                    </div>
                    <div class="col-12 other-topic-title">
                        Título {{ n }}
                    </div>
                    <div class="col-12 other-topic-description">
                        Amet minim mollit non deserunt ullamco 
                        est sit aliqua dolor do amet sint. 
                        Velit officia consequat duis enim velit mollit. 
                        Exercitation veniam consequat sunt nostrud amet.
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="separator"></div>
            </div>
            <div class="row">
                <div v-for="element in pictures" :key="element.id" class="col col-xs-12 col-sm-6 col-md-6 q-pa-lg">
                    <div class="row">
                        <div class="col-6 text-center">
                            <q-img
                                :src="getImageUrl(element.img)"
                                spinner-color="black"
                                spinner-size="3rem"
                                fit="contain"
                                loading="lazy"
                            />
                        </div>
                        <div class="col-6">
                            <h6 class="other-topic-category q-ma-none">
                                Categoría {{element.id}}
                            </h6>
                            <h5 class="other-topic-title q-ma-none">
                                Título {{ element.id }}
                            </h5>
                            <p>
                                Amet minim mollit non deserunt ullamco 
                                est sit aliqua dolor do amet sint.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'BlogTopics',
        setup(){
            const getImageUrl = (name) => {
                return new URL(`../assets/img/servicios/${name}`, import.meta.url).href
            }
            const pictures = [
                {id: 0, img: '3.png'},
                {id: 1, img: '1.png'},
                {id: 2, img: '05.png'},
                {id: 3, img: '2.png'}
            ]
            return{
                pictures, getImageUrl
            }
        }
    })
</script>
<style scoped>
.blog-card{
    margin-top: 5.625rem;
    margin-left: 6.25rem;
    margin-right: 6.25rem;
}
.blog-title{
    color: #926f60;
    font-family: 'Merriweather', serif;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140.62%;
    text-align: center;
}
.posted-by{
    margin: 1rem 0rem 1rem 0rem;
    color: #bdbdbd;
    font-family: 'Merriweather Sans', sans-serif;
    font-size: .875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.125rem;
}
.new-topic{
    color: #d2ad9e;
    font-family: 'Merriweather Sans', sans-serif;
    font-size: .875rem;
    font-style: normal;
    font-weight: 800;
    letter-spacing: .025rem;
    line-height: 1.125rem;
}
.new-topic-title{
    color: #433f3f;
    font-family: 'Merriweather', serif;
    font-size: 2.75rem;
    font-style: normal;
    font-weight: 700;
    letter-spacing: .0125rem;
    line-height: 3.5rem;
}
.new-topic-description{
    color: #737b7d;
    font-family: 'Merriweather Sans', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: .0187rem;
    line-height: 1.375rem;
}
.read-more{
    color: #ca703d;
    font-family: 'Merriweather Sans', sans-serif;
    font-size: .875rem;
    font-style: normal;
}
.other-topics{
    color: #433f3f;
    font-family: 'Merriweather', serif;
    font-size: 2.75rem;
    font-style: normal;
    font-weight: 700;
    letter-spacing: .0125rem;
    line-height: 3.5rem;
}
.other-topic-category{
    color: #ca703d;
    font-family: 'Merriweather', serif;
    font-size: .75rem;
    font-style: normal;
    font-weight: 400;
    letter-spacing: .005em;
    line-height: 140%;
}
.other-topic-title{
    color: #333;
    font-family: 'Merriweather Sans', sans-serif;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
}
.other-topic-description{
    color: #333;
    font-family: 'Merriweather Sans', sans-serif;
    font-size: .875rem;
    letter-spacing: .015em;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
}
.separator{
    margin: .5rem 0rem .5rem 0rem;
    height: 1px;
    width: 100%;
    background-color:#b1c4d3;
}
@media (max-width: 37.5rem) {
    .blog-card{
        margin-top: 0rem;
        margin-left: 0rem;
        margin-right: 0rem;
    }
}
@media (min-width: 37.5rem) and (max-width: 60rem) {

    .blog-card{
        margin-top: 3.125rem;
        margin-left: 1.875rem;
        margin-right: 1.875rem;
    }
}
@media (min-width: 60rem) and (max-width: 79rem) {
    .blog-card{
        margin-top: 3.75rem;
        margin-left: 3.75rem;
        margin-right: 3.75rem;
    }
}
</style>