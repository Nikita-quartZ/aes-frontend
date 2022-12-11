<template>
  <router-link class="card" :to="`/project/6`">
    <img :src="info.url" alt="image">
    <div class="card__info">
      <h5 class="card-premium__header">
        {{ info.header }}
      </h5>
      <p>
        {{ info.text }}
      </p>
      <p class="card__company">
        {{ info.company }}
      </p>
      <span class="card__amount card__mini">
        Инвестиции: {{ info.money }}
      </span>
      <p class="card__amount card__mini">
        Сроек реализации: {{ info.data }}
      </p>
      <p class="card__amount">
        {{ info.amount }} заявок
      </p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    info: Object
  }
}
</script>

<style lang="scss">
.card-premium {
  border: 1px solid #B3B3B3;
  border-radius: 8px;
  overflow: hidden;

  &__info {
    padding: 0 15px;
    padding-top: 10px;
  }

  &__header {
    font-weight: 500;
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
