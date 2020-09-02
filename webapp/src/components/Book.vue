<template>
  <div
    class="flex-shrink-0 w-3/12 p-2 overflow-y-scroll bg-gray-300 rounded shadow-xs"
  >
    <BookSection
      v-for="bookSection in bookSections"
      :bookCards="bookSection.bookCards"
      :title="bookSection.title"
      :key="bookSection.id"
    ></BookSection>
  </div>
</template>

<script>
import BookSection from './BookSection';
export default {
  name: 'Book',
  components: {
    BookSection,
  },
  props: ['bookSections'],

  methods: {
    updateSection() {},
  },
};
</script>
