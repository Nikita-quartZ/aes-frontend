<template>
  <div class="">
    <Header />
    <main class="searching">
      <div class="container">
        <h2>
          Поиск проектов
        </h2>
        <div class="d-flex w-100 ">
          <input type="text" class="search-input">
          <button class="search-btn">
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.25 11.0834L20.5833 11.0834" stroke="#33363F" stroke-width="2" stroke-linecap="round" />
              <path d="M14.25 23.75L19 23.75" stroke="#33363F" stroke-width="2" stroke-linecap="round" />
              <path d="M14.25 17.4166L23.75 17.4166" stroke="#33363F" stroke-width="2" stroke-linecap="round" />
              <path
                d="M30.0833 17.4167V10.75C30.0833 7.92157 30.0833 6.50736 29.2047 5.62868C28.326 4.75 26.9118 4.75 24.0833 4.75H13.9167C11.0882 4.75 9.67403 4.75 8.79535 5.62868C7.91667 6.50736 7.91667 7.92157 7.91667 10.75V27.25C7.91667 30.0784 7.91667 31.4926 8.79535 32.3713C9.67403 33.25 11.0882 33.25 13.9167 33.25H19"
                stroke="#33363F" stroke-width="2" />
              <circle cx="27.7083" cy="27.7083" r="3.95833" stroke="#33363F" stroke-width="2" />
              <path d="M33.25 33.25L30.875 30.875" stroke="#33363F" stroke-width="2" stroke-linecap="round" />
            </svg>
          </button>
          <b-button variant="outline-secondary" class="filter-btn">
            <i class="fa-solid fa-filter"></i>
            Фильтры
          </b-button>
        </div>
        <div class="search__main-block">
          <div class="search__main-search">

            <div class="project-list">
              <ProjectCard v-for="item in items" :key="item.text" :info="item" />
            </div>
          </div>
          <div class="search__main-project">
            <ProjectCardPremium :key="premiumItem.text" :info="premiumItem" />
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
import ProjectCard from '@/components/projectCard'
import ProjectCardPremium from '@/components/projectCardPremium'

export default {
  data () {
    return {
      premiumItem: {
        url: 'https://phonoteka.org/uploads/posts/2021-07/1625517350_6-phonoteka-org-p-robototekhnika-zastavka-krasivie-zastavki-6.jpg',
        header: 'Роботы для выгула собак',
        text: 'Искусственный интеллект принимает разные формы и часто находит своё воплощение в строчках кода, которые управляют сложными машинами и программами deep learning. Чаще всего угрозу со стороны искусственного интеллекта люди представляют в виде гуманоидных машин, то есть роботов, которые используют свою силу, чтобы поработить своих создателей.',
        company: 'ООО “Нанотехнологии”',
        amount: 225
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
  components: {
    Header,
    Footer,
    ProjectCard,
    ProjectCardPremium
  }
}
</script>
<style lang="scss">
.searching {
  padding-top: 120px;
  padding-bottom: 60px;
}

.search-input {
  width: 80%;
  background: #FFFFFF;
  border: 1px solid #CED4DA;
  border-radius: 4px 0 0 4px;
  height: 50px;
  outline: none;
  padding-left: 20px;
  font-size: 24px;
  margin-bottom: 40px;
}

.search-btn {
  background: #F8F9FA;
  width: 68px;
  display: block;
  margin-right: auto;
  background: #FFFFFF;
  border: none;
  border: 1px solid #CED4DA;
  border-left: none;
  border-radius: 0 4px 4px 0;
  height: 50px;
  font-size: 24px;
  margin-bottom: 40px;
}

.filter-btn {
  margin-left: auto;
  margin-bottom: 40px;
}

.project-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
}

.search__main-block {
  display: flex;
}

.search__main-search {
  width: 67%;
  padding-right: 30px;
}

.search__main-project {
  width: 33%;
}
</style>
