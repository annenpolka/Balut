<template>
  <div v-text="cardText"></div>
</template>

<script>
export default {
  props: {
    cardText: String,
  },
};
</script>
