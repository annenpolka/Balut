<template>
  <nav
    class="sticky top-0 flex items-center justify-between p-3 bg-green-500 select-none"
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
      <font-awesome-icon
        icon="chevron-down"
        @click="showDropdown"
        class="mx-2 text-sm"
      />
      <font-awesome-icon
        icon="search"
        class="text-lg"
        @click="showSearchModal"
      ></font-awesome-icon>
      <BookSearchModal
        v-if="isDisplayingSearchModal"
        :bookCards="allBookCards"
        @my-click="openSearchedBookAndSection"
        @my-close="closeSearchModal"
      ></BookSearchModal>
    </div>
    <div class="">
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
import BookSearchModal from './BookSearchModal';
export default {
  components: { AppDropdown, BookSearchModal },
  props: ['books', 'selectedBookTitle', 'selectedBookId'],
  data() {
    return {
      isDisplayingDropdown: false,
      isDisplayingSearchModal: false,
    };
  },
  methods: {
    showDropdown() {
      this.isDisplayingDropdown = !this.isDisplayingDropdown;
    },
    changeSelectedBook($event) {
      this.$emit('change-book', $event);
      this.isDisplayingSearchModal = false;
      this.isDisplayingDropdown = false;
    },
    openSearchedBookAndSection($event) {
      this.$emit('change-searched', $event);
      this.isDisplayingSearchModal = false;
      this.isDisplayingDropdown = false;
    },
    showSearchModal() {
      this.isDisplayingSearchModal = true;
    },
    closeSearchModal() {
      this.isDisplayingSearchModal = false;
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
    allBookCards() {
      const allBookSections = this.books
        .map((book) => book.bookSections)
        .flat();
      const allBookCards = allBookSections
        .map((section) => section.bookCards)
        .flat();
      return allBookCards;
    },
  },
};
</script>

<style lang="scss" scoped></style>
