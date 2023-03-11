<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <BotNav/>
    
    </v-navigation-drawer>
    

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>ruta</v-toolbar-title>
    
    </v-app-bar>

    <v-main>
      <slot>

      </slot>
      
    </v-main>
  </v-app>
</template>

<script>
import {defineComponent} from 'vue';

import BotNav from './BotNav.vue';


export default defineComponent ( {
  name: "NavBar",

  data: () => ({ drawer: false }),
  components:{BotNav,}
});
</script>















  <!-- <router-link to="/about">
        <center>
          <v-btn
            class="bg-light-warning-lighten-2 h-10 w-75 ma-2"
            variant="outliend"
            color="danger"
            prepend-icon="mdi-vuetify"
            append-icon="mdi-vuetify"
          >
          ABOUT
          </v-btn>
        </center>
      </router-link>
      <router-link to="/" >
      <center>
          <v-btn
            class="bg-light-blue-lighten-2 h-10 w-75 ma-2"
            variant="outliend"
            color="black"
            prepend-icon="mdi-vuetify"
            append-icon="mdi-vuetify"
          >
            HOME
          </v-btn>
        </center>
    </router-link>
    <router-link to="/help" >
      <center>
          <v-btn
            class="bg-light-blue-lighten-2 h-10 w-75 ma-2"
            variant="outliend"
            color="black"
            prepend-icon="mdi-vuetify"
            append-icon="mdi-vuetify"
          >
            HELP
          </v-btn>
        </center>
    </router-link> -->





     <!-- <router-link to="/" >
      <center>
          <v-btn
            class="bg-light-blue-lighten-2 h-10 w-75 ma-2"
            variant="outliend"
            color="black"
            prepend-icon="mdi-vuetify"
            append-icon="mdi-vuetify"
          >
            HOME
          </v-btn>
        </center>
    </router-link> -->