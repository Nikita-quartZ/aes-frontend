<template>
  <header class="container-header">
    <div class="container h-100 d-flex align-items-center">
      <router-link :to="{name: 'mainPage'}" class="logo">
        <img src="@/assets/logo.svg" alt="logo">
      </router-link>
      <nav class="d-flex align-items-center">
        <ul class="d-flex align-items-center nav-list" v-if="token">
          <li class="nav__items">
            <a href="#">
              Проекты
            </a>
          </li>
          <li class="nav__items">
            <a href="#">
              Таланты
            </a>
          </li>
          <li class="nav__items">
            <a href="#">
              Краудфандинг
            </a>
          </li>
        </ul>
      </nav>
      <div class="header__login-block" v-if="!token">
        <router-link :to="{name: 'loginPage'}">
          <b-button variant="outline-dark" class="register register-block">
            Присоединиться
          </b-button>
        </router-link>
        <b-button variant="success">
          Войти
        </b-button>
      </div>
      <div class="header__login-block d-flex flex-nowrap" v-else>
        <tippyComponent :content="'У вас пока что нет никаких уведомлений'" arrow class="register-block">
          <template v-slot:trigger>
            <button class="register">
              <i class="fa-solid fa-bell"></i>
            </button>
          </template>
        </tippyComponent>

        <button class="register register-block">
          <i class="fa-regular fa-square-plus"></i>
        </button>
        <router-link :to="{name: 'profilePage'}">
          <button class="register register-block">
            <i class="fa-solid fa-user"></i>
          </button>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HeaderBlock',
  computed: {
    ...mapState('authorization', ['token'])
  }
}
</script>

<style lang="scss">

.container-header {
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  right: 0;
  height: 80px;
  background: #fff;
  box-shadow: 0px 2px 2px rgba(221, 221, 221, 0.4);
}

.nav-list {
  list-style-type: none;
  margin: 0 !important;
}

.nav {
  &__items {
    margin-right: 48px;
    & a {
      text-decoration: none;
      color: #000;
    }
  }
}

.logo {
  margin-right: auto;
}

.register {
  border: none;
  background: none;
  font-size: 22px;
}

.register-block {
  margin-right: 24px;
}
</style>
