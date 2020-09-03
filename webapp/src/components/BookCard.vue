<template>
  <div @click="startEditingCard">
    <component
      class="book-card"
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
    startEditingCard() {
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
  @apply max-w-sm p-3 my-3 overflow-hidden whitespace-pre-wrap bg-gray-100 rounded shadow-lg;

  &:hover {
    @apply bg-white;
  }
}
</style>
