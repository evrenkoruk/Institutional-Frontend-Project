<template>
  <div>
    <TheHeader :availableLocales="availableLocales" />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<style lang="scss">
@import "@/assets/sass/global.scss";
</style>

<script>
export default {
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
    };
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales;
    },
  },
};
</script>
