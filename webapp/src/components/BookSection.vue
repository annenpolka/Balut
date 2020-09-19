<template>
  <div class="book-section">
    <p @click="updateSelectedIndex()">{{ title }}</p>
    <template v-if="isSelectedIndex">
      <CreateNewTextArea
        :placeholder="placeholder"
        @my-submit="createCard"
      ></CreateNewTextArea>
      <book-card
        v-for="bookCard in reverseBookCards"
        :cardText="bookCard.text"
        :key="bookCard.id"
        @card-update="updateCard($event, bookCard)"
      ></book-card>
    </template>
  </div>
</template>

<script>
import BookCard from './BookCard';
import CreateNewTextArea from './CreateNewTextArea';
export default {
  name: 'BookSection',
  components: {
    BookCard,
    CreateNewTextArea,
  },
  props: ['bookCards', 'title', 'index', 'selectedIndex'],
  data() {
    return {
      placeholder: 'put your thoughts',
    };
  },
  computed: {
    reverseBookCards() {
      return this.bookCards.slice().reverse();
    },
    isSelectedIndex() {
      return this.index === this.selectedIndex;
    },
  },
  methods: {
    updateCard($event, bookCard) {
      console.log($event);
      bookCard.text = $event;
    },
    createCard($event) {
      const id = this.bookCards.length + 1;
      const text = $event;
      const newCard = {
        id,
        text,
      };
      this.bookCards.push(newCard);
    },
    updateSelectedIndex() {
      this.$emit('selected-update', this.index);
    },
  },
};
</script>

<style lang="scss" scoped>
.book-section {
  @apply box-content p-1 my-2 bg-gray-400 shadow-sm rounded;
}
</style>
