<template>
  <div class="page --projects">
    <Banner :title="$t(`project`)" />
    <div class="container flex-md-between padding-top">
      <div class="pro-button">
        <Button
          type="button --dark"
          :title="$t('continuelang')"
          :color="statusButton ? 'dark' : ''"
          :smHideBorder="true"
          @click="statusButton = 1"
        />
        <Button
          type="button"
          :title="$t('okeyto')"
          :hideSm="true"
          :color="statusButton ? '' : 'dark'"
          :disableBorder="true"
          @click="statusButton = 0"
        />
      </div>
      <ProjectsFilters
        :filters="page_data.categories"
        :activeType="activeType"
        :updateType="updateType"
      />
    </div>
    <ProjectsList
      :projects="page_data.projects"
      :selected-category="selectedCategory"
      :limit="false"
      :status="statusType"
    />
  </div>
</template>
<style lang="scss">
@import "@/assets/sass/components/projects/list.scss";
</style>
<script>
import Banner from "@/components/Banner";
import ProjectsFilters from "@/components/projects/Filters";
import ProjectsList from "@/components/projects/List";
export default {
  components: {
    Banner,
    ProjectsFilters,
    ProjectsList,
  },
  data() {
    return {
      page_data: null,
      selectedCategory: "all",
      statusButton: 1,
      statusType: 1,
      activeType: "all",
    };
  },
  async asyncData(context) {
    let page_data;
    await context.app.$axios
      .$get(`https://ultavlar-service.saasdev.net/api/web/projects`, {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          Accept: "application/json",
          "Cache-Control": "no-cache",
        },
      })
      .then((response) => {
        page_data = response;
      });
    return {
      page_data,
    };
  },

  watch: {
    statusButton: function () {
      this.statusType = this.statusButton;
      this.updateType(this.activeType);
    },
  },
  methods: {
    updateType: function (type) {
      this.activeType = type;
      this.selectedCategory = type;
    },
  },
};
</script>
