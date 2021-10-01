<template>
  <button
    :type="type"
    class="button"
    :class="[
      color ? `--${color}` : null,
      disableBorder ? `--no-border` : null,
      hideSm ? `hide-sm` : null,
      hideMd ? `hide-md` : null,
      smHideBorder ? `--sm-hide-border` : null,
    ]"
    @click="$emit(`click`)"
  >
    {{ title }}
  </button>
</template>

<style lang="scss">
@import "@/assets/sass/components/button.scss";
</style>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "button",
    },
    color: {
      type: String,
      required: true,
    },
    smHideBorder: {
      type: Boolean,
      required: false,
      default: false,
    },
    disableBorder: {
      type: Boolean,
      required: false,
      default: false,
    },
    hideSm: {
      type: Boolean,
      required: false,
      default: false,
    },
    hideMd: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
