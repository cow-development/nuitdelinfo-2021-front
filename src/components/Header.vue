<template>
  <div class="header">
    <div class="left">
      <img id="logo" src="../assets/crabe.png" />
      <span id="title">
        Crabe.cool
      </span>
    </div>
    <div class="center">
      <InputSearch />
    </div>
    <div class="right">
      <Dropdown :list="true">
        <template v-slot:trigger>
          <div class="flag">
            <img src="../assets/france.png" />
            <i class="material-icons">expand_more</i>
          </div>
        </template>
        <template v-slot:content>
          <div class="container">
            <div class="flag">
              <img src="../assets/united-kingdom.png" />
              <span class="country">
                English
              </span>
            </div>
          </div>
        </template>
      </Dropdown>
      <Dropdown>
        <template v-slot:trigger>
          <i class="material-icons">account_circle</i>
        </template>
        <template v-slot:content>
          <div class="container">
            Salut comment ça va
          </div>
        </template>
      </Dropdown>
    </div>
  </div>
</template>

<script>
import Dropdown from './Dropdown.vue'
import InputSearch from './InputSearch.vue'

export default {
  name: 'CustomHeader',
  components: {
    Dropdown,
    InputSearch
  }
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
  justify-content: space-between;
  gap: 8px;
  padding: 0 24px;
  .left {
    display: flex;
    align-items: center;
    gap: 8px;
    #logo {
      height: 32px;
    }
    #title {
      font-family: "Pulp Display";
      text-transform: uppercase;
      font-size: 16px;
    }
  }
  .right {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    .flag {
      display: flex;
      align-items: center;
      gap: 4px;
      img {
        height: 24px;
      }
      i {
        font-size: 18px;
      }
    }
    .container {
      background-color: var(--primaryColor);
      padding: 12px 18px;
      display: flex;
      .flag {
        display: flex;
        align-items: center;
        gap: 8px;
        img {
          height: 20px;
        }
      }
    }
  }
}
</style>