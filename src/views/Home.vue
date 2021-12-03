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
          <div class="marker" :class="{easter: rescue.type == 'easter'}"></div>
        </l-icon>
      </v-marker>
    </l-map>
    <Drawer />
    <div class="easter" v-if="craby" @click="craby = false">
      <img src="../assets/craby.png" />
    </div>
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
    craby: false
  }),
  methods: {
    ...mapActions(['setActiveRescue', 'toggleDrawer']),
    selectMarker(rescue) {
      if(rescue.type == 'easter') {
        this.triggerEasterEgg();
      } else {
        this.setActiveRescue(rescue);
        this.toggleDrawer(true);
      }
    },
    triggerEasterEgg() {
      this.craby = true;
    },
  },
  computed: {
    ...mapGetters(['rescues', 'theme'])
  },
  mounted() {
    setTimeout(() => {
      this.rescues.push({
        id: 1,
        location: {
          coordinates: [52.106971, 2.156567],
        },
        type: "easter"
      });
    }, 5000);
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
    &.easter {
      border: 2px solid #59a8f1 !important;
      &::after {
        border: 2px solid #59a8f1 !important;
      }
    }
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
  > .easter {
    position: fixed;
    width: 100%;
    bottom: -10px;
    z-index: 9999;
    animation: dance 7s linear infinite;
    img {
      animation: rotate 1s linear infinite alternate;
    }
  }
}

@keyframes dance {
  0% {
    transform: translateX(0px)
  } 50% {
    transform: translateX(100%)
  } 100% {
    transform: translateX(0px)
  }
}

@keyframes rotate {
  0% {
    transform: rotate(-20deg);
  } 100% {
    transform: rotate(20deg);
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
