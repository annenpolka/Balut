<template>
  <div class="mx-auto bg-gray-200">
    <p class="hello">Hello TailWind</p>
    <BookSection></BookSection>
  </div>
</template>

<script>
import BookSection from '@/components/BookSection.vue';
export default {
  components: { BookSection },
};
</script>

<style lang="scss" scoped>
.hello {
  @apply text-6xl font-bold text-center;
}
</style>
