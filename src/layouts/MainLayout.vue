<template>
    <q-layout view="lHh Lpr lFf">
        <q-header class="bg-white">
            <Header/>
        </q-header>
        
        <q-page-container>
            <router-view />
        </q-page-container>
        
        <Footer/>
    </q-layout>
  </template>
  
  <script>
    import { defineComponent, ref } from 'vue'
    import Header from '../components/Header.vue'
    import Footer from '../components/Footer.vue'

    export default defineComponent({
        name: 'MainLayout',
      
        components: {
          Header,
          Footer,
        },
      
        setup () {
            return {
                
            }
        }
    })
  </script>
<style scoped>
.btn-to-top-color{
    background-color: #433f3f;
    color: #f4d3c5;
}
</style>