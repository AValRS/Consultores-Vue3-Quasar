<template>
    <div>
        <q-btn flat no-caps label="Leer más" color="brown-8" icon-right="arrow_right_alt" @click="state=true"/> 
        <q-dialog v-model="state">
            <q-card class="service-card">
                <q-scroll-area
                    class="card-scroll-area"
                >
                    <q-img 
                        :src="getImageUrl(service.img)"
                        class="card-img"
                        fit="cover"
                    >
                        <div class="absolute-full flex background-img">
                            <q-card-section class="row items-center q-pa-none justify-end">
                                <q-btn icon="close" flat round @click="state = false" color="white"/>
                            </q-card-section>
                            <q-card-section class="card-content">
                                <div class="service-title">
                                    {{ service.title }}
                                </div>
                                <div class="separator-img"></div>
                            </q-card-section>
                        </div>
                    </q-img>

                    <q-card-section class="service-text">
                        <p>
                            {{ service.description }}
                        </p>
                        <li class="card-list" v-for="element in service.list">
                            {{ element }}
                        </li>
                        <div class="card-separator"></div>
                    </q-card-section>
                </q-scroll-area>
                
            </q-card>
        </q-dialog>
    </div>
</template>
<script>
import { defineComponent, ref, computed, onMounted} from 'vue'
           
export default defineComponent({
    name: 'ServiceDialog',
    props: {
        service:{
            type: Object,
            default: {}
        },
    },
    setup(props, context){
        const service = props.service
        const getImageUrl = (name) => {
            return new URL(`../assets/img/servicios/${name}`, import.meta.url).href
        }
        return{
            state: ref(false), service, getImageUrl
        }
    }
    
})
</script>
<style scoped>
.service-card{
    max-height: 43.75rem;
    max-width: 43.75rem;
}
.card-img{
    height: 13.75rem; 
    width: 43.75rem;
}
.card-scroll-area{
    height: 31.25rem; 
    width: 43.75rem;
}
.background-img{
    padding: 0rem;
    flex-direction: column;
}
.separator-img{
    margin-top: 1.5rem;
    height: .0625rem;
    width: 5rem;
    background-color:#ffffff;
}
.card-content{
    padding: 0rem;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.service-title{
    font-family: 'Merriweather', serif;
    font-size: 3rem;
    font-style: normal;
    font-weight: 700;
    line-height: 60px;
    text-align: center;
}
.service-text{
    padding: 0rem;
    margin-top: 1.25rem;
    margin-left: 6.25rem;
    margin-right: 6.25rem;
    color: #433f3f;
    font-family: 'Merriweather Sans', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
}
.card-list{
    font-weight: 700;
    line-height: 23px;
    list-style-type: none;
}
.card-separator{
    margin-top: 3.125rem;
    margin-bottom: 3.125rem;
    height: .0625rem;
    background-color:#f4d3c5;
}
@media (min-width: 37.5rem) and (max-width: 60rem) {
    .service-text{
        margin-top: .625rem;
        margin-left: 1.875rem;
        margin-right: 1.875rem;
    }
    .card-img{
        height: 13.75rem; 
        width: 37.5rem;
    }
    .card-scroll-area{
        height: 31.25rem; 
        width: 25rem;
    }
}
@media (min-width: 60rem) and (max-width: 79rem) {
    .service-text{
        margin-top: 1.25rem;
        margin-left: 3.75rem;
        margin-right: 3.75rem;
    }
    .card-img{
        height: 13.75rem; 
        width: 37.5rem;
    }
    .card-scroll-area{
        height: 31.25rem; 
        width: 37.5rem;
    }
}
</style>