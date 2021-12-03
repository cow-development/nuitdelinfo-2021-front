<template>
  <div class="home">
    <l-map style="height: 100vh" :zoom="8" :center="[51.106971,  2.356567]" :options="mapOptions">
      <l-tile-layer :url="url"></l-tile-layer>
      <!-- <l-marker :lat-lng="[51.106971,  2.356567]" :icon="icon"></l-marker> -->
      <l-marker :lat-lng="[51.106971,  2.456567]">
        <l-icon :icon-anchor="[20, 20]">
          <div class="marker"></div>
        </l-icon>
      </l-marker>
      <l-marker :lat-lng="[52.106971,  3.56567]">
        <l-icon :icon-anchor="[20, 20]">
          <div class="marker"></div>
        </l-icon>
      </l-marker>
    </l-map>
    <Drawer />
  </div>
</template>

<script>
import L from 'leaflet';
import { LMap, LTileLayer, LMarker, LIcon } from 'vue2-leaflet';
import Drawer from '../components/Drawer.vue';

export default {
  name: 'Home',
  data: () => ({
    mapOptions: { zoomControl: false, attributionControl: false, zoomSnap: false, dragging: false },
    url: "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png",
    icon: L.icon({
      iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Map_marker.svg/512px-Map_marker.svg.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    })
  }),
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    Drawer
  },
}
</script>

<style lang="scss" scoped>
.home {
  .marker {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid var(--tintColor);
    &::after {
      content: '';
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
  } 100% {
    transform: scale(2.5);
    opacity: 0;
  }
}
</style>
