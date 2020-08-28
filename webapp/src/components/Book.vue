<template
  ><div class="book">
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
  components: {
    BookSection,
  },
  data() {
    return {
      bookSections: [
        {
          id: 1,
          title: 'SectionTitle',
          bookCards: [
            { id: 1, text: 'hoge' },
            { id: 2, text: 'foo' },
            { id: 3, text: 'bar' },
          ],
        },
        {
          id: 2,
          title: 'SectionTitle2',
          bookCards: [
            { id: 1, text: 'hoge' },
            { id: 2, text: 'foo' },
            { id: 3, text: 'bar' },
          ],
        },
        {
          id: 3,
          title: 'SectionTitle3',
          bookCards: [
            { id: 1, text: 'hoge' },
            { id: 2, text: 'foo' },
            { id: 3, text: 'bar' },
          ],
        },
      ],
    };
  },

  methods: {
    updateSection() {},
  },
};
</script>

<style lang="scss" scoped>
.book {
  @apply box-content w-3/12 max-w-sm p-2 m-1 overflow-y-scroll bg-gray-300 rounded shadow-xs;
}
</style>
