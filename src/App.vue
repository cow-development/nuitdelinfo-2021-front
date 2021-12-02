<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  },
}
</script>

<style lang="scss">
html, body {
  margin: 0;
}

@font-face {
  font-family: "Pulp Display";
  src: url("assets/PulpDisplay-Regular.woff");
}
@font-face {
  font-family: "Pulp Display Outlined";
  src: url("assets/PulpDisplay-Outline.woff");
}

#app {
  font-family: "Pulp Display", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}
</style>
