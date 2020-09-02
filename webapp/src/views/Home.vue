<template>
  <div class="mx-auto bg-gray-100">
    <p class="hello">Hello TailWind</p>
    <book-list></book-list>
  </div>
</template>

<script>
import BookList from '@/components/BookList.vue';
export default {
  components: { BookList },
};
</script>

<style lang="scss" scoped>
.hello {
  @apply text-6xl font-bold text-center;
}
</style>
