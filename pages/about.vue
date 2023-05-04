<template>
    <About/>
</template>
  
  <script lang="ts">
  import Vue from 'vue'
import About from '~/components/About.vue';
  
  export default Vue.extend({
    name: "about",
    components: { About }
})
  </script>