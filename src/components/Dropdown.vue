<template>
  <div class="dropdown">
    <div class="trigger" tabindex="0">
      <slot name="trigger"></slot>
    </div>
    <div class="dropdown-container" v-bind:class="{list: list}">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["list"],
  data: () => ({
  }),
};
</script>

<style lang="scss">
.dropdown {
  position: relative;
  &:focus-within {
    .dropdown-container {
      display: flex;
    }
  }
  .trigger {
    cursor: pointer;
  }
  .dropdown-container {
    font-weight: 400 !important;
    color: var(--primaryText) !important;
    top: 100%;
    display: none;
    position: absolute;
    z-index: 2000;
    right: 0;
    min-width: 100%;
    max-width: 300px;
    white-space: nowrap;
    background-color: var(--primaryColor);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    transition: all .3s ease;
    animation: fade-enter .3s ease forwards;
    &:focus-within {
      display: flex;
    }
  }
  & .list {
    ul {
      list-style: none;
      padding: 0px;
      margin: 0;
      li {
        font-size: 14px;
        color: rgb(133, 133, 133);
        position: relative;
        cursor: pointer;
        a {
          display: inline-block;
          padding: 14px;
          height: 100%;
          text-decoration: none;
          color: inherit;
          white-space: nowrap;
        }
        &:not(:first-child) {
          border-top: 1px solid #e4e4e4;
        }
        &:hover {
          color: #333333 !important;
          a {
            color: #333333 !important;
            transition: all .3s ease;
          }
          &::before {
            height: 100%;
            top: 0px;
          }
        }
        &::before {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          height: 0px;
          width: 4px;
          background-color: var(--primaryColor);
          transition: 0.3s ease;
          transition-property: height, top;
        }
      }
    }
  }
}

@keyframes fade-enter {
  from {
    transform: translateY(-20px);
    opacity: 0;
  } to {
    transform: translateY(10px);
    opacity: 1;
  }
}
</style>

