<!--
Forked from:
https://quasar.dev/vue-components/carousel#example--fullscreen
-->
<template>
  <div class="q-pt-md">
      <q-carousel
        v-if="apiStore.photoUrl"
        height="600px"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        arrows
        v-model="slide"
        infinite
      >
        <q-carousel-slide :name="1" v-for="(photo, index) in [apiStore.photoUrl]"
        :key="index"
        :img-src="photo">

              <h3 style="   margin: 0; padding: 0; margin-top: 180px; margin-left: 100px" > 1906 </h3>
              <q-btn @click="fetchPhoto" class=" container q-px-xl q-py-xs" size="25px" style=" margin: 20; padding: 30; margin-top: 70px; margin-left: 100px;background: #cf0a2c; color: white" label="Keşfet">
              </q-btn>

        </q-carousel-slide>

        <q-carousel-slide :name="2" img-src="https://img1-newbalance.mncdn.com/newbalance/products/uploads/banner/mainslider/550NED-NEA_desktop_2.jpg">

          <h3 style="   margin: 0; padding: 0; margin-top: 180px; margin-left: 100px" > 990 </h3>
              <q-btn class=" container q-px-xl q-py-xs" size="25px" style=" margin: 20; padding: 30; margin-top: 70px; margin-left: 100px;background: #cf0a2c; color: white" label="Keşfet">
              </q-btn>

        </q-carousel-slide>


      </q-carousel>
    </div>
  </template>

    <script>
import { ref } from 'vue'
import { useApiStore } from 'src/store/apiStore';

const apiStore = useApiStore();
const fetchPhoto = () => {
  apiStore.fetchPhoto();
};
export default {
  setup () {
    return {
      slide: ref(1),
      fullscreen: ref(false)
    }
  }
}
</script>

