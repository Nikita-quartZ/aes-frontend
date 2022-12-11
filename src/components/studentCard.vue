<template>
  <div class="card-student">
    <img :src="info.url" alt="image">
    <div class="card-student__info">
      <p class="card-student__worker">
        {{ info.worker }}
      </p>
      <div class="d-flex align-items-center justify-content-between">
        <h6 class="card-student__header">
          {{ info.surname }} {{ info.name }}
        </h6>
        <p class="card-student__rating-block">
          <img src="@/assets/star.png" alt="star">
          <span class="card-student__rating">{{ info.rating }}</span>
        </p>
      </div>
      <button class="check-btn">
        просмотреть резюме
      </button>
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
.check-btn {
  border: none;
  background: none;
  color: #1F1983;
  display: block;
  margin: 0 auto;
  margin-bottom: 15px;
}

.card-student {
  border: 1px solid #B3B3B3;
  border-radius: 8px;
  overflow: hidden;

  &__rating-block {
    position: relative;
  }

  &__info {
    padding: 0 15px;
    padding-top: 10px;
  }

  &__rating {
    font-weight: 700;
    font-size: 28px;
    color: #000000;
    position: absolute;
    top: 34px;
    left: 35px;
  }

  &__worker {
    font-size: 20px;
    line-height: 29px;
    color: #4A4A4A;
  }

  &__header {
    font-weight: 500;
    font-size: 32px;
    color: #000000;
  }

  &__company {
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    margin-right: 0 !important;
  }
}
</style>
