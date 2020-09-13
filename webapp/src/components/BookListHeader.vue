<template>
  <nav class="flex items-center justify-between p-3 bg-green-600 select-none">
    <div class="mr-6 font-semibold text-white">
      <span class="">Balut</span>
    </div>
    <div class="flex items-center mr-6 text-white">
      <span class="">{{ selectedBookTitle }} </span>
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
  props: ['books', 'selectedBookTitle'],
};
</script>

<style lang="scss" scoped></style>
