<template>
  <div class="fixed inset-0 z-10 overflow-y-auto">
    <div
      class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"
    >
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span
      >&#8203;
      <div
        class="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div class="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3
                class="text-lg font-medium leading-6 text-gray-900"
                id="modal-headline"
              >
                Search Cards
              </h3>
              <div class="mt-2">
                <input
                  class="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500"
                  type="text"
                  v-model="searchText"
                />
                <p class="text-sm leading-5 text-gray-500">
                  テキストもしくはタグを入力して、カードがあるブックを開くことができます。
                </p>
              </div>
            </div>
          </div>

          <book-card
            v-for="bookCard in searchResult"
            :cardText="bookCard.text"
            :key="bookCard.index"
          ></book-card>
        </div>

        <div class="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
          <span class="flex w-full mt-3 rounded-md shadow-sm sm:mt-0 sm:w-auto">
            <button
              type="button"
              class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue sm:text-sm sm:leading-5"
              @click="close"
            >
              Close
            </button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bookCard from './BookCard';
export default {
  components: { bookCard },
  props: ['bookCards'],
  data() {
    return {
      searchText: '',
    };
  },
  methods: {
    close() {
      this.$emit('my-close');
    },
  },
  computed: {
    searchResult() {
      return this.bookCards.filter((card) => card.text.includes('foo'));
    },
  },
};
</script>

<style></style>
