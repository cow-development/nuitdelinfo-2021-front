<template>
  <div class="home">
    <l-map style="height: 100vh" :zoom="8" :center="[51.106971,  2.356567]" :options="mapOptions">
      <l-tile-layer :url="url"></l-tile-layer>
      <!-- <l-marker :lat-lng="[51.106971,  2.356567]" :icon="icon"></l-marker>
      <l-marker :lat-lng="[51.106971,  2.456567]">
        <l-icon :icon-anchor="[16, 37]">
          <img src="../assets/gland.png" />
        </l-icon>
      </l-marker> -->
    </l-map>
  </div>
</template>

<script>
import L from 'leaflet';
import { LMap, LTileLayer, LMarker, LIcon } from 'vue2-leaflet';

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
    LIcon
  },
}
</script>
