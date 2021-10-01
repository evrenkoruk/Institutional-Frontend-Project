<template>
  <div class="banner">
    {{ title }}
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/sass/components/banner.scss";
</style>
