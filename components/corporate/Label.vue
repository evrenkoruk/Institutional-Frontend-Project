<template>
  <div class="label" :class="inline ? `--inline` : null">
    <div class="label-title">
      {{ title }}
    </div>
    <div class="label-text">
      {{ text }}
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/sass/components/corporate/label.scss";
</style>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    inline: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
