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
      <section class="projects">
        <div class="container">
          <div class="d-flex justify-content-between basic-margin">
            <h2>Топ проектов</h2>
            <router-link class="btn btn-outline-dark" tag="button" :to="{name: 'ProjectPage'}">
              Посмотреть все
            </router-link>
          </div>
          <div class="projects__cards">
            <ProjectCard v-for="item in items" :key="item.text" :info="item" />
          </div>
        </div>
      </section>
      <section class="Crowdfunding">
        <div class="container">
          <div class="Crowdfunding__info">
            <h2 class="Crowdfunding__info-header basic-margin">
              Краудфандинг
            </h2>
            <p class="Crowdfunding__info-paragraph basic-margin">
              Найдите инвесторов для реализации технологических и творческих идей
            </p>
            <button class="btn main-btn-primary w-100">
              Создать проект
            </button>
          </div>
          <div class="Crowdfunding__icons d-flex justify-content-between align-items-center">
            <div class="icon-block d-flex flex-column align-items-center">
              <img src="@/assets/rocket.png" alt="Rocket">
              <p class="icon-block-number">65</p>
              <p class="icon-block-paragraph">завершенных проектов</p>
            </div>
            <div class="icon-block d-flex flex-column align-items-center">
              <img src="@/assets/money.png" alt="Rocket">
              <p class="icon-block-number">10 млн ₽</p>
              <p class="icon-block-paragraph">Привлеченных Инвестиций</p>
            </div>
            <div class="icon-block d-flex flex-column align-items-center">
              <img src="@/assets/worker.png" alt="Rocket">
              <p class="icon-block-number">120</p>
              <p class="icon-block-paragraph">Компаний</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
import ProjectCard from '@/components/projectCard.vue'
import dnk from '@/assets/dnk.jpg'
import dog from '@/assets/dog.jpg'
import med from '@/assets/med.jpg'
import mobile from '@/assets/mobile.jpg'
import veter from '@/assets/veter.jpg'
import ximia from '@/assets/ximia.jpg'

export default {
  data () {
    return {
      formRegister: {
        name: '',
        password: ''
      },
      items: [
        {
          url: dnk,
          text: 'Deeploid',
          company: 'Генотек',
          money: '1.2 млн р.',
          data: 'Сертябрь 2024',
          amount: 3453
        },
        {
          url: dog,
          text: 'SimpPet',
          company: 'TEDDY FOOD',
          money: '5.0 млн р.',
          data: 'Январь 2025',
          amount: 9781
        },
        {
          url: veter,
          text: 'Energy AI',
          company: 'L-Charge',
          money: '0.5 млн р.',
          data: 'Июнь 2023',
          amount: 1423
        },
        {
          url: med,
          text: 'Artificial Crystal',
          company: 'Welltory',
          money: '1.4 млн р.',
          data: 'Сертябрь 2023',
          amount: 754
        },
        {
          url: mobile,
          text: 'GLUOM',
          company: 'Revolut',
          money: '1.5 млн р.',
          data: 'Сертябрь 2023',
          amount: 6431
        },
        {
          url: ximia,
          text: 'Med Data',
          company: 'Paithology',
          money: '3.0 млн р.',
          data: 'Сертябрь 2023',
          amount: 1322
        }
      ]
    }
  },
  components: {
    Header,
    Footer,
    ProjectCard
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
  padding-top: 118px;
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

.projects {
  padding: 60px 0;

  &__cards {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 10px;
  }
}

.Crowdfunding {
  padding: 60px 0;
  background: linear-gradient(270.96deg, rgba(122, 77, 236, 0.7) 0.82%, rgba(246, 243, 254, 0.7) 99.41%);

  & .container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }

  &__info {
    grid-column: 1 / 5;
  }

  &__icons {
    grid-column: 6 / 13;
  }

  &__info-header {
    font-weight: 300;
    font-size: 48px;
    line-height: 68px;
    color: #1F1983;
  }

  &__info-paragraph {
    font-weight: 300;
    font-size: 28px;
    line-height: 49px;
    color: #000000;
  }
}

.icon-block {
  padding: 35px;
  width: 240px;
  height: 240px;
  background: #FFFFFF;
  border-radius: 16px;
}

.icon-block-number {
  font-weight: 700;
  font-size: 38px;
  line-height: 46px;
  color: #000000;
  margin-bottom: 10px;
}

.icon-block-paragraph {
  font-weight: 400;
  font-size: 22px;
  line-height: 27px;
  text-align: center;
  color: #000000;
}

.basic-margin {
  margin-bottom: 20px;
}
</style>
