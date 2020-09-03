<template>
  <div class="book-section">
    <p @click="updateSelectedIndex()">{{ title }}</p>
    <template v-if="index === selectedIndex">
      <book-card
        v-for="bookCard in bookCards"
        :cardText="bookCard.text"
        :key="bookCard.id"
        @card-update="updateCard($event, bookCard)"
      ></book-card>
    </template>
  </div>
</template>

<script>
import BookCard from './BookCard';
export default {
  name: 'BookSection',
  components: {
    BookCard,
  },
  props: ['bookCards', 'title', 'index', 'selectedIndex'],
  methods: {
    updateCard($event, bookCard) {
      console.log($event);
      bookCard.text = $event;
    },
    updateSelectedIndex() {
      this.$emit('selected-update', this.index);
    },
  },
};
</script>

<style lang="scss" scoped>
.book-section {
  @apply box-content py-1 my-2 bg-gray-400 shadow-sm;
}
</style>
