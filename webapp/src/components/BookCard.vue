<template>
  <div @click="startEditingCard">
    <component
      class="book-card"
      :is="cardStatus"
      :cardText="cardText"
      @card-submit="updateCard"
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
  data() {
    return {
      cardText: 'default',
      isBeingEdited: false,
    };
  },
  computed: {
    cardStatus() {
      return this.isBeingEdited ? BookCardTextarea : BookCardContent;
    },
  },
  methods: {
    startEditingCard() {
      this.isBeingEdited = true;
    },
    updateCard(event) {
      this.cardText = event;
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
  @apply max-w-sm overflow-hidden rounded shadow-lg p-3 my-3 bg-gray-100 whitespace-pre-wrap;

  &:hover {
    @apply bg-white;
  }
}
</style>
