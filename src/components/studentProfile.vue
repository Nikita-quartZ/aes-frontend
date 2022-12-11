<template>
  <main>
    <section class="container profile">
      <div class="profile__photo-block">
        <img :src="info.image" alt="profile-photo" class="basic-margin">
        <h3 class=" text-center">
          {{ info.surname }} {{ info.name }}
        </h3>
        <span class="profile__role">
          Студент
        </span>
        <span class="profile__star basic-margin text-warning">
          <i class="fa-solid fa-star"></i> 4.8
        </span>
        <button class="btn w-100 basic-margin" :class="{ 'btn-primary': !edit, 'btn-outline-primary': edit }"
          @click="edit = !edit">
          Редактировать
        </button>
        <b-link class="btn btn-primary w-100 basic-margin" href="#project">
          Мои проекты
        </b-link>
        <button class="btn btn-outline-danger w-100 basic-margin" @click="goToMain">
          Выйти
        </button>
      </div>
      <div class="profile__info-block">
        <h2 class="text-center" v-if="!edit">Ваш профиль</h2>
        <h2 class="text-center" v-else>Редактирование профиля</h2>
        <div class="profile__decorate-block basic-margin" v-if="edit">
          <h4>
            Личная информация
          </h4>
          <span>Имя</span>
          <b-input v-model="info.name" class="basic-margin" />
          <span>Фамилия</span>
          <b-input v-model="info.surname" class="basic-margin" />
          <span>Отчество</span>
          <b-input v-model="info.lastname" class="basic-margin" />
          <span>Пол</span>
          <b-form-select :options="options" v-model="chooseGender" class="form-select basic-margin" />
          <div class="d-flex flex-column">
            <span>Дата рождения</span>
            <b-calendar v-model="info.birthday" locale="ru-RU" block class="2-100"></b-calendar>
          </div>

        </div>
        <div class="profile__decorate-block basic-margin">
          <h4>
            Обо мне
          </h4>
          <p v-html="aboutMe" v-if="!edit" />
          <b-form-textarea v-else v-model="info.aboutMe" id="textarea-rows" placeholder="Расскажи о себе..."
            rows="16"></b-form-textarea>
        </div>
        <div class="profile__decorate-block basic-margin">
          <h4 class="basic-margin">
            Навыки и интересы
          </h4>
          <div class="d-flex justify-content-left flex-wrap basic-margin">
            <b-button variant="outline-success" size="sm"
              class="profile__tags-block basic-margin-right basic-margin-mini" v-for="(item, index) in info.tags"
              :key="item" @click="deleteTag(index)">
              {{ item }}
            </b-button>
          </div>
          <b-input class="basic-margin" @keyup.enter="addTags" v-model="tagText" v-if="edit" />
        </div>

        <div class="profile__decorate-block basic-margin" v-if="!edit">
          <h4 class="basic-margin" id="project">
            Мои проекты
          </h4>
          <div class="d-flex">
            <Card v-for="item in items" :key="item.text" :info="item" class="card-margin-right" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapMutations } from 'vuex'
import Card from '@/components/projectCard'

