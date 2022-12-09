<template>
  <div class="login">
    <div class="login__container">
      <b-form>
        <div class="basic-margin d-flex justify-content-center">
          <h2 >
            Register
          </h2>
        </div>
        <b-form-group class="name-input basic-margin" label-for="input-2">
          <span class="login__input-label" :class="{'login__input-label-active': formRegister.name !== ''}">Логин</span>
          <b-form-input
            id="input-2"
            v-model="formRegister.name"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group class="password-input basic-margin" label-for="input-2">
          <span class="login__input-label" :class="{'login__input-label-active': formRegister.password !== ''}">Пароль</span>
          <b-form-input
            id="input-2"
            v-model="formRegister.password"
            required
          ></b-form-input>
        </b-form-group>

        <div class="d-flex align-items-center flex-column">
          <button class="w-25 basic-margin login__btn btn" type="submit" variant="success">Login</button>
          <div class="d-flex justify-content-between login__authorization">
            <b-button>
              <i class="fa-brands fa-google fa-lg"></i>
            </b-button>
            <b-button>
              <i class="fa-brands fa-github fa-lg"></i>
            </b-button>
            <b-button>
              <i class="fa-brands fa-vk fa-lg"></i>
            </b-button>
          </div>
        </div>
      </b-form>
      <router-link
        :to="{name: 'mainPage'}"
        tag="button"
        class="login__cross"
        variant="outline-primary"
        @click="OpenLogin"
      >
        <i class="fa-solid fa-xmark fa-lg"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      formRegister: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    openRegister () {
      this.login = false
      setTimeout(() => {
        this.register = true
      }, 800)
    },
    OpenLogin () {
      this.register = false
      setTimeout(() => {
        this.login = true
      }, 800)
    }
  }
}
</script>

<style scoped lang="scss">
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: rgb(34,17,131);
  background: linear-gradient(90deg, rgba(34,17,131,1) 0%, rgba(9,9,121,1) 29%, rgba(123,69,236,1) 100%);

  &__container {
  max-width: 600px;
  min-height: 350px;
  width: 100%;
  border-radius: 25px;
  padding: 25px;
  position: relative;
  background: #FFF;
  }

  &__cross {
    position: absolute;
    top: 25px;
    right: 25px;
    background: none;
    border: none;
    color: rgba(123,69,236,1);
    transition: color .3s linear;

    &:hover {
      &:hover {
      color: rgb(100, 47, 214);
    }

    &:active {
      color: rgba(9,9,121,1);
    }
    }
  }

  &__authorization {
    max-width: 150px;
    width: 100%;
  }

  &__btn {
    background: rgba(123,69,236,1);
    color: #Fff;

    &:hover {
      color: #fff;
      background: rgb(100, 47, 214)
    }
    &:active {
      color: #fff;
      background: rgba(9,9,121,1)
    }
  }
  &__input-label {
    position: relative;
    top: 30px;
    left: 15px;
    color: var(--bs-gray-600);
    transition: top .1s linear, left .1s linear;

    &-active {
      top: 0;
      left: 0;
      font-size: 14px;
      color: rgb(100, 47, 214)
    }
  }
}

.basic-margin {
  margin-bottom: 20px;
}

</style>
