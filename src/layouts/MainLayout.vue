<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Component Links
        </q-item-label>

        <ComponentLink
          v-for="link in componentLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ComponentLink from 'components/ComponentLink.vue';

const linksList = [
  {
    title: 'THE LOGIN SIGN UP PAGE',
    caption: 'PAGE 1',
    link: '/page1'
  },
  {
    title: 'THE MAIN PAGE',
    caption: 'PAGE 2',
    link: '/page2'
  },
  {
    title: 'THE CARD COMPONENT',
    caption: 'COMPONENT3',
    link: '/comp3'
  },
  {
    title: 'THE FILTER MENU',
    caption: 'COMPONENT4',
    link: '/comp4'
  },

];

export default defineComponent({
  name: 'MainLayout',

  components: {
    ComponentLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      componentLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
});
</script>
