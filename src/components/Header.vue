<template>
  <div class="header">
    <div class="left">
      <i class="material-icons" @click="toggleDrawerEvent()">menu</i>
      <img id="logo" src="../assets/crabe.png" />
      <span id="title">
        Crabe.cool
      </span>
    </div>
    <div class="center">
      <InputSearch />
    </div>
    <div class="right">
      <label class="switch">
        <input type="checkbox" @change="toggleLightTheme()" v-model="lightTheme">
        <span class="slider round"></span>
      </label>
      <Dropdown :list="true">
        <template v-slot:trigger>
          <div class="flag">
            <img src="../assets/france.png" v-if="$i18n.locale == 'fr'" />
            <img src="../assets/united-kingdom.png" v-else />
            <i class="material-icons">expand_more</i>
          </div>
        </template>
        <template v-slot:content>
          <div class="container">
            <div class="flag" @mousedown="setLocale('en')" v-if="$i18n.locale == 'fr'">
              <img src="../assets/united-kingdom.png" />
              <span class="country">
                English
              </span>
            </div>
            <div class="flag" @mousedown="setLocale('fr')" v-else>
              <img src="../assets/france.png" />
              <span class="country">
                Français
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
            <div class="login" v-if="!user.token">
              <input type="text" v-model="username" placeholder="Nom d'utilisateur" />
              <input type="password" v-model="password" placeholder="Mot de passe" />
              <div class="buttons">
                <button @click="signup()">
                  {{ $t('message.signup') }}
                </button>
                <button @click="login()">
                  {{ $t('message.login') }}
                </button>
              </div>
            </div>
            <div class="logout" v-else>
              <button @click="logout()">
                {{ $t('message.logout') }}
              </button>
            </div>
          </div>
        </template>
      </Dropdown>
    </div>
  </div>
</template>

<script>
import Dropdown from './Dropdown.vue'
import InputSearch from './InputSearch.vue'
import { mapActions, mapGetters } from 'vuex'
import jscookie from "js-cookie"

export default {
  name: 'CustomHeader',
  data: () => ({
    username: '',
    password: '',
    lightTheme: false
  }),
  methods: {
    ...mapActions(['createUser', 'authUser', 'verifyUser', 'setUserToken', 'resetUser', 'getRescues', 'toggleDrawer', 'toggleTheme']),
    signup() {
      this.createUser({ username: this.username, password: this.password })
    },
    login() {
      this.authUser({ username: this.username, password: this.password })
        .then(() => {
          jscookie.set('crabecookiecool', this.user.token);
          this.init();
        })
    },
    logout() {
      this.resetUser();
    },
    init() {
      this.getRescues();
    },
    toggleDrawerEvent() {
      this.toggleDrawer(!this.drawerStatus);
    },
    toggleLightTheme() {
      this.toggleTheme(this.lightTheme);
    },
    setLocale(locale) {
      console.log(locale);
      this.$i18n.locale = locale;
    }
  },
  mounted() {
    this.init();
    if (!this.user.token && jscookie.get('crabecookiecool')) {
      this.setUserToken(jscookie.get('crabecookiecool'));
      this.verifyUser()
    }
  },
  computed: {
    ...mapGetters(['user', 'drawerStatus'])
  },
  components: {
    Dropdown,
    InputSearch,
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
    i {
      cursor: pointer;
    }
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
      .login {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        input {
          border: none;
          background-color: var(--secondaryColor);
          padding: 10px 12px;
          color: var(--primaryText);
          border-radius: 4px;
          font-size: 12px;
          &:focus {
            outline: none;
          }
        }
        .buttons {
          width: 100%;
          display: flex;
          justify-content: space-between;
          gap: 4px;
          button {
            background-color: var(--tintColor);
            border: none;
            border-radius: 2px;
            font-size: 12px;
            font-weight: 500;
            outline: none;
            padding: 6px 10px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>