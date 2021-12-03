<template>
  <div class="drawer" :class="{ active: drawerStatus }">
    <div class="drawer-container">
      <div class="rescue-date" v-if="activeRescue">
        <p class="title"><i class="material-icons">event</i>{{ $t('message.rescue_date') }}</p>
        {{ activeRescue.rescueDate | dateFormatter }}
      </div>
      <div class="rescuers" v-if="activeRescue">
        <p class="title"><i class="material-icons">support</i>{{ $t('message.rescuers') }}</p>
        <div 
          class="rescuer"
          v-for="(rescuer, index) in activeRescue.rescuers"
          :key="index">
          - {{ rescuer.firstname }} {{ rescuer.lastname }}
        </div>
      </div>
      <div class="rescueds" v-if="activeRescue">
        <p class="title"><i class="material-icons">people</i>{{ $t('message.rescued') }}</p>
        <div 
          class="rescued"
          v-for="(rescued, index) in activeRescue.rescued"
          :key="index">
          - {{ rescued.firstname }} {{ rescued.lastname }}
        </div>
      </div>
      <div class="unrescueds" v-if="activeRescue">
        <p class="title"><i class="material-icons">person_off</i>{{ $t('message.unrescued') }}</p>
        <div 
          class="unrescued"
          v-for="(unrescued, index) in activeRescue.unrescued"
          :key="index">
          - {{ unrescued.firstname }} {{ unrescued.lastname }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Drawer',
  data: () => ({
    active: true
  }),
  computed: {
    ...mapGetters([
      'drawerStatus',
      'activeRescue'
    ])
  },
  filters: {
    dateFormatter (date) {
      if(date) {
        date = new Date(date);
        const formatted = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
        return formatted
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.drawer {
  position: fixed;
  z-index: 9000;
  left: 0;
  top: 0;
  width: 25%;
  height: 100vh;
  padding: 64px 0 24px 24px;
  box-sizing: border-box;
  transform: translateX(-100%);
  transition: all .3s ease;
  &.active {
    transform: translateX(0);
  }
  .drawer-container {
    height: 100%;
    background-color: var(--primaryColor);
    color: var(--primaryText);
    opacity: .9;
    // box-shadow: 0 0 36px rgb(27, 27, 27);
    border-radius: 24px;
    padding: 24px;
    .title {
      display: flex;
      gap: 10px;
      font-size: 24px;
      margin-bottom: 24px;
      color: var(--primaryText);
      position: relative;
      width: fit-content;
      &::after {
        // content: "";
        // position: absolute;
        // background-color: var(--tintColor);
        // left: 20px;
        // top: 50%;
        // z-index: -1;
        // width: 100%;
        // height: 80%;
      }
    }
    .rescuer, .rescued, .unrescued {
      color: var(--textSecondary);
    }
  }
}
</style>