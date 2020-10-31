<template>
  <div class="h-screen bg-gray-100">
    <BookListHeader
      :books="books"
      :selectedBookTitle="selectedBook.title"
      :selectedBookId="selectedBook.id"
      @change-book="changeSelectedBook"
      @change-searched="openSearchedBookAndSection"
    ></BookListHeader>
    <div class="flex justify-center py-4">
      <book
        :bookSections="selectedBook.bookSections"
        :title="selectedBook.title"
        :selectedId="selectedSectionId"
        :key="selectedBook.id"
        @my-select="updateSelectedSectionId"
        @section-delete="deleteSection($event, selectedBook)"
        class=""
      ></book>
    </div>
  </div>
</template>

<script>
import Book from './Book';
import BookListHeader from './BookListHeader';
export default {
  name: 'BookList',
  components: {
    Book,
    BookListHeader,
  },
  data() {
    return {
      selectedId: 1,
      selectedSectionId: 1,
      books: [
        {
          id: 1,
          title: 'Principal Data Analyst',
          bookSections: [
            {
              id: 1,
              parentBookId: 1,
              title: 'SectionTitle',
              bookCards: [
                { id: 1, parentBookId: 1, parentSectionId: 1, text: 'hoge' },
                { id: 2, parentBookId: 1, parentSectionId: 1, text: 'foo' },
                { id: 3, parentBookId: 1, parentSectionId: 1, text: 'bar' },
                { id: 4, parentBookId: 1, parentSectionId: 1, text: '434.00' },
                { id: 5, parentBookId: 1, parentSectionId: 1, text: '2' },
                { id: 6, parentBookId: 1, parentSectionId: 1, text: '84818' },
              ],
            },
            {
              id: 2,
              parentBookId: 1,
              title: 'SectionTitle2',
              bookCards: [
                { id: 1, parentBookId: 1, parentSectionId: 2, text: 'h' },
                { id: 2, parentBookId: 1, parentSectionId: 2, text: 'f' },
                { id: 3, parentBookId: 1, parentSectionId: 2, text: 'b' },
              ],
            },
            {
              id: 3,
              parentBookId: 1,
              title: 'SectionTitle3',
              bookCards: [
                { id: 1, parentBookId: 1, parentSectionId: 3, text: 'Mouse' },
                {
                  id: 2,
                  parentBookId: 1,
                  parentSectionId: 3,
                  text: 'Refined Cotton Shoes',
                },
                { id: 3, parentBookId: 1, parentSectionId: 3, text: 'Shoes' },
              ],
            },
          ],
        },
        {
          id: 2,
          title: 'Investor Response Architect',
          bookSections: [
            {
              id: 1,
              parentBookId: 2,
              title: 'rerum',
              bookCards: [
                { id: 1, parentBookId: 2, parentSectionId: 1, text: 'Desiree' },
              ],
            },
            {
              id: 2,
              parentBookId: 2,
              title: 'SectionTitle2',
              bookCards: [
                {
                  id: 1,
                  parentBookId: 2,
                  parentSectionId: 2,
                  text: 'ugiat at illumh',
                },
                {
                  id: 2,
                  parentBookId: 2,
                  parentSectionId: 2,
                  text: 'suscipit-quia-minus',
                },
                {
                  id: 3,
                  parentBookId: 2,
                  parentSectionId: 2,
                  text: 'A molestiae ea eaque libero nostrum.',
                },
              ],
            },
          ],
        },
        {
          id: 3,
          title: 'Corporate Creative Planner',
          bookSections: [
            {
              id: 1,
              parentBookId: 3,
              title: 'SectionTitle',
              bookCards: [
                { id: 1, parentBookId: 3, parentSectionId: 1, text: 'blue' },
                {
                  id: 2,
                  parentBookId: 3,
                  parentSectionId: 1,
                  text: 'Practical',
                },
              ],
            },
            {
              id: 2,
              parentBookId: 3,
              title: 'SectionTitle2',
              bookCards: [
                { id: 1, parentBookId: 3, parentSectionId: 2, text: 'h' },
              ],
            },
            {
              id: 3,
              parentBookId: 3,
              title: 'SectionTitle3',
              bookCards: [
                { id: 1, parentBookId: 3, parentSectionId: 3, text: 'test' },
                { id: 2, parentBookId: 3, parentSectionId: 3, text: 'search' },
                { id: 3, parentBookId: 3, parentSectionId: 3, text: 'テスト' },
              ],
            },
          ],
        },
      ],
    };
  },
  computed: {
    selectedBook() {
      return this.books.find((book) => book.id === this.selectedId);
    },
  },
  methods: {
    updateSelectedSectionId($event) {
      this.selectedSectionId = $event;
    },
    changeSelectedBook($event) {
      this.selectedId = $event;
      this.selectedSectionId = 1;
    },
    openSearchedBookAndSection($event) {
      this.selectedId = $event.parentBookId;
      this.selectedSectionId = $event.parentSectionId;
    },
    deleteSection($event, book) {
      console.log($event);
      const newSections = book.bookSections.filter(
        (section) => section.id !== $event
      );
      book.bookSections = newSections;
      if (this.selectedSectionId === $event) {
        this.selectedSectionId = newSections[newSections.length - 1].id;
      }
    },
  },
};
</script>
