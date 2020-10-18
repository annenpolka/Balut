<template>
  <div @click="cardClicked" class="book-card">
    <component
      :is="cardStatus"
      :cardText="cardText"
      @card-update="updateCard"
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
