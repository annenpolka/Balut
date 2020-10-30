<template>
  <div class="book-section">
    <p @click="updateSelectedIndex()">{{ title }}</p>
    <template v-if="isSelectedId">
      <CreateNewTextArea
        :placeholder="placeholder"
        @my-submit="createCard"
      ></CreateNewTextArea>
      <book-card
        v-for="bookCard in reverseBookCards"
        :cardText="bookCard.text"
        :cardId="bookCard.id"
        :parentBookId="bookCard.parentBookId"
        :parentSectionId="bookCard.parentSectionId"
        :key="bookCard.id"
        @card-update="updateCard($event, bookCard)"
        @card-delete="deleteCard($event)"
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
  props: ['bookCards', 'title', 'index', 'id', 'selectedId'],
  data() {
    return {
      placeholder: 'put your thoughts',
    };
  },
  computed: {
    reverseBookCards() {
      return this.bookCards.slice().reverse();
    },
    isSelectedId() {
      return this.id === this.selectedId;
    },
  },
  methods: {
    updateCard($event, bookCard) {
      console.log($event);
      bookCard.text = $event;
    },
    deleteCard($event) {
      console.log($event);
      const newBookCards = this.bookCards.filter(
        (bookCard) => bookCard.id !== $event
      );
      this.$emit('section-update', newBookCards);
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
      this.$emit('selected-update', this.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.book-section {
  @apply box-content p-1 my-2 bg-gray-400 shadow-sm rounded;
}
</style>
