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
  @apply box-content p-2 mx-1 my-2 bg-gray-400 rounded shadow-sm;
}
</style>
