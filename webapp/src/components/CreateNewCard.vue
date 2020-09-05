<template>
  <textarea
    name="newCard"
    v-model="text"
    class="w-full h-10 py-2 my-2 overflow-hidden whitespace-pre-wrap bg-transparent bg-gray-100 shadow-xs outline-none resize-none"
    placeholder="new card..."
    @keyup.ctrl.enter="submit"
    @blur="drop"
  />
</template>

<script>
export default {
  data() {
    return {
      text: '',
    };
  },
  methods: {
    submit($event) {
      if ($event.target.value.length > 0) {
        this.$emit('card-create', $event.target.value);
        this.text = '';
      }
    },
    drop() {
      this.text = '';
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  @apply transition-all duration-100;
}
</style>
