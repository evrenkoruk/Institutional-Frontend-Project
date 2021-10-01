<template>
  <div class="filters" v-if="filters && filters.length && updateType">
    <div
      class="filters-title"
      @click="handleFilters"
      :class="filtersVisible ? `--visible` : null"
    >
      {{ filtersVisible ? "Kategorileri Gizle" : "Kategorileri Göster" }}
    </div>
    <div
      class="filters-item"
      :class="allrpojects === all ? `--active` : null"
      @click="updateType('all')"
      :key="all"
    >
      {{ $t("allprojects") }}
    </div>
    <div
      v-show="filtersVisible"
      class="filters-item"
      v-for="filter in filters"
      :class="activeType === filter.id ? `--active` : null"
      :key="filter.id"
      @click="updateType(filter.id)"
    >
      {{ filter[`header_${$i18n.locale}`] }}
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/sass/components/projects/filters.scss";
</style>

<script>
export default {
  props: {
    filters: {
      type: Array,
      required: true,
    },
    updateType: {
      type: Function,
      required: true,
    },
    activeType: {
      type: [Number, String],
      required: true,
      default: "All",
    },
  },
  data() {
    return {
      filtersVisible: false,
    };
  },
  methods: {
    handleFilters() {
      return (this.filtersVisible = !this.filtersVisible);
    },
  },
};
</script>
