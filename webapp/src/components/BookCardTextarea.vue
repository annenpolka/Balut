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
    submit() {
      this.$emit('card-submit', this.text);
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  @apply transition-all duration-100;
}

.card-input {
  @apply resize-none w-full bg-transparent border-transparent;

  &:focus {
    @apply outline-none;
  }
}
</style>
