<template>
  <input
    class="box-content"
    type="text"
    name="cardtext"
    placeholder="write comments..."
    v-model="cardtext"
  />
</template>

<script>
export default {
  data() {
    return {
      cardtext: '',
    };
  },
};
</script>

<style lang="scss" scoped></style>
