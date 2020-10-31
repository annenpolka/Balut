<template>
  <div class="flex justify-between">
    <div v-text="cardText" @click="cardClicked"></div>
    <font-awesome-icon
      icon="times"
      class="mt-1 text-lg text-gray-700"
      @click="deleteCard"
    ></font-awesome-icon>
  </div>
</template>

<script>
export default {
  props: {
    cardText: String,
    cardId: Number,
  },
  methods: {
    cardClicked() {
      this.$emit('my-click');
    },
    deleteCard() {
      console.log(this.cardId);
      this.$emit('my-delete', this.cardId);
    },
  },
};
</script>
