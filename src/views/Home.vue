<template>
  <div class="home">
    <l-map
      style="height: 100vh"
      :zoom="8"
      :center="[51.106971, 2.356567]"
      :options="mapOptions"
    >
      <l-tile-layer :url="url"></l-tile-layer>
      <v-marker
        v-for="rescue in rescues"
        :key="rescue.id"
        :lat-lng="rescue.coordinates"
        v-on:click="selectMarker(rescue)"
      >
        <l-icon :icon-anchor="[20, 20]">
          <div class="marker"></div>
        </l-icon>
      </v-marker>
      <!-- <l-marker :lat-lng="[52.106971,  3.56567]">
        <l-icon :icon-anchor="[20, 20]">
          <div class="marker"></div>
        </l-icon>
      </l-marker> -->
    </l-map>
    <Drawer />
  </div>
</template>

<script>
import L from "leaflet";
import { LMap, LTileLayer, LMarker, LIcon } from "vue2-leaflet";
import Drawer from "../components/Drawer.vue";
import Vue from "vue";

Vue.component("v-marker", LMarker);

export default {
  name: "Home",
  data: () => ({
    mapOptions: {
      zoomControl: false,
      attributionControl: false,
      zoomSnap: false,
      dragging: false,
    },
    url: "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png",
    rescues: [
      {
        id: 1,
        coordinates: [51.106971, 2.456567]
      },
      {
        id: 2,
        coordinates: [52.106971, 3.566567]
      }
    ]
  }),
  methods: {
    selectMarker(rescue) {
      console.log(rescue);
    },
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    Drawer,
  },
};
</script>

<style lang="scss" scoped>
.home {
  .marker {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid var(--tintColor);
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 2px solid var(--tintColor);
      pointer-events: none;
      animation: pulse 1s infinite;
    }
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(2.5);
    opacity: 0;
  }
}
</style>
