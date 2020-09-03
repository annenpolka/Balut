<template>
  <div class="flex">
    <book
      v-for="book in books"
      :bookSections="book.bookSections"
      :key="book.id"
    ></book>
  </div>
</template>

<script>
import Book from './Book';
export default {
  name: 'BookList',
  components: {
    Book,
  },
  data() {
    return {
      books: [
        {
          id: 1,
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
  methods: {
    updateSection() {},
  },
};
</script>

<style lang="scss" scoped></style>
