<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
  font-family: 'Inter', sans-serif;
}

.main-container {
  max-width: 1440px;
  padding-left: 30px;
  padding-right: 30px;
  margin: 0 auto;
}

.main-btn-primary {
  background: #7749F8;

  &:hover, &:focus {
    background: #5227CC;
    color: #fff
  }
}
</style>
