<template>
  <TheNavbar></TheNavbar>
  <TheLoginSignUp class="q-pt-none"></TheLoginSignUp>
  <TheFooter class="q-pl-none"></TheFooter>
</template>

<script lang="ts">

import TheFooter from 'src/components/TheFooter.vue';
import TheLoginSignUp from 'src/components/TheLoginSignUp.vue';
import TheNavbar from 'src/components/TheNavbar.vue';

import { defineComponent } from 'vue';


export default defineComponent({
  name: 'IndexPage',
  components: { TheNavbar, TheLoginSignUp, TheFooter },
  setup () {[]} });
</script>
