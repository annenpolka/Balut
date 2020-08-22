<template>
  <div class="book-section">
    <ul>
      <li>BookTitle</li>
    </ul>
    <BookCard></BookCard>
    <BookCard></BookCard>
    <BookCard></BookCard>
  </div>
</template>

<script>
import BookCard from './BookCard';
export default {
  components: {
    BookCard,
  },
};
</script>

<style lang="scss" scoped>
.book-section {
  @apply bg-gray-400 box-content w-3/12 max-w-sm p-2 rounded;
}
</style>
