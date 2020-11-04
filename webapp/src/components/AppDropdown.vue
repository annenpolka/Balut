<template>
  <ul class="text-2xl text-black bg-gray-200 rounded">
    <template v-for="thing in list" class="p-2 ">
      <li
        :key="thing.id"
        v-if="thing.selected"
        class="p-2 text-green-500"
        @click="onClick(thing.id)"
      >
        {{ thing.title }}
      </li>
      <li
        :key="thing.id"
        v-if="!thing.selected"
        class="p-2"
        @click.stop="onClick(thing.id)"
      >
        {{ thing.title }}
        <font-awesome-icon
          icon="times"
          class="mt-1 text-xl text-gray-800"
          @click.stop="deleteThis(thing.id)"
        ></font-awesome-icon>
      </li>
    </template>
    <li>
      <slot></slot>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['list'],
  methods: {
    onClick($event) {
      this.$emit('my-click', $event);
    },
    deleteThis(id) {
      this.$emit('my-delete', id);
    },
  },
};
</script>
