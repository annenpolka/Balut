<template>
  <div class="book-card">
    <textarea
      class="card-input"
      type="text"
      :placeholder="placeholder"
      v-model="cardText"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardText: '',
      placeholder: '文字を入力',
    };
  },
};
</script>

<style lang="scss" scoped>
.book-card {
  @apply transition-all duration-100 max-w-sm overflow-hidden rounded shadow-lg p-3 my-3 bg-gray-100;

  &:hover {
    @apply bg-white;
  }
}

.card-input {
  @apply resize-none transition-all duration-100 w-full bg-transparent border-transparent;

  &:focus {
    @apply outline-none;
  }
}
</style>
