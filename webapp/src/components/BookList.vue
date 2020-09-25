<template>
  <div class="h-screen bg-gray-100">
    <BookListHeader
      :books="books"
      :selectedBookTitle="selectedBook.title"
      :selectedBookId="selectedBook.id"
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
              title: 'SectionTitle',
              bookCards: [
                { id: 1, text: 'hoge' },
                { id: 2, text: 'foo' },
                { id: 3, text: 'bar' },
                { id: 4, text: 'bar' },
                { id: 5, text: 'bar' },
                { id: 6, text: 'bar' },
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
        },
        {
          id: 2,
          title: 'Investor Response Architect',
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
        },
        {
          id: 3,
          title: 'Corporate Creative Planner',
          bookSections: [
            {
              id: 1,
              title: 'SectionTitle',
              bookCards: [
                { id: 1, text: 'hoge' },
                { id: 2, text: 'foo' },
                { id: 3, text: 'bar' },
                { id: 4, text: 'bar' },
                { id: 5, text: 'bar' },
                { id: 6, text: 'bar' },
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
        },
        {
          id: 4,
          title: 'Direct Group Officer',
          bookSections: [
            {
              id: 1,
              title: 'SectionTitle',
              bookCards: [
                { id: 1, text: 'hoge' },
                { id: 2, text: 'foo' },
                { id: 3, text: 'bar' },
                { id: 4, text: 'bar' },
                { id: 5, text: 'bar' },
                { id: 6, text: 'bar' },
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
        },
        {
          id: 5,
          title: 'Legacy Research Administrator',
          bookSections: [
            {
              id: 1,
              title: 'SectionTitle',
              bookCards: [
                { id: 1, text: 'hoge' },
                { id: 2, text: 'foo' },
                { id: 3, text: 'bar' },
                { id: 4, text: 'bar' },
                { id: 5, text: 'bar' },
                { id: 6, text: 'bar' },
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
  },
};
</script>

<style lang="scss" scoped></style>
