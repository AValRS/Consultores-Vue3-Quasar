<template>
    <q-page>
        <q-page-container>
            <MainTitle/>
            <MisionVision/>
            <Phrase/>
            <Values/>
            <Services/>
            <Team/>
        </q-page-container>
        <q-page-scroller class="btn-to-top" position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
            <q-btn round class="btn-to-top-color">
                <q-icon name="las la-angle-up" size="xs"></q-icon>
            </q-btn>
        </q-page-scroller>
    </q-page>
</template>

<script>
    import { defineComponent } from 'vue'
    import MainTitle from '../components/MainTitle.vue'
    import MisionVision from '../components/MisionVision.vue'
    import Phrase from '../components/Phrase.vue'
    import Values from '../components/Values.vue'
    import Services from '../components/Services.vue'
    import Team from '../components/Team.vue'

    export default defineComponent({
        name: 'IndexPage',
        components:{
            MainTitle,
            MisionVision,
            Phrase,
            Values,
            Services,
            Team,
        }
    })
</script>
