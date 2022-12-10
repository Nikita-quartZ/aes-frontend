<template>
  <div class="card">
    <img :src="info.url" alt="image">
    <div class="card__info">
      <h6 class="card__header">
        {{ info.text }}
      </h6>
      <p class="card__company">
        {{ info.company }}
      </p>
      <p class="card__amount">
        {{ info.amount }} заявок
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: Object
  }
}
</script>

<style lang="scss">
.card {
  border: 1px solid #B3B3B3;
  border-radius: 8px;
  overflow: hidden;

  &__info {
    padding: 0 15px;
    padding-top: 10px;
  }

  &__header {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #1F1983;
  }

  &__company {
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    margin-right: 0 !important;
  }
}
</style>
