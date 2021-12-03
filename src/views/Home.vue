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
        :lat-lng="rescue.location.coordinates"
        v-on:click="selectMarker(rescue)"
      >
        <l-icon :icon-anchor="[20, 20]">
          <div class="marker"></div>
        </l-icon>
      </v-marker>
    </l-map>
    <Drawer />
  </div>
</template>

<script>
import L from "leaflet";
import { LMap, LTileLayer, LMarker, LIcon } from "vue2-leaflet";
import Drawer from "../components/Drawer.vue";
import Vue from "vue";
import { mapActions, mapGetters } from 'vuex';

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
  }),
  methods: {
    ...mapActions(['setActiveRescue', 'toggleDrawer']),
    selectMarker(rescue) {
      this.setActiveRescue(rescue);
      this.toggleDrawer(true);
    },
  },
  computed: {
    ...mapGetters(['rescues', 'theme'])
  },
  watch: {
    theme() {
      if(!this.theme) {
        this.url = "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png";
      } else {
        this.url = "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png";
      }
    }
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
