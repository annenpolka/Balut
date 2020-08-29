<template>
  <div class="book-section">
    <ul>
      <li>BookSectionTitle</li>
    </ul>
    <BookCard
      v-for="bookCard in bookCards"
      :text="bookCard.text"
      :key="bookCard.text"
      @card-submit="updateSection($event, bookCard)"
    ></BookCard>
  </div>
</template>

<script>
import BookCard from './BookCard';
export default {
  components: {
    BookCard,
  },
  data() {
    return {
      bookCards: [{ text: 'hoge' }, { text: 'foo' }, { text: 'bar' }],
    };
  },
  methods: {
    updateSection($event, bookCard) {
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
