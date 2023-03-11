<template>
    <div>
        <v-btn v-for="(ruta, i) in rutas" :key="i"
        @click="InsertarRuta(ruta.ruta)" color="success">
            <span>{{ ruta.name }}</span>
        </v-btn>
    </div>
</template>


<script>
export default {
        name: 'BotNav',
        data: ()=>({
            rutas: [
                {name: 'home', ruta:'/'},
                {name: 'about', ruta:'/about'},
                {name: 'help', ruta:'/help'},
                {name: 'project', ruta:'/project'},
                {name: 'consul', ruta:'/consul'}
            ]
        }),
        methods: {
           InsertarRuta(ruta){
            this.$router.push(ruta)
           } 
        },
}
</script>