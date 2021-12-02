<template>
  <div class="drawer">
    <div class="drawer-container">
      Drawer
    </div>
  </div>
</template>

<script>
export default {
  name: 'Drawer',
  data: () => ({
    active: true
  })
}
</script>

<style lang="scss" scoped>
.drawer {
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 25%;
  height: 100vh;
  padding: 64px 0 24px 24px;
  box-sizing: border-box;
  transition: width .3s ease;
  .drawer-container {
    height: 100%;
    background-color: var(--primaryColor);
    color: var(--primaryText);
    opacity: .9;
    // box-shadow: 0 0 36px rgb(27, 27, 27);
    border-radius: 24px;
    padding: 24px;
  }
}
</style>