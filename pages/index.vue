<template>
  <Blogs  />
</template>

<script lang="ts">
import Vue from 'vue'
import Blogs from '~/components/Blogs.vue';

export default Vue.extend({
  name: "blog",
  components: { Blogs }
})
</script>