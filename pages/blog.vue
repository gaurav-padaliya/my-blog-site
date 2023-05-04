<template>
    <Blogs  />
  </template>
  
  <script lang="ts">
  import Vue from 'vue'
import Blogs from '~/components/blogs.vue';
  
  export default Vue.extend({
    name: "blog",
    components: { Blogs }
})
  </script>