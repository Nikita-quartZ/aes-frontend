<template>
  <div>
    <Header />
    <main>
      <section class="login-block container">
        <div class="login-block__form d-flex flex-column">
          <h2 class="login-block__header">
            Добро пожаловать В ПИФ
          </h2>
          <span class="login-block__input-label text-name"
            :class="{ 'login-block__input-label-active': formRegister.name !== '' }">
            Логин
          </span>
          <b-input v-model="formRegister.name" id="input-name" />
          <span class="login-block__input-label text-password"
            :class="{ 'login-block__input-label-active': formRegister.password !== '' }">
            Пароль
          </span>
          <b-input v-model="formRegister.password" class="basic-margin" id="input-password" />
          <b-link class="basic-margin">
            Забыли пароль?
          </b-link>
          <button class="basic-margin btn main-btn-primary">
            Войти
          </button>

          <router-link :to="{ name: 'loginPage' }">
            <button class="btn btn-outline-secondary w-100">
              Зарегистрироваться
            </button>
          </router-link>
        </div>
        <div class="login-block__main-picture">
          <img src="@/assets/mainPicture.png" alt="main-picture">
        </div>
      </section>
      <section class="student">
        <div class="container">
          <h3 class="basic-margin">
            Студентам
          </h3>
          <div class="student-block">
            <div class="student-block__info">
              <h4 class="student-block-info">
                Найдите проект мечты или стажировку
              </h4>
            </div>
            <div class="student-block__tags">
              <h4 class="basic-margin">
                Студенты часто ищут
              </h4>
              <div class="d-flex justify-content-between flex-wrap">
                <button class="btn btn-outline-success student-block__btn">
                  Управление проектами
                </button>
                <button class="btn btn-outline-success student-block__btn">
                  Машинное обучение
                </button>
                <button class="btn btn-outline-success student-block__btn">
                  Искусственный интеллект
                </button>
                <button class="btn btn-outline-success student-block__btn">
                  Мобильные приложения
                </button>
                <button class="btn btn-outline-success student-block__btn">
                  Python
                </button>
                <button class="btn btn-outline-success student-block__btn">
                  Блокчейн
                </button>
                <button class="btn btn-outline-success student-block__btn">
                  Дополненная реальность
                </button>
              </div>
              <h4> Заполни резюме и проект найдет себя сам!</h4>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Header from '@/components/header'
export default {
  data () {
    return {
      formRegister: {
        name: '',
        password: ''
      }
    }
  },
  components: {
    Header
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

<style lang="scss">
.main-btn-primary {
  background: #7749F8 !important;
  color: #fff !important;

  &:hover,
  &:focus {
    background: #5227CC !important;
  }
}

.login-block {
  padding-top: 48px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  &__form {
    grid-column: 1 / 5;
  }

  &__main-picture {
    grid-column: 5 / 13;
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

  &__header {
    font-weight: 300;
    font-size: 46px;
    line-height: 68px;
    color: #1F1983;
  }
}

.student {
  background: rgba(82, 168, 116, 0.05);
  padding: 60px 0;
  &-block {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    &-info {
      width: 100%;
      font-weight: 300;
      font-size: 48px;
      line-height: 68px;
    }
    &__info {
      grid-column: 1 / 5;
    }

    &__tags {
      grid-column: 7 / 13;
    }

    &__btn {
      margin-bottom: 20px;
    }
  }

}

.basic-margin {
  margin-bottom: 20px;
}
</style>
