<template>
  <div class="login">
    <div class="login__container">
      <router-link :to="{ name: 'mainPage' }" class="logo d-flex justify-content-center basic-margin">
        <img src="@/assets/logo.svg" alt="logo" class="logo-img">
      </router-link>
      <b-form>
        <div class="basic-margin d-flex justify-content-center">
          <h2>
            Регистрация
          </h2>
        </div>
        <b-form-group class="name-input" label-for="input-name">
          <span class="login__input-label text-name" :class="{ 'login__input-label-active': formRegister.name !== '' }">
            Логин
          </span>
          <b-form-input id="input-name" v-model="formRegister.name" required></b-form-input>
        </b-form-group>
        <b-form-group class="password-input basic-margin" label-for="input-password">
          <span class="login__input-label" :class="{ 'login__input-label-active': formRegister.password !== '' }">
            Пароль
          </span>
          <b-form-input id="input-password" v-model="formRegister.password" required></b-form-input>
        </b-form-group>
        <span class="login__input-label-select">
            Роль
        </span>
        <b-form-select :options="options" v-model="chooseGender" class="form-select basic-margin" />

        <div class="d-flex align-items-center flex-column">
          <button class="btn basic-margin main-btn-primary" type="submit" variant="success">Зарегистрироваться</button>
          <div class="d-flex justify-content-between login__authorization">
            <b-button>
              <i class="fa-brands fa-google fa-lg"></i>
            </b-button>
            <b-button>
              <i class="fa-brands fa-github fa-lg"></i>
            </b-button>
            <b-button>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="itmo-id">
              <path d="M0 7.09434C0 3.1752 3.1752 0 7.09434 0H11.7736V4.5283H7.09434C5.67612 4.5283 4.5283 5.67612 4.5283 7.09434V11.7736H0V7.09434Z" fill="#fff"/>
              <path d="M36.2264 0H40.9057C44.8248 0 48 3.17521 48 7.09434V11.7736H43.4717V7.09434C43.4717 5.67612 42.3239 4.5283 40.9057 4.5283H36.2264V0Z" fill="#fff"/>
              <path d="M4.5283 36.2264V40.9057C4.5283 42.3239 5.67612 43.4717 7.09434 43.4717H11.7736V48H7.09434C3.17521 48 0 44.8248 0 40.9057V36.2264H4.5283Z" fill="#fff"/>
              <path d="M48 36.2264V40.9057C48 44.8248 44.8248 48 40.9057 48H36.2264V43.4717H40.9057C42.3239 43.4717 43.4717 42.3239 43.4717 40.9057V36.2264H48Z" fill="#fff"/>
              <path d="M27.6226 23.0943C29.1232 23.0943 30.3396 21.8779 30.3396 20.3774C30.3396 18.8768 29.1232 17.6604 27.6226 17.6604C26.1221 17.6604 24.9057 18.8768 24.9057 20.3774C24.9057 21.8779 26.1221 23.0943 27.6226 23.0943Z" fill="#fff"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M34.2818 11.2226C30.2891 8.31794 24.8744 8.33632 20.9015 11.268C17.2833 13.9379 15.6211 18.4631 16.5597 22.7789L12.1762 27.1675C11.3387 28.0059 10.868 29.1425 10.8679 30.3278V32.8239C10.8679 35.2052 12.7996 37.1321 15.178 37.1321H17.6861C18.8707 37.1321 20.0071 36.6613 20.8445 35.8229L25.2195 31.4428C25.9486 31.6024 26.6933 31.6876 27.4419 31.6967C32.3764 31.7755 36.7935 28.6482 38.3585 23.9673C39.9242 19.2846 38.2745 14.1272 34.2818 11.2226ZM22.3981 27.8598C23.5259 26.8046 24.5409 26.4932 25.4303 26.8046C26.0957 27.0376 26.7946 27.1606 27.4996 27.1687L27.5108 27.1689C30.4726 27.2177 33.1245 25.3411 34.0639 22.5314C35.0033 19.7216 34.0135 16.6271 31.6179 14.8844C29.2224 13.1417 25.9738 13.1528 23.5902 14.9117C21.2065 16.6706 20.2377 19.7718 21.1961 22.5751C21.5215 23.5267 20.8954 24.846 20.1421 25.6001L15.3962 30.3514V32.6038H17.6596L22.3981 27.8598Z" fill="#fff"/>
              </svg>
            </b-button>
          </div>
        </div>
      </b-form>
      <router-link :to="{ name: 'mainPage' }" tag="button" class="login__cross" variant="outline-primary"
        @click="OpenLogin">
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
      },
      options: ['Студент', 'HR-специалист']
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
  background: rgb(255, 255, 255);
  background: linear-gradient(194deg, rgba(255, 255, 255, 1) 0%, rgba(123, 69, 236, 1) 79%, rgba(123, 69, 236, 1) 100%);

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
    color: rgba(123, 69, 236, 1);
    transition: color .3s linear;

    &:hover {
      &:hover {
        color: rgb(100, 47, 214);
      }

      &:active {
        color: rgba(9, 9, 121, 1);
      }
    }
  }

  &__authorization {
    max-width: 150px;
    width: 100%;
  }

  &__input-label-select {
    color: var(--bs-gray-600);
    display: block;
    text-align: center;
    margin-bottom: 5px;
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

.itmo-id {
  width: 19px;
  height: 20px;
}

.main-btn-primary {
  background: #7749F8;
  color: #fff;

  &:hover,
  &:focus {
    background: #5227CC;
  }
}

.basic-margin {
  margin-bottom: 20px;
}

.logo-img {
  width: 300px;
}
</style>
