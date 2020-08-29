<template>
  <div class="mx-auto bg-gray-200">
    <p class="hello">Hello TailWind</p>
    <Book></Book>
  </div>
</template>

<script>
import Book from '@/components/Book.vue';
export default {
  components: { Book },
};
</script>

<style lang="scss" scoped>
.hello {
  @apply text-6xl font-bold text-center;
}
</style>
