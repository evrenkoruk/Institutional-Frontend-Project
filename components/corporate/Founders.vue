<template>
  <div class="founders">
    <div class="founders-title title-has-border">{{ $t(`founders`) }}</div>
    <div class="founders-list">
      <div class="founder" v-for="(founder, index) in founders" :key="index">
        <img
          :src="founder.image"
          :alt="founder.name"
          width="100%"
          height="auto"
        />
        <div class="founder-name">
          {{ founder.name }}
        </div>
        <div class="founder-portfolio">
          {{ founder[`content_${$i18n.locale}`] }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/sass/components/corporate/founders.scss";
</style>

<script>
export default {
  props: {
    founders: {
      type: [Array, Object],
      required: true,
    },
  },
};
</script>
