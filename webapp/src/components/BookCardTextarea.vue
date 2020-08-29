<template>
  <textarea
    class="card-input"
    type="text"
    v-model="text"
    @keyup.ctrl.enter="submit"
  />
</template>

<script>
export default {
  props: ['cardText'],
  data() {
    return {
      text: this.cardText,
    };
  },
  methods: {
    submit($event) {
      this.$emit('card-submit', $event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  @apply transition-all duration-100;
}

.card-input {
  @apply resize-none w-full border-transparent;

  &:focus {
    @apply outline-none;
  }
}
</style>
