<template>
  <NavE>
    <HelloWorld />
  </NavE>
  
</template>

<script>
import { defineComponent } from 'vue';

// Components


import NavE from '@/components/NavE.vue';
import HelloWorld from '../components/HelloWorld.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    HelloWorld,
    NavE
  },
});
</script>
