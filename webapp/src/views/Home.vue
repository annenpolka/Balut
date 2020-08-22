<template>
  <div class="container mx-auto bg-gray-200">
    <p class="hello">Hello TailWind</p>
    <BookCard></BookCard>
  </div>
</template>

<script>
import BookCard from '@/components/BookCard.vue';
export default {
  components: {
    BookCard,
  },
};
</script>

<style lang="scss" scoped>
.hello {
  @apply text-6xl font-bold text-center;
}
</style>
