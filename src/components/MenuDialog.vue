<template>
    <div>
        <q-btn flat round dense icon="menu" @click="menu = true"/>
        <q-dialog v-model="menu">
            <q-card class="q-px-md menu-card" style="width: 95%; max-width: 31.25rem;">
                <q-card-section class="menu-section">
                    <div style="height:3.75rem"></div>
                    <q-list class="menu-btns">
                        <q-item v-if="$route.name === 'Index'" class="menu-dialog-btns" clickable href="#mision-vision">
                            <q-item-label class="menu-btn">Acerca de</q-item-label> 
                        </q-item>
                        <q-item v-if="$route.name === 'Index'" class="menu-dialog-btns" clickable href="#services">
                            <q-item-label class="menu-btn">Servicios</q-item-label>
                        </q-item>
                        <q-item v-if="$route.name === 'Index'" class="menu-dialog-btns" clickable href="#team">
                            <q-item-label class="menu-btn">Equipo</q-item-label>
                        </q-item>
                        <q-item v-if="$route.name === 'Index' || $route.name === 'Blog'" class="menu-dialog-btns" clickable href="/blog">
                            <q-item-label class="menu-btn">Blog</q-item-label>
                        </q-item>
                    </q-list>
                    <div style="height:9.375rem"></div>
                    <FormDialog/>
                    <div style="height:1.6875rem"></div>
                </q-card-section>
            </q-card>
        </q-dialog>
    </div>
</template>
  
<script>
    import { defineComponent, ref } from 'vue'
    import { useRouter, useRoute } from 'vue-router'

    import FormDialog from '../components/FormDialog.vue';
    

    export default defineComponent({
        name: 'MenuDialog',
        components:{
            FormDialog
        },
        setup () {
            const router = useRouter()
            const route = useRoute()
            return {
                menu: ref(false),
            }
        }
    })
</script>
<style scoped>
.menu-card{
    border-radius: .5rem;
}
.menu-section{
    padding: 0rem;
}
.menu-dialog-btns{
    padding-bottom: 0.625rem;
    padding-top: 0.625rem;
    color: #828282;
    font-family: 'Merriweather Sans', sans-serif;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    justify-content: center;
    text-align: left;  
}
.menu-btn{
    width: 7.5rem;
    padding-top: .625rem;
    padding-bottom: .625rem;
}
.menu-btn:hover{
    color: #333;
    transition: 0.3s;
}
</style>
