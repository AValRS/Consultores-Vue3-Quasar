<template>
    <div class="">
        <div class="background">
            <div class="separator"></div>
            <div class="background-text" data-aos="fade-up" data-aos-duration="800">
                "Nuestro propósito es <strong>proteger y defender</strong> tu patrimonio y el de tu empresa".
            </div>
            <div class="separator"></div>
            </div>
        </div>
</template>
  
<script>
    import { defineComponent, ref } from 'vue'

    export default defineComponent({
        name: 'Phrase',
    
        setup () {
            return {
                
            }
        }
    })
</script>
<style scoped>
.background{
    background-color: initial;
    background-image: url("../assets/img/background-img.png");
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    height: 520px;
    padding-top: 120px;
}

.background-text{
    text-align: center;
    color: #433f3f;
    font-family: 'Merriweather', serif;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 400;
    margin-top: 4.375rem;
    margin-bottom: 4.375rem;
    margin-right: 1.25rem;
    margin-left: 1.25rem;
}
.separator{
    height: 1px;
    background-color:#b08877;
    margin-left: 6.25rem;
    margin-right: 6.25rem;
}
@media (max-width: 37.5rem) {
    .background{
        background-image: none;
        padding-top: 0rem;
        height: 280px;
    }
    .separator{
        margin-left: .625rem;
        margin-right: .625rem;
    }
    .background-text{
      font-size: 1rem;
    }
}
@media (min-width: 37.5rem) and (max-width: 60rem) {
    .separator{
        margin-left: 1.875rem;
        margin-right: 1.875rem;
    }
    .background-text{
        margin-right: 6.25rem;
        margin-left: 6.25rem;
    }
}
@media (min-width: 60rem) and (max-width: 79rem) {
    .separator{
        margin-left: 3.75rem;
        margin-right: 3.75rem;
    }
    .background-text{
        margin-right: 6.25rem;
        margin-left: 6.25rem;
    }
}
@media (min-width: 79rem) and (max-width: 119rem) {
    .separator{
        margin-left: 5.625rem;
        margin-right: 5.625rem;
    }
    .background-text{
        margin-right: 17.5rem;
        margin-left: 17.5rem;
    }
}
</style>