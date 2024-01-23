<template>
  <TheNavbar></TheNavbar>
  <TheCarousel></TheCarousel>
</template>

<script lang="ts">

import TheCarousel from 'src/components/TheCarousel.vue';
import TheNavbar from 'src/components/TheNavbar.vue';
import { defineComponent, ref } from 'vue';


export default defineComponent({
  name: 'IndexPage',
  components: { TheNavbar, TheCarousel },
  setup () {[]} });
</script>
