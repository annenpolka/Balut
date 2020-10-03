<template>
  <div class="h-screen bg-gray-100">
    <BookListHeader
      :books="books"
      :selectedBookTitle="selectedBook.title"
      :selectedBookId="selectedBook.id"
      @change-book="changeSelectedBook"
    ></BookListHeader>
    <div class="flex justify-center py-4">
      <book
        :bookSections="selectedBook.bookSections"
        :title="selectedBook.title"
        :key="selectedBook.id"
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
                { id: 1, parentSectionId: 1, text: 'hoge' },
                { id: 2, parentSectionId: 1, text: 'foo' },
                { id: 3, parentSectionId: 1, text: 'bar' },
                { id: 4, parentSectionId: 1, text: 'bar' },
                { id: 5, parentSectionId: 1, text: 'bar' },
                { id: 6, parentSectionId: 1, text: 'bar' },
              ],
            },
            {
              id: 2,
              parentBookId: 1,
              title: 'SectionTitle2',
              bookCards: [
                { id: 1, parentSectionId: 2, text: 'h' },
                { id: 2, parentSectionId: 2, text: 'f' },
                { id: 3, parentSectionId: 2, text: 'b' },
              ],
            },
            {
              id: 3,
              parentBookId: 1,
              title: 'SectionTitle3',
              bookCards: [
                { id: 1, parentSectionId: 3, text: 'hoge' },
                { id: 2, parentSectionId: 3, text: 'foo' },
                { id: 3, parentSectionId: 3, text: 'bar' },
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
              title: 'SectionTitle',
              bookCards: [
                { id: 1, parentSectionId: 1, text: 'hoge' },
                { id: 2, parentSectionId: 1, text: 'foo' },
                { id: 3, parentSectionId: 1, text: 'bar' },
                { id: 4, parentSectionId: 1, text: 'bar' },
                { id: 5, parentSectionId: 1, text: 'bar' },
                { id: 6, parentSectionId: 1, text: 'bar' },
              ],
            },
            {
              id: 2,
              parentBookId: 2,
              title: 'SectionTitle2',
              bookCards: [
                { id: 1, parentSectionId: 2, text: 'h' },
                { id: 2, parentSectionId: 2, text: 'f' },
                { id: 3, parentSectionId: 2, text: 'b' },
              ],
            },
            {
              id: 3,
              parentBookId: 2,
              title: 'SectionTitle3',
              bookCards: [
                { id: 1, parentSectionId: 3, text: 'hoge' },
                { id: 2, parentSectionId: 3, text: 'foo' },
                { id: 3, parentSectionId: 3, text: 'bar' },
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
                { id: 1, parentSectionId: 1, text: 'hoge' },
                { id: 2, parentSectionId: 1, text: 'foo' },
                { id: 3, parentSectionId: 1, text: 'bar' },
                { id: 4, parentSectionId: 1, text: 'bar' },
                { id: 5, parentSectionId: 1, text: 'bar' },
                { id: 6, parentSectionId: 1, text: 'bar' },
              ],
            },
            {
              id: 2,
              parentBookId: 3,
              title: 'SectionTitle2',
              bookCards: [
                { id: 1, parentSectionId: 2, text: 'h' },
                { id: 2, parentSectionId: 2, text: 'f' },
                { id: 3, parentSectionId: 2, text: 'b' },
              ],
            },
            {
              id: 3,
              parentBookId: 3,
              title: 'SectionTitle3',
              bookCards: [
                { id: 1, parentSectionId: 3, text: 'hoge' },
                { id: 2, parentSectionId: 3, text: 'foo' },
                { id: 3, parentSectionId: 3, text: 'bar' },
              ],
            },
          ],
        },
        {
          id: 4,
          title: 'Direct Group Officer',
          bookSections: [
            {
              id: 1,
              parentBookId: 4,
              title: 'SectionTitle',
              bookCards: [
                { id: 1, parentSectionId: 1, text: 'hoge' },
                { id: 2, parentSectionId: 1, text: 'foo' },
                { id: 3, parentSectionId: 1, text: 'bar' },
                { id: 4, parentSectionId: 1, text: 'bar' },
                { id: 5, parentSectionId: 1, text: 'bar' },
                { id: 6, parentSectionId: 1, text: 'bar' },
              ],
            },
            {
              id: 2,
              parentBookId: 4,
              title: 'SectionTitle2',
              bookCards: [
                { id: 1, parentSectionId: 2, text: 'hoge' },
                { id: 2, parentSectionId: 2, text: 'foo' },
                { id: 3, parentSectionId: 2, text: 'bar' },
              ],
            },
            {
              id: 3,
              parentBookId: 4,
              title: 'SectionTitle3',
              bookCards: [
                { id: 1, parentSectionId: 2, text: 'hoge' },
                { id: 2, parentSectionId: 2, text: 'foo' },
                { id: 3, parentSectionId: 2, text: 'bar' },
              ],
            },
          ],
        },
        {
          id: 5,
          title: 'Legacy Research Administrator',
          bookSections: [
            {
              id: 1,
              parentBookId: 5,
              title: 'SectionTitle',
              bookCards: [
                { id: 1, parentSectionId: 1, text: 'hoge' },
                { id: 2, parentSectionId: 1, text: 'foo' },
                { id: 3, parentSectionId: 1, text: 'bar' },
                { id: 4, parentSectionId: 1, text: 'bar' },
                { id: 5, parentSectionId: 1, text: 'bar' },
                { id: 6, parentSectionId: 1, text: 'bar' },
              ],
            },
            {
              id: 2,
              parentBookId: 5,
              title: 'SectionTitle2',
              bookCards: [
                { id: 1, parentSectionId: 2, text: 'hoge' },
                { id: 2, parentSectionId: 2, text: 'foo' },
                { id: 3, parentSectionId: 2, text: 'bar' },
              ],
            },
            {
              id: 3,
              parentBookId: 5,
              title: 'SectionTitle3',
              bookCards: [
                { id: 1, parentSectionId: 3, text: 'hoge' },
                { id: 2, parentSectionId: 3, text: 'foo' },
                { id: 3, parentSectionId: 3, text: 'bar' },
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
    updateSection() {},
    changeSelectedBook($event) {
      this.selectedId = $event;
    },
  },
};
</script>

<style lang="scss" scoped></style>
