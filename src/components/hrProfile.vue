<template>
  <main>
    <section class="container profile">
      <div class="profile__photo-block">
        <img :src="info.image" alt="profile-photo" class="basic-margin">
        <h3 class=" text-center">
          {{ info.surname }} {{ info.name }}
        </h3>
        <span class="profile__role">
          {{ role }}
        </span>

        <span class="profile__role">
          {{ company }}
        </span>
        <span class="profile__star basic-margin text-warning">
          <i class="fa-solid fa-star"></i> 4.8
        </span>
        <button class="btn w-100 basic-margin" :class="{ 'btn-primary': !edit, 'btn-outline-primary': edit }"
          @click="edit = !edit">
          Редактировать
        </button>
        <b-link class="btn w-100 basic-margin" :class="{ 'btn-primary': !edit, 'btn-outline-primary': edit }"
          href="#project" @click="vacancyChange">
          Отклики на вакансии проектов
        </b-link>
        <button class="btn btn-outline-danger w-100 basic-margin" @click="goToMain">
          Выйти
        </button>
      </div>
      <div class="profile__info-block" v-if="!viewVacancy">
        <h2 class="text-center" v-if="!edit">Профиль Компании</h2>
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

        <div class="profile__decorate-block basic-margin" v-if="!edit">
          <h4 class="basic-margin" id="project">
            Активные проекты
          </h4>
          <div class="d-flex">
            <Card v-for="item in items" :key="item.text" :info="item" class="card-margin-right" />
          </div>
        </div>

        <div class="profile__decorate-block basic-margin" v-if="!edit">
          <h4 class="basic-margin" id="project">
            Отклики на вакансии проектов
          </h4>
          <b-list-group v-if="vacancy.length">
            <b-list-group-item v-for="(item, index) in vacancy" :key="item.name">
              <div class="d-flex  align-items-center">
                <h6 class="vacancy__name">{{ item.surname }} {{ item.name }}</h6>
                <p class="vacancy__project basic-margin-right">{{ item.project }}</p>
                <span class="text-warning basic-margin-right">
                  <i class="fa-solid fa-star"></i>
                  {{ item.rating }}
                </span>
                <b-button variant="outline-danger" @click="deleteVacancy(index)">
                  <i class="fa-solid fa-xmark"></i>
                </b-button>
              </div>
            </b-list-group-item>
          </b-list-group>
          <h5 v-else>
            Пока что нет откликов:(
          </h5>
        </div>

        <div class="profile__decorate-block basic-margin" v-if="!edit">
          <h4 class="basic-margin" id="project">
            Законченные проекты
          </h4>
          <div class="d-flex">
            <Card v-for="item in itemsEnd" :key="item.text" :info="item" class="card-margin-right" />
          </div>
        </div>
        <div class="profile__decorate-block basic-margin">
          <h4 class="basic-margin">
            Интересы компании
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
      </div>
      <div class="profile__info-block profile__decorate-block basic-margin w-100" v-else>
        <h4 class="basic-margin" id="project">
          Отклики на вакансии проектов
        </h4>
        <b-list-group v-if="vacancy.length">
          <b-list-group-item v-for="(item, index) in vacancy" :key="item.name">
            <div class="d-flex  align-items-center">
              <h6 class="vacancy__name">{{ item.surname }} {{ item.name }}</h6>
              <p class="vacancy__project basic-margin-right">{{ item.project }}</p>
              <span class="text-warning basic-margin-right">
                <i class="fa-solid fa-star"></i>
                {{ item.rating }}
              </span>
              <b-button variant="outline-danger" @click="deleteVacancy(index)">
                <i class="fa-solid fa-xmark"></i>
              </b-button>
            </div>
          </b-list-group-item>
        </b-list-group>
        <h5 v-else>
          Пока что нет откликов:(
        </h5>
      </div>
    </section>
  </main>
</template>

<script>
import { mapMutations } from 'vuex'
import Card from '@/components/projectCard'
import dnk from '@/assets/dnk.jpg'
import dog from '@/assets/dog.jpg'
import med from '@/assets/med.jpg'
import mobile from '@/assets/mobile.jpg'
import veter from '@/assets/veter.jpg'
import ximia from '@/assets/ximia.jpg'

export default {
  data () {
    return {
      viewVacancy: false,
      edit: false,
      options: [
        { value: 'male', text: 'Мужской' },
        { value: 'female', text: 'Женский' }
      ],
      chooseGender: 'male',
      role: 'HR-специалист',
      tagText: '',
      vacancy: [
        {
          name: 'Артем',
          surname: 'Самойлин',
          project: 'Backend для CarHelp приложения',
          rating: 4.5
        },
        {
          name: 'Никита',
          surname: 'Гурьянов',
          project: 'Frontend для CarHelp приложения',
          rating: 4.9
        },
        {
          name: 'Аня',
          surname: 'Коркина',
          project: 'Backend для CarHelp приложения',
          rating: 4.6
        }
      ],
      info: {
        name: 'Никита',
        surname: 'Гурьянов',
        lastname: 'Валерьевич',
        birthday: '2003-06-23',
        image: 'https://cdn.tkaner.com/wp/uploads/2019/04/1-ochki-muzhchina.jpg',
        tags: ['Создание веб-приложений', 'Создание мобильных приложений', 'Разработка програмного обеспечения'],
        aboutMe: 'Владею следующими навыками:\n\n1. Адаптивная, кроссбраузерная, семантическая верстка\n\n2. Pixel Perfect верстка\n\n3. Работа с макетами в Photoshop, Figma\n\n4. Владение Flexbox, grid\n\n5. Работа с препроцессорами Sass/Scss\n\n6. Обеспечение доступности элементов страницы\n\n7. Применение grid-сеток\n\n8. Верстка писем\n\n9. JavaScript ES6+ (в т. ч. классы, промисы, модули)\n\n10. Работа со сторонними API\n\n11. Vue, VueX, Vue-Router\n\n12.Настройка сборки в Webpack, gulp\n\n13.Работа с системами контроля версий (Git)\n\n14. jQuery\n\n15. Unit - тесты, e2e - тесты\n\nМой опыт в верстке сайтов более 2 лет. Меня заинтересовала Frontend разработка, потому что я люблю создавать красивые сайты со сложной и интересной логикой. Мои цели на ближайшее время – активно прокачивать свои навыки в работе с фреймворком Vue, продвигаться во Frontend и в дальнейшем стать Fullstack разработчиком.\nТакже делал простые проекты для своего вуза отдельно от учебы на Vue 2. Преимущественно работаю с Vue 2, но готов перейти быстро на Vue 3 при необходимости. Постоянно расширяю свои знания в том числе в backend часть, изучаю Python Flask, в будущем планирую учить Fast API и фреймворк Django.\n\nК своим сильным сторонам могу отнести навыки работы в команде, способность самостоятельно искать ресурсы помогающие решить проблему или повысить мой профессиональный уровень, сильный интерес к разработке интерфейсов.\n\nРассматриваю стажировку или удаленную работу'
      },
      items: [
        {
          id: 4,
          url: mobile,
          text: 'GLUOM',
          company: 'Revolut',
          money: '1.5 млн р.',
          data: 'Сертябрь 2023',
          description: 'Использование «умных» шаблонов вместо Ворда ускоряет подготовку сложных документов на несколько десятков страниц А4, а также упрощает ежедневную подготовку трех-четырех документов с десятком страниц.',
          amount: 6431
        },
        {
          id: 5,
          url: ximia,
          text: 'Med Data',
          company: 'Paithology',
          money: '3.0 млн р.',
          data: 'Сертябрь 2023',
          description: 'Программа с помощью нейросетей классифицирует процессы по морфологической картине в гистологическом, цитологическом, иммуногистохимическом или цитогенетическом микропрепарате.',
          amount: 1322
        },
        {
          id: 2,
          url: veter,
          text: 'Energy AI',
          company: 'L-Charge',
          money: '0.5 млн р.',
          data: 'Июнь 2023',
          description: 'Компания L-Charge была создана в 2020 году, а летом 2021 года презентовала технологию сверхбыстрой зарядки. В ее основе — мини-электростанция на сжиженном природном газе, при этом уже сейчас в ней предусмотрен вариант перехода на водород.',
          amount: 1423
        },
        {
          id: 1,
          url: dog,
          text: 'SimpPet',
          company: 'TEDDY FOOD',
          money: '5.0 млн р.',
          data: 'Январь 2025',
          description: 'TEDDY FOOD — это онлайн-платформа для помощи бездомным животным. Она устроена так: человек заходит к нам на сайт и выбирает питомца, за которым будет наблюдать через видеокамеры, установленные в вольерах. Можно купить питомцу корм или услуги по дополнительному уходу — за такие активности пользователи получают звания и баллы. Также животных можно навестить в приюте или забрать домой насовсем.',
          amount: 9781
        }
      ],
      itemsEnd: [
        {
          id: 0,
          url: dnk,
          text: 'Deeploid',
          company: 'Генотек',
          money: '1.2 млн р.',
          data: 'Сертябрь 2024',
          description: 'Около половины доходов «Генотеку» приносят исследования для научных лабораторий – например, компания изучала новые штаммы микроорганизмов, в частности туберкулеза, а также геном десятков онкологических пациентов, с анализом их опухолей и здоровых клеток. Обращаются в «Генотек» и археологи – для ДНК-анализа найденных останков.  Средняя стоимость таких исследований – сотни тысяч рублей. Создатели проекта экспериментируют и сами – например, разрабатывают методы генотипирования для определения породы собак, но пока не встретили энтузиазма у заводчиков.',
          amount: 3453
        },
        {
          id: 1,
          url: dog,
          text: 'SimpPet',
          company: 'TEDDY FOOD',
          money: '5.0 млн р.',
          data: 'Январь 2025',
          description: 'TEDDY FOOD — это онлайн-платформа для помощи бездомным животным. Она устроена так: человек заходит к нам на сайт и выбирает питомца, за которым будет наблюдать через видеокамеры, установленные в вольерах. Можно купить питомцу корм или услуги по дополнительному уходу — за такие активности пользователи получают звания и баллы. Также животных можно навестить в приюте или забрать домой насовсем.',
          amount: 9781
        },
        {
          id: 2,
          url: veter,
          text: 'Energy AI',
          company: 'L-Charge',
          money: '0.5 млн р.',
          data: 'Июнь 2023',
          description: 'Компания L-Charge была создана в 2020 году, а летом 2021 года презентовала технологию сверхбыстрой зарядки. В ее основе — мини-электростанция на сжиженном природном газе, при этом уже сейчас в ней предусмотрен вариант перехода на водород.',
          amount: 1423
        },
        {
          id: 3,
          url: med,
          text: 'Artificial Crystal',
          company: 'Welltory',
          money: '1.4 млн р.',
          data: 'Сертябрь 2023',
          description: 'Пользователю нужно каждое утро прикладывать палец к камере смартфона на две минуты. Так сервис измеряет амплитуду сердечного ритма, чтобы затем проанализировать данные и показать инфографику с результатами. Работа сердца управляется двумя отделами вегетативной нервной системы: симпатическим и парасимпатическим. Во время стресса активнее работает симпатическая система — она запускает выработку норадреналина. Из-за этого сердце бьется быстрее. Парасимпатическая система замедляет сердечный ритм.',
          amount: 754
        }
      ]
    }
  },
  props: {
    fixed: Boolean
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
    },
    deleteVacancy (id) {
      this.vacancy = this.vacancy.filter((_item, index) => index !== id)
    },
    vacancyChange () {
      this.viewVacancy = !this.viewVacancy
      const newFixed = !this.fixed
      this.$emit('update:fixed', newFixed)
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
.vacancy__name {
  margin: 0;
  margin-right: auto;
}

.vacancy__project {
  margin: 0;
}

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
