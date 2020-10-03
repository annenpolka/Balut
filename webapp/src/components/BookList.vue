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
              parentId: 1,
              title: 'SectionTitle',
              bookCards: [
                { id: 1, parentId: 1, text: 'hoge' },
                { id: 2, parentId: 1, text: 'foo' },
                { id: 3, parentId: 1, text: 'bar' },
                { id: 4, parentId: 1, text: 'bar' },
                { id: 5, parentId: 1, text: 'bar' },
                { id: 6, parentId: 1, text: 'bar' },
              ],
            },
            {
              id: 2,
              parentId: 1,
              title: 'SectionTitle2',
              bookCards: [
                { id: 1, parentId: 2, text: 'h' },
                { id: 2, parentId: 2, text: 'f' },
                { id: 3, parentId: 2, text: 'b' },
              ],
            },
            {
              id: 3,
              parentId: 1,
              title: 'SectionTitle3',
              bookCards: [
                { id: 1, parentId: 3, text: 'hoge' },
                { id: 2, parentId: 3, text: 'foo' },
                { id: 3, parentId: 3, text: 'bar' },
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
              parentId: 2,
              title: 'SectionTitle',
              bookCards: [
                { id: 1, parentId: 1, text: 'hoge' },
                { id: 2, parentId: 1, text: 'foo' },
                { id: 3, parentId: 1, text: 'bar' },
                { id: 4, parentId: 1, text: 'bar' },
                { id: 5, parentId: 1, text: 'bar' },
                { id: 6, parentId: 1, text: 'bar' },
              ],
            },
            {
              id: 2,
              parentId: 2,
              title: 'SectionTitle2',
              bookCards: [
                { id: 1, parentId: 2, text: 'h' },
                { id: 2, parentId: 2, text: 'f' },
                { id: 3, parentId: 2, text: 'b' },
              ],
            },
            {
              id: 3,
              parentId: 2,
              title: 'SectionTitle3',
              bookCards: [
                { id: 1, parentId: 3, text: 'hoge' },
                { id: 2, parentId: 3, text: 'foo' },
                { id: 3, parentId: 3, text: 'bar' },
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
              parentId: 3,
              title: 'SectionTitle',
              bookCards: [
                { id: 1, parentId: 1, text: 'hoge' },
                { id: 2, parentId: 1, text: 'foo' },
                { id: 3, parentId: 1, text: 'bar' },
                { id: 4, parentId: 1, text: 'bar' },
                { id: 5, parentId: 1, text: 'bar' },
                { id: 6, parentId: 1, text: 'bar' },
              ],
            },
            {
              id: 2,
              parentId: 3,
              title: 'SectionTitle2',
              bookCards: [
                { id: 1, parentId: 2, text: 'h' },
                { id: 2, parentId: 2, text: 'f' },
                { id: 3, parentId: 2, text: 'b' },
              ],
            },
            {
              id: 3,
              parentId: 3,
              title: 'SectionTitle3',
              bookCards: [
                { id: 1, parentId: 3, text: 'hoge' },
                { id: 2, parentId: 3, text: 'foo' },
                { id: 3, parentId: 3, text: 'bar' },
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
              parentId: 4,
              title: 'SectionTitle',
              bookCards: [
                { id: 1, parentId: 1, text: 'hoge' },
                { id: 2, parentId: 1, text: 'foo' },
                { id: 3, parentId: 1, text: 'bar' },
                { id: 4, parentId: 1, text: 'bar' },
                { id: 5, parentId: 1, text: 'bar' },
                { id: 6, parentId: 1, text: 'bar' },
              ],
            },
            {
              id: 2,
              parentId: 4,
              title: 'SectionTitle2',
              bookCards: [
                { id: 1, parentId: 2, text: 'hoge' },
                { id: 2, parentId: 2, text: 'foo' },
                { id: 3, parentId: 2, text: 'bar' },
              ],
            },
            {
              id: 3,
              parentId: 4,
              title: 'SectionTitle3',
              bookCards: [
                { id: 1, parentId: 2, text: 'hoge' },
                { id: 2, parentId: 2, text: 'foo' },
                { id: 3, parentId: 2, text: 'bar' },
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
              parentId: 5,
              title: 'SectionTitle',
              bookCards: [
                { id: 1, parentId: 1, text: 'hoge' },
                { id: 2, parentId: 1, text: 'foo' },
                { id: 3, parentId: 1, text: 'bar' },
                { id: 4, parentId: 1, text: 'bar' },
                { id: 5, parentId: 1, text: 'bar' },
                { id: 6, parentId: 1, text: 'bar' },
              ],
            },
            {
              id: 2,
              parentId: 5,
              title: 'SectionTitle2',
              bookCards: [
                { id: 1, parentId: 2, text: 'hoge' },
                { id: 2, parentId: 2, text: 'foo' },
                { id: 3, parentId: 2, text: 'bar' },
              ],
            },
            {
              id: 3,
              parentId: 5,
              title: 'SectionTitle3',
              bookCards: [
                { id: 1, parentId: 3, text: 'hoge' },
                { id: 2, parentId: 3, text: 'foo' },
                { id: 3, parentId: 3, text: 'bar' },
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