export default {
  data () {
    return {
      edit: false,
      options: [
        { value: 'male', text: 'Мужской' },
        { value: 'female', text: 'Женский' }
      ],
      chooseGender: 'male',
      role: ['Студент', 'HR-специалист'],
      tagText: '',
      info: {
        name: 'Никита',
        surname: 'Гурьянов',
        lastname: 'Валерьевич',
        birthday: '2003-06-23',
        image: 'https://cdn.tkaner.com/wp/uploads/2019/04/1-ochki-muzhchina.jpg',
        tags: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'Vue'],
        aboutMe: 'Владею следующими навыками:\n\n1. Адаптивная, кроссбраузерная, семантическая верстка\n\n2. Pixel Perfect верстка\n\n3. Работа с макетами в Photoshop, Figma\n\n4. Владение Flexbox, grid\n\n5. Работа с препроцессорами Sass/Scss\n\n6. Обеспечение доступности элементов страницы\n\n7. Применение grid-сеток\n\n8. Верстка писем\n\n9. JavaScript ES6+ (в т. ч. классы, промисы, модули)\n\n10. Работа со сторонними API\n\n11. Vue, VueX, Vue-Router\n\n12.Настройка сборки в Webpack, gulp\n\n13.Работа с системами контроля версий (Git)\n\n14. jQuery\n\n15. Unit - тесты, e2e - тесты\n\nМой опыт в верстке сайтов более 2 лет. Меня заинтересовала Frontend разработка, потому что я люблю создавать красивые сайты со сложной и интересной логикой. Мои цели на ближайшее время – активно прокачивать свои навыки в работе с фреймворком Vue, продвигаться во Frontend и в дальнейшем стать Fullstack разработчиком.\nТакже делал простые проекты для своего вуза отдельно от учебы на Vue 2. Преимущественно работаю с Vue 2, но готов перейти быстро на Vue 3 при необходимости. Постоянно расширяю свои знания в том числе в backend часть, изучаю Python Flask, в будущем планирую учить Fast API и фреймворк Django.\n\nК своим сильным сторонам могу отнести навыки работы в команде, способность самостоятельно искать ресурсы помогающие решить проблему или повысить мой профессиональный уровень, сильный интерес к разработке интерфейсов.\n\nРассматриваю стажировку или удаленную работу'
      },
      items: [
        {
          url: 'https://mobimg.b-cdn.net/v3/fetch/89/89b1452e43e738be92c573fdebfb1d22.jpeg',
          text: 'Роботы для выгула собак',
          company: 'ООО “Нанотехнологии”',
          amount: 225
        },
        {
          url: 'https://mobimg.b-cdn.net/v3/fetch/89/89b1452e43e738be92c573fdebfb1d22.jpeg',
          text: 'Роботы для выгула собак',
          company: 'ООО “Нанотехнологии”',
          amount: 225
        },
        {
          url: 'https://mobimg.b-cdn.net/v3/fetch/89/89b1452e43e738be92c573fdebfb1d22.jpeg',
          text: 'Роботы для выгула собак',
          company: 'ООО “Нанотехнологии”',
          amount: 225
        },
        {
          url: 'https://mobimg.b-cdn.net/v3/fetch/89/89b1452e43e738be92c573fdebfb1d22.jpeg',
          text: 'Роботы для выгула собак',
          company: 'ООО “Нанотехнологии”',
          amount: 225
        }
      ]
    }
  },
  props: {
    // info: Object
  },
  components: {
    Card
  },
  methods: {
    ...mapMutations('authorization', ['logout']),
    goToMain () {
      this.logout()
      const newPath = '/'
      this.$router.push(newPath)
    },
    addTags () {
      if (this.tagText) {
        this.info.tags.push(this.tagText)
        this.tagText = ''
      }
    },
    deleteTag (id) {
      this.info.tags = this.info.tags.filter((_item, index) => index !== id)
    }
  },
  computed: {
    aboutMe () {
      return this.info.aboutMe.replaceAll('\n', '<br/>')
    }
  }
}
</script>

<style lang="scss" scoped>
.profile__decorate-block {
  padding: 15px;
  border-radius: 20px;
  background: var(--bs-gray-100);
}

.profile__role {
  color: var(--bs-dark);
  display: block;
  text-align: center;
  font-size: 24px;
}

.profile__star {
  color: var(--bs-blue);
  display: block;
  text-align: center;
}

.profile {
  padding-top: 120px;
  padding-bottom: 60px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  &__photo-block {
    grid-column: 1 / 4;

    & img {
      width: 100%;
      border-radius: 50%;
    }
  }

  &__info-block {
    grid-column: 5 / 13;
  }
}

.basic-margin {
  margin-bottom: 20px;
}

.basic-margin-mini {
  margin-bottom: 10px;
}

.basic-margin-right {
  margin-right: 15px;
}

.card-margin-right:not(:last-child) {
  margin-right: 15px;
}
</style>
