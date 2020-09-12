<template>
  <nav class="flex items-center justify-between p-3 bg-green-600 select-none">
    <div class="mr-6 font-semibold text-white">
      <span class="">Balut</span>
    </div>
    <div class="flex items-center mr-6 text-white">
      <span class="">{{ selectedBook.title }} </span>
      <svg
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        width="20px"
        height="20px"
        viewBox="0 0 24 24"
        aria-labelledby="dropIconTitle"
        stroke="#F0F0F0"
        stroke-width="2.25"
        stroke-linecap="round"
        stroke-linejoin="miter"
        fill="none"
        color="#F0F0F0"
      >
        <title id="dropIconTitle">Drop</title>
        <path
          d="M12,21 C15.3137085,21 18,18.3904147 18,15 C18,11.6666667 16,8 12,4 C8,8 6,11.6666667 6,15 C6,18.3904147 8.6862915,21 12,21 Z"
        />
      </svg>
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
export default {
  props: ['books', 'selectedIndex'],
  computed: {
    selectedBook() {
      return this.books[this.selectedIndex];
    },
  },
};
</script>

<style></style>
