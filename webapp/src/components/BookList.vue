<template>
  <div>
    <BookListHeader
      :books="books"
      :selectedIndex="selectedIndex"
    ></BookListHeader>
    <div class="flex justify-center bg-gray-200">
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
      selectedIndex: 0,
      books: [
        {
          id: 1,
          title: 'bookTitle',
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
          title: 'bookTitle',
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
          title: 'bookTitle',
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
          title: 'bookTitle',
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
          title: 'bookTitle',
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
      return this.books[this.selectedIndex];
    },
  },
  methods: {
    updateSection() {},
  },
};
</script>

<style lang="scss" scoped></style>
