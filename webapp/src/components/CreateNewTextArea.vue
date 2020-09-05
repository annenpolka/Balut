<template>
  <textarea
    name="newCard"
    v-model="text"
    ref="newTextArea"
    class="w-full h-10 py-2 my-2 overflow-hidden whitespace-pre-wrap bg-transparent bg-gray-100 shadow-xs outline-none resize-none"
    @keyup.ctrl.enter="submit"
    @blur="onBlur"
  />
</template>

<script>
export default {
  mounted() {
    this.$refs.newTextArea.focus();
  },
  data() {
    return {
      text: '',
    };
  },
  methods: {
    submit($event) {
      if ($event.target.value.length > 0) {
        this.$emit('my-submit', $event.target.value);
        this.text = '';
      }
    },
    onBlur() {
      this.$emit('my-blur');
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
