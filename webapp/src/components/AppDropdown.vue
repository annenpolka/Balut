<template>
  <ul class="text-2xl text-black bg-gray-200 rounded">
    <template v-for="thing in list" class="p-2">
      <li
        :key="thing.id"
        v-if="thing.selected"
        class="p-2 text-green-600"
        @click="onClick"
      >
        {{ thing.title }}
      </li>
      <li :key="thing.id" v-if="!thing.selected" class="p-2" @click="onClick">
        {{ thing.title }}
      </li>
    </template>
  </ul>
</template>

<script>
export default {
  props: ['list'],
  methods: {
    onClick($event) {
      this.$emit('my-click', $event.target.value);
    },
  },
};
</script>
