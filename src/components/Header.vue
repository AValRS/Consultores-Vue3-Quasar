<template>
    <q-toolbar class="q-mt-sm q-px-xl text-brown-6" :style="justify()">
        <MenuDialog v-if="$q.screen.lt.md"/>
        <a class="logo" href="/">
            <q-img
                src="../assets/img/logo-romero.png"
                fit="contain"
                spinner-color="black"
                spinner-size="3rem"
            />
        </a>
        <div class="space lt-md"></div>
        <div v-if="$route.name === 'Index'" class="menu-btns gt-sm">
            <a class="menu-btn my-auto" href="#mision-vision">Acerca de</a>
            <a class="menu-btn" href="#services">Servicios</a>
            <a class="menu-btn" href="#team">Equipo</a>
            <a class="menu-btn" href="/blog">Blog</a>  
        </div>
        <div v-if="$route.name === 'Blog'" class="menu-btns gt-sm">
            <a class="menu-btn my-auto" href="#mision-vision">Blog</a>
            <a class="menu-btn" href="/">Categorías</a>  
        </div>
        <FormDialog v-if="$q.screen.gt.sm && $route.name === 'Index'"/>
        </q-toolbar>

</template>
  
<script>
    import { defineComponent, ref } from 'vue'
    import { useQuasar } from 'quasar';
    import { useRouter, useRoute } from 'vue-router'

    import MenuDialog from '../components/MenuDialog.vue';
    import FormDialog from '../components/FormDialog.vue';

    export default defineComponent({
        name: 'Header',
    
        components: {
            MenuDialog,
            FormDialog
        },
    
        setup () {
            const $q = useQuasar()
            $q.screen.setSizes({ sm: 600, md: 1024, lg: 1440, xl: 1920 })
            const router = useRouter()
            const route = useRoute()
            const justify = () =>{
                if(route.name === 'Index' || $q.screen.lt.md){
                    return "justify-content: space-between;"
                }
                else if(route.name === 'Blog'){
                    return "justify-content: left;"
                }
            }
            return {
                justify
            }
        }
    })
</script>
<style scoped>
.logo{
    width: 7.625rem;
    height: 4.5rem;
    padding-left: .625rem;
}
.space{
    width: 2.0625rem;
    height: 2.0625rem;
}
.menu-btn{
    padding-left: 1rem;
    padding-right: 1rem;
    color: #433f3f;
    text-decoration: none;
    font-size: 1.125rem;
    font-family: 'Merriweather Sans', sans-serif;
    text-align: center;
}
.menu-btn:hover{
    color: #b08877
}

</style>