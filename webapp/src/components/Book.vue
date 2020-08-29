<template
  ><div>
    <BookSection
      v-for="bookSection in bookSections"
      :bookCards="bookSection.bookCards"
      :title="bookSection.sectionTitle"
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
          sectionTitle: 'SectionTitle',
          bookCards: [
            { id: 1, text: 'hoge' },
            { id: 2, text: 'foo' },
            { id: 3, text: 'bar' },
          ],
        },
        {
          id: 2,
          sectionTitle: 'SectionTitle2',
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

<style></style>
