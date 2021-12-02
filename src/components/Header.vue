<template>
  <div class="header">
    <img id="logo" src="../assets/crabe.png" />
    <span id="title">
      Crabe cool
    </span>
  </div>
</template>

<script>
export default {
  name: 'CustomHeader'
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 64px;
  color: var(--primaryText);
  z-index: 9999;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 24px;
  #logo {
    height: 32px;
  }
  #title {
    font-family: "Pulp Display";
    text-transform: uppercase;
    font-size: 16px;
  }
}
</style>