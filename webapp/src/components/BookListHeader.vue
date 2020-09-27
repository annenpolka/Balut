<template>
  <nav
    class="sticky top-0 flex items-center justify-between p-3 bg-green-600 select-none"
  >
    <div class="mr-6 font-semibold text-white">
      <span class="">Balut</span>
    </div>
    <div class="flex items-center mr-6 text-lg text-white ">
      <span class="" @click="showDropdown">{{ selectedBookTitle }}</span>
      <AppDropdown
        class="absolute p-2 top-12"
        v-if="isDisplayingDropdown"
        :list="dropDownList"
        @my-click="changeSelectedBook"
      ></AppDropdown>
      <font-awesome-icon icon="chevron-down" class="mx-2 text-sm" />
    </div>
    <div>
      <a
        href="#"
        class="px-3 py-2 mt-2 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-teal-500 hover:bg-white lg:mt-0"
        >ログアウト</a
      >
    </div>
  </nav>
</template>

<script>
import AppDropdown from './AppDropdown';
export default {
  components: { AppDropdown },
  props: ['books', 'selectedBookTitle', 'selectedBookId'],
  data() {
    return {
      isDisplayingDropdown: false,
    };
  },
  methods: {
    showDropdown() {
      this.isDisplayingDropdown = true;
    },
    changeSelectedBook($event) {
      this.$emit('change-book', $event);
      this.isDisplayingDropdown = false;
    },
  },
  computed: {
    dropDownList() {
      return this.books.map((book) => ({
        id: book.id,
        title: book.title,
        selected: book.id === this.selectedBookId,
      }));
    },
  },
};
</script>

<style lang="scss" scoped></style>
