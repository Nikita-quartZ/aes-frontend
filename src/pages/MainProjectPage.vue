<template>
  <div>
    <Header/>
    <main class="container">
      <div class="main-block__projects">
        <img :src="items[$route.params.id].url" alt="picture" class="main-block__projects-img">
        <div class="main-block__projects-info d-flex align-items-center flex-column basic-margin justify-content-center">
          <h2 class=""> {{ items[$route.params.id].text }}</h2>
          <p> Компания: {{ items[$route.params.id].company }}</p>
          <p>{{ items[$route.params.id].description }}</p>
          <span> Инвестиции: {{ items[$route.params.id].money }}</span>
          <p> Срок реализации: {{ items[$route.params.id].data }}</p>
          <b-button variant="outline-primary">Подробнее</b-button>
        </div>
      </div>
    </main>
    <Footer :fixed="true"/>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
import { mapState } from 'vuex'

export default {
  components: {
    Header,
    Footer
  },
  computed: {
    ...mapState('authorization', ['items'])
  }
}
</script>

<style lang="scss">

.main-block__projects{
  margin-top: 120px;
  min-height: 500px;
  width: 100%;
  background: var(--bs-gray-100);
  border-radius: 25px;
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(2, 1fr);
  padding: 30px;
}

.main-block__projects-img {
  grid-column: 1 / 2;
  width: 100%;
  max-height: 400px;
  height: 100%;
  object-fit: cover;
}

.main-block__projects-info {
  grid-column: 2 / 3;
}

.basic-margin {
  margin-bottom: 20px;
}
</style>
