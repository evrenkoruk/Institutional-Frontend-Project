<template>
  <div>
    <CoolLightBox
      :items="light_box_images"
      :index="light_box_index"
      @close="light_box_index = null"
      :fullScreen="true"
    >
    </CoolLightBox>
    <div class="project-list" v-if="projects">
      <div
        class="project-list-item"
        v-for="(project, index) in listed_data"
        :key="index"
      >
        <div class="project-list-item-details" @click="openLightBox(index)">
          <hr class="project-list-item-details-vertical-border" />
          <hr class="project-list-item-details-horizontal-border" />
          <div
            class="project-list-item-details-name"
            v-html="project[`header_${$i18n.locale}`]"
          ></div>
          <img
            class="project-list-item-details-img"
            :src="project.image"
            width="100%"
            :alt="project[`header_${$i18n.locale}`]"
          />
        </div>
        <div
          class="project-list-item-name"
          v-html="project[`header_${$i18n.locale}`]"
        ></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/sass/components/projects/list.scss";
</style>

<script>
export default {
  components: {},
  data() {
    return {
      listed_data: [],
      light_box_images: [],
      light_box_index: null,
    };
  },
  props: {
    projects: {
      type: Array,
      required: true,
    },
    selectedCategory: {
      type: [Number, String],
      require: false,
      default: "all",
    },
    limit: {
      type: Boolean,
      require: false,
      default: false,
    },
    status: {
      type: [Boolean, Number],
      require: true,
      default: 1,
    },
  },
  watch: {
    selectedCategory: function () {
      this.updateResult();
    },
    status: function () {
      this.updateResult();
    },
  },
  methods: {
    updateResult: function () {
      let list_element = [];
      let limitless = [];
      this.projects.forEach(
        function (item) {
          if (
            this.selectedCategory === item.category_id ||
            this.selectedCategory === "all"
          ) {
            list_element.push(item);
          }
        }.bind(this)
      );
      if (this.limit) {
        limitless = list_element.slice(0, 3);
      } else {
        limitless = list_element;
      }

      if (this.status) {
        this.listed_data = limitless.filter(function (e) {
          return e.status == true;
        });
      } else if (!this.status) {
        this.listed_data = limitless.filter(function (e) {
          return e.status == false;
        });
      } else {
        this.listed_data = limitless;
      }
    },
    openLightBox: function (index) {
      this.light_box_images = [];
      this.projects[index].project_photos.forEach(
        function (item) {
          this.light_box_images.push(item.image);
        }.bind(this)
      );
      this.light_box_index = 0;
    },
  },
  mounted() {
    this.listed_data = this.limit ? this.projects.slice(0, 3) : this.projects;
  },
};
</script>
