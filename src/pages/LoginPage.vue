<template>
  <div class="login">
    <div class="login__container">
      <b-form>
        <div class="basic-margin d-flex justify-content-center">
          <h2 >
            Register
          </h2>
        </div>
        <b-form-group class="name-input basic-margin" label-for="input-name">
          <span
            class="login__input-label text-name"
            :class="{'login__input-label-active': formRegister.name !== ''}"
          >
            Логин
          </span>
          <b-form-input
            id="input-name"
            v-model="formRegister.name"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group class="password-input basic-margin" label-for="input-password">
          <span
            class="login__input-label"
            :class="{'login__input-label-active': formRegister.password !== ''}"
          >
            Пароль
          </span>
          <b-form-input
            id="input-password"
            v-model="formRegister.password"
            required
          ></b-form-input>
        </b-form-group>

        <div class="d-flex align-items-center flex-column">
          <button class="btn w-25 basic-margin main-btn-primary" type="submit" variant="success">Войти</button>
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
  },
  mounted () {
    document.body.querySelector('.text-name').addEventListener('click', () => {
      document.body.querySelector('#input-name').focus()
    })
    document.body.querySelector('.text-password').addEventListener('click', () => {
      document.body.querySelector('#input-password').focus()
    })
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
  &__input-label {
    position: relative;
    top: 32px;
    left: 15px;
    color: var(--bs-gray-600);
    transition: top .1s linear, left .1s linear;
    line-height: 28px;

    &-active {
      top: 0;
      left: 0;
      font-size: 14px;
      line-height: 28px;
      color: rgb(100, 47, 214)
    }
  }
}

.main-btn-primary {
  background: #7749F8;
  color: #fff;

  &:hover, &:focus {
    background: #5227CC;
  }
}
.basic-margin {
  margin-bottom: 20px;
}

</style>
