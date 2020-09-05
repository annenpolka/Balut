<template>
  <div
    class="flex-shrink-0 w-3/12 h-screen py-2 overflow-y-scroll bg-gray-300 rounded shadow-xs"
  >
    <p>{{ title }}</p>
    <CreateNewButton>+ Create new section</CreateNewButton>
    <BookSection
      v-for="(bookSection, index) in bookSections"
      :bookCards="bookSection.bookCards"
      :title="bookSection.title"
      :key="bookSection.id"
      :index="index"
      :selectedIndex="selectedIndex"
      @selected-update="updateSelectedIndex"
    ></BookSection>
  </div>
</template>

<script>
import BookSection from './BookSection';
import CreateNewButton from './CreateNewButton';
export default {
  name: 'Book',
  components: {
    BookSection,
    CreateNewButton,
  },
  props: ['bookSections', 'title'],
  data() {
    return {
      selectedIndex: 0,
    };
  },
  methods: {
    updateSelectedIndex($event) {
      this.selectedIndex = $event;
    },
  },
};
</script>
