<template>
    <q-page>
        <BlogTopics/>
    </q-page>
</template>
  
<script>
    import { defineComponent } from 'vue'
    import BlogTopics from 'src/components/BlogTopics.vue';

    export default defineComponent({
        name: 'Blog',
        components:{
            BlogTopics
        }
    })
</script>
<style scoped>
</style>