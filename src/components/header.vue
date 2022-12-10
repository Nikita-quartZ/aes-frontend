<template>
  <header class="container-header">
    <div class="container h-100 d-flex align-items-center">
      <router-link :to="{name: 'mainPage'}" class="logo">
        <img src="@/assets/logo.svg" alt="logo">
      </router-link>
      <nav class="d-flex align-items-center">
        <ul class="d-flex align-items-center nav-list">
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
      <div class="header__login-block">
        <router-link :to="{name: 'loginPage'}">
          <b-button variant="outline-dark" class="register">
            Присоединиться
          </b-button>
        </router-link>
        <b-button variant="success">
          Войти
        </b-button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderBlock'
}
</script>

<style lang="scss">

.container-header {
  position: fixed;
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
  margin-right: 24px;
}
</style>
