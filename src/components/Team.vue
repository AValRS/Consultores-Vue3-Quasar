<template>
    <div id="team" class="team-card">
        <h2 class="team-title">Equipo</h2>
        <div class="row">
            <div class="row">
                <div class="team-description col-xs-12 col-sm-6 col-md-4">
                    Un despacho enfocado en garantizar la protección 
                    patrimonial de nuestros clientes a través de servicios 
                    de planeación patrimonial, más de 15 años de experiencia 
                    nos respaldan. 
                </div>
            </div>
            <div v-if="$q.screen.lt.sm" class="q-pa-md">
                <q-list>
                    <q-item v-for="member in team" :key="member.id">
                        <q-item-section avatar>
                            <q-avatar size="100px" class="member-pic">
                                <img
                                    :src="member.picture"
                                    spinner-color="black"
                                    spinner-size="3rem"
                                    style="max-width: 6.25rem"
                                />
                            </q-avatar>
                        </q-item-section>
                        <q-item-section class="member-info">
                            <q-item-label class="member-name">{{ member.name }}</q-item-label>
                            <q-item-label class="member-description">{{ member.description }}</q-item-label>
                        </q-item-section>
                    </q-item>
                </q-list>
            </div>
            <div v-if="$q.screen.gt.xs" class="row q-mt-lg">
                <div v-for="member in team" :key="member.id" class="col-sm-6 col-md-4 col-lg-3">
                    <q-card class="member-card" flat>
                        <img :src="member.picture" style="padding:1rem">
                        <q-card-section class="member-name-sm-up">
                            <div>
                                {{member.name}}
                            </div>
                        </q-card-section>
                        <q-card-section class="member-description-sm-up">
                            <div>
                                {{member.description}}
                            </div>
                        </q-card-section>
                    </q-card>
                </div>


            </div>
        </div>
    </div>
</template>
  
<script>
    import { defineComponent, ref } from 'vue'
    import { useQuasar } from 'quasar'

    export default defineComponent({
        name: 'Team',
    
        setup () {
            const $q = useQuasar()
            $q.screen.setSizes({ sm: 600, md: 1024, lg: 1440, xl: 1920 })
            let team = [
                {
                    id: 0,
                    name: 'Wade Warren', 
                    description: 'Tempor nostrud sunt Lorem laborum adipisicing.',
                    picture: 'https://randomuser.me/api/portraits/men/76.jpg'
                },
                {
                    id: 1,
                    name: 'Cameron Williamson', 
                    description: 'Tempor nostrud sunt Lorem laborum adipisicing.',
                    picture: 'https://randomuser.me/api/portraits/women/14.jpg'
                },
                {
                    id: 2,
                    name: 'Jacob Jones', 
                    description: 'Tempor nostrud sunt Lorem laborum adipisicing.',
                    picture: 'https://randomuser.me/api/portraits/men/71.jpg'
                },
                {
                    id: 3,
                    name: 'Darrell Steward', 
                    description: 'Tempor nostrud sunt Lorem laborum adipisicing.',
                    picture: 'https://randomuser.me/api/portraits/men/88.jpg'
                },
                {
                    id: 4,
                    name: 'Jessie Campbell', 
                    description: 'Tempor nostrud sunt Lorem laborum adipisicing.',
                    picture: 'https://randomuser.me/api/portraits/women/20.jpg'
                },
                {
                    id: 5,
                    name: 'Alan Gibson', 
                    description: 'Tempor nostrud sunt Lorem laborum adipisicing.',
                    picture: 'https://randomuser.me/api/portraits/men/20.jpg'
                },
                {
                    id: 6,
                    name: 'Carmen Mcdonalid', 
                    description: 'Tempor nostrud sunt Lorem laborum adipisicing.',
                    picture: 'https://randomuser.me/api/portraits/women/90.jpg'
                }
            ]
            return {
                team
            }
        }
    })
</script>
<style scoped>
.team-card{
    margin-top: 5.625rem;
    margin-left: 6.25rem;
    margin-right: 6.25rem;
}
.team-title{
    text-align: center;
    color: #433f3f;
    font-family: 'Merriweather', serif;
    font-size: 2.375rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.0625rem;
    text-align: left;
}
.team-description{
    color: #433f3f;
    font-family: 'Merriweather Sans', sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
}
.member-pic{
    border-radius: .5rem
}
.member-info{
    justify-content: end;
    margin-left: 0rem;
}
.member-name{
    color: #433f3f;
    font-family: 'Merriweather Sans', sans-serif;
    font-style: normal;
    font-size: 1rem;
    font-weight: 400;
}
.member-description{
    color: #624b4b;
    font-family: 'Merriweather', serif;
    font-size: .75rem;
    font-style: italic;
    font-weight: 400;
}
/* Diseño web */
.member-card{
    padding: 1rem;
}
.member-name-sm-up{
    color: #433f3f;
    font-family: 'Merriweather Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.4375rem;
}
.member-description-sm-up{
    color: #624b4b;
    font-family: 'Merriweather', serif;
    font-size: .875rem;
    font-style: italic;
    font-weight: 400;
    line-height: 1.125rem;
    width: 17.8125rem;
    padding-top: 0rem;
}
@media (max-width: 37.5rem) {
    .team-card{
        margin-top: 1.25rem;
        margin-left: 1.25rem;
        margin-right: 1.25rem;
    }
    .team-title{
        margin-top: 3.125rem;
        margin-bottom: 1.375rem;
        font-size: 1.625rem;
        text-align: center;
    }
}
@media (min-width: 37.5rem) and (max-width: 60rem) {
    .team-card{
        margin-top: 3.125rem;
        margin-left: 1.875rem;
        margin-right: 1.875rem;
    }
}
@media (min-width: 60rem) and (max-width: 79rem) {
    .team-card{
        margin-top: 3.75rem;
        margin-left: 3.75rem;
        margin-right: 3.75rem;
    }
}
</style>