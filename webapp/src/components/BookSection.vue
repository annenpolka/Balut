<template>
  <div class="book-section">
    <p>{{ title }}</p>
    <BookCard
      v-for="bookCard in bookCards"
      :cardText="bookCard.text"
      :key="bookCard.id"
      @card-submit="updateCard($event, bookCard)"
    ></BookCard>
  </div>
</template>

<script>
import BookCard from './BookCard';
export default {
  components: {
    BookCard,
  },
  props: ['bookCards', 'title'],
  methods: {
    updateCard($event, bookCard) {
      console.log($event);
      bookCard.text = $event;
    },
  },
};
</script>

<style lang="scss" scoped>
.book-section {
  @apply bg-gray-400 box-content w-3/12 max-w-sm p-2 rounded;
}
</style>
