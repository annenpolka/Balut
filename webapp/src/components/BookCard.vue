<template>
  <div @my-click="cardClicked" class="book-card">
    <component
      :is="cardStatus"
      :cardText="cardText"
      :cardId="cardId"
      @card-update="updateCard"
      @my-delete="deleteCard"
    ></component>
  </div>
</template>

<script>
import BookCardTextarea from './BookCardTextarea';
import BookCardContent from './BookCardContent';
export default {
  components: {
    BookCardTextarea,
    BookCardContent,
  },
  props: {
    cardText: String,
    cardId: Number,
    parentBookId: Number,
    parentSectionId: Number,
  },
  data() {
    return {
      isBeingEdited: false,
    };
  },
  computed: {
    cardStatus() {
      return this.isBeingEdited ? BookCardTextarea : BookCardContent;
    },
  },
  methods: {
    cardClicked() {
      this.$emit('my-click', {
        parentBookId: this.parentBookId,
        parentSectionId: this.parentSectionId,
      });
      this.isBeingEdited = true;
    },
    updateCard($event) {
      this.$emit('card-update', $event);
      this.isBeingEdited = false;
    },
    deleteCard($event) {
      this.$emit('card-delete', $event);
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  @apply transition-all duration-100;
}

.book-card {
  @apply p-3 m-3 overflow-hidden whitespace-pre-wrap bg-gray-100 rounded shadow-lg text-black;

  &:hover {
    @apply bg-white;
  }
}
</style>
