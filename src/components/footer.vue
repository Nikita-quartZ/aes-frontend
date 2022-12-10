<template>
  <footer>
    <div class="container d-flex align-items-center h-100">
      <router-link :to="{name: 'mainPage'}" class="logo">
        <img src="@/assets/footerLogo.svg" alt="logo">
      </router-link>
      <div class="social">
        <b-link class="social-icon" href="#">
          <i class="fa-brands fa-vk"></i>
        </b-link>
        <b-link class="social-icon" href="#">
          <i class="fa-brands fa-telegram"></i>
        </b-link>
        <b-link class="social-icon" href="#">
          <i class="fa-brands fa-square-odnoklassniki"></i>
        </b-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'footerBlock'
}
</script>

<style lang="scss">
footer {
  background: #000;
  height: 80px;
}

.social-icon {
  font-size: 40px;
  color: #fff;
  margin-right: 10px;
  transition: color .15s linear;

  &:hover {
    color: #7749F8;
  }

  &:focus {
    color: #5227CC;
  }
}

</style>
