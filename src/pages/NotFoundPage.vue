<template>
  <div>
    <Header />
    <main class="notFoundPage container d-flex justify-content-center align-items-center">
      <div class="d-flex flex-column justify-content-center align-items-center">
        <img src="@/assets/logo.svg" alt="logo" class="notFoundPage__logo">
        <h1>Страница не найдена</h1>
      </div>
    </main>
    <Footer :fixed="true" />
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
.notFoundPage {
  padding-top: 300px;
}

.notFoundPage__logo {
  width: 400px;
}
</style>
