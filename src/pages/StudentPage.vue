<template>
  <div class="">
    <Header />
    <main class="searching">
      <div class="container">
        <h2>
          Подборка резюме
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
        <div class="student-list">
          <StudentCard v-for="item in items" :key="item.text" :info="item" />
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
import StudentCard from '@/components/studentCard'
import Anya from '@/assets/anya.jpg'
import Artem from '@/assets/artem.jpg'
import Nikita from '@/assets/nikita.jpg'

export default {
  data () {
    return {
      items: [
        {
          url: Anya,
          name: 'Аня',
          surname: 'Коркина',
          worker: 'Senior backend developer',
          rating: 4.8
        },
        {
          url: Artem,
          name: 'Артём',
          surname: 'Самойлин',
          worker: 'Team Lead  •  Backend  •  Designer',
          rating: 4.7
        },
        {
          url: Nikita,
          name: 'Никита',
          surname: 'Гурьянов',
          worker: 'Senior frontend developer',
          rating: 4.9
        }
      ]
    }
  },
  components: {
    Header,
    Footer,
    StudentCard
  }
}
</script>
<style lang="scss">
.searching {
  padding-top: 120px;
  padding-bottom: 60px;
}

.student-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
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
</style>
