<template>
  <button
    class="px-2 py-1 font-bold bg-gray-200 rounded hover:bg-gray-400"
    :placeholder="placeholder"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['placeholder'],
  methods: {
    onClick() {
      this.$emit('my-click');
    },
  },
};
</script>
