<template>
  <div
    class="p-1 overflow-y-scroll bg-gray-300 rounded shadow-xs w-96 min-h-screen-screen/5"
  >
    <p>{{ title }}</p>
    <CreateNewButton v-if="!isCreating" @my-click="startCreatingSection"
      >+ Create new section</CreateNewButton
    >
    <CreateNewTextArea
      v-if="isCreating"
      @my-submit="createSection"
      @my-blur="cancelCreatingSection"
      :placeholder="placeholder"
    ></CreateNewTextArea>

    <BookSection
      v-for="(bookSection, index) in reverseBookSections"
      :bookCards="bookSection.bookCards"
      :title="bookSection.title"
      :id="bookSection.id"
      :key="bookSection.id"
      :index="index"
      :selectedId="selectedId"
      @selected-update="updateSelectedId"
      @section-update="updateSectionBookCards($event, bookSection)"
    ></BookSection>
  </div>
</template>

<script>
import BookSection from './BookSection';
import CreateNewButton from './CreateNewButton';
import CreateNewTextArea from './CreateNewTextArea';
export default {
  name: 'Book',
  components: {
    BookSection,
    CreateNewButton,
    CreateNewTextArea,
  },
  props: ['bookSections', 'title', 'selectedId'],
  data() {
    return {
      isCreating: false,
      placeholder: "put your new section's name",
    };
  },
  computed: {
    reverseBookSections() {
      return this.bookSections.slice().reverse();
    },
  },
  methods: {
    updateSelectedId($event) {
      this.$emit('my-select', $event);
    },
    startCreatingSection() {
      this.isCreating = true;
    },
    cancelCreatingSection() {
      this.isCreating = false;
    },
    createSection($event) {
      const id = this.bookSections.length + 1;
      const title = $event;
      const bookCards = [];
      const newSection = {
        id,
        title,
        bookCards,
      };
      this.bookSections.push(newSection);
      this.$emit('my-select', id);
    },
    updateSectionBookCards($event, section) {
      section.bookCards = $event;
    },
  },
};
</script>
