<template>
  <div class="page --homepage">
    <div class="hero" v-if="page_data">
      <client-only>
        <tiny-slider
          :mouse-drag="true"
          :loop="false"
          items="1"
          gutter="20"
          :center="true"
          :nav="false"
          :controls-text="[``, ``]"
        >
          <div
            class="hero-item"
            v-for="(item, index) in page_data.slider"
            :key="`slider-index-${index}`"
          >
            <img
              :src="item.image"
              alt="Carousel BG"
              width="100%"
              height="auto"
            />
            <div class="hero-item-caption">
              <div class="hero-item-caption-detail">
                <div
                  class="hero-item-caption-detail-nav"
                  v-html="getProjectNumber(index + 1)"
                ></div>
                <div class="hero-item-caption-detail-title">
                  {{ item[`header_${$i18n.locale}`] }}
                </div>
                <div
                  class="hero-item-caption-detail-desc"
                  v-html="item[`content_${$i18n.locale}`]"
                ></div>
              </div>
              <div class="hero-item-caption-button">
                <nuxt-link
                  :to="localePath('/projeler')"
                  class="button --dark"
                  >{{ $t("goproject") }}</nuxt-link
                >
              </div>
              <div class="hero-item-caption-bg"></div>
            </div>
          </div>
        </tiny-slider>
      </client-only>
    </div>
    <div class="about-us">
      <div class="about-us-container">
        <div class="about-us-col">
          <div class="about-us-tag">
            {{ page_data.about[`header_${$i18n.locale}`] }}
          </div>
          <div
            class="about-us-title"
            v-html="page_data.about[`sub_header_${$i18n.locale}`]"
          ></div>
          <div
            class="about-us-desc"
            v-html="page_data.about[`content_${$i18n.locale}`]"
          ></div>
          <nuxt-link
            class="link-button"
            :to="localePath('/kurumsal')"
            tag="a"
            >{{ $t("corporatedetails") }}</nuxt-link
          >
        </div>
        <img
          :src="page_data.about.image"
          class="about-us-img"
          alt="About Ultavs"
          width="571"
          height="401"
        />
      </div>
      <CorporateLabel
        :title="page_data.about[`background_header_${$i18n.locale}`]"
        :text="page_data.about[`background_sub_header_${$i18n.locale}`]"
      />
    </div>
    <div class="projects">
      <div class="projects-header">
        <div class="projects-title title-has-border border-center">
          <b> {{ $t("lateprojects") }}</b>
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
        :limit="true"
      />
    </div>
    <CorporateLabel :title="`BENZERSİZ`" :text="`TASARIMLAR`" :inline="false" />
    <CorporateMotto
      :image="page_data.banner.image"
      :number_one="page_data.banner.number_one"
      :number_two="page_data.banner.number_two"
      :number_three="page_data.banner.number_three"
    />
    <div class="referances">
      <div class="referances-list">
        <div
          class="referances-items"
          v-for="(reference, reference_index) in page_data.references"
          :key="`reference-index-${reference_index}`"
        >
          <img :src="reference.image" width="100%" height="auto" />
        </div>
        <div class="referances-button">
          <nuxt-link
            class="link-button"
            :to="localePath('/referanslar')"
            tag="button"
            >{{ $t("more") }}</nuxt-link
          >
        </div>
      </div>
      <CorporateLabel
        :title="page_data.referencefix[`header_${$i18n.locale}`]"
        :text="page_data.referencefix[`sub_header_${$i18n.locale}`]"
        :inline="true"
      />
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/sass/pages/homepage.scss";
@import "@/assets/sass/components/corporate/about.scss";
@import "@/node_modules/tiny-slider/src/tiny-slider.scss";
@import "@/assets/sass/components/slider.scss";
</style>
<script>
import ProjectsFilters from "@/components/projects/Filters";
import ProjectsList from "@/components/projects/List";
import CorporateMotto from "@/components/corporate/Motto";
import CorporateLabel from "@/components/corporate/Label";
export default {
  components: {
    ProjectsFilters,
    ProjectsList,
    CorporateMotto,
    CorporateLabel,
  },
  data() {
    return {
      page_data: null,
    };
  },
  async asyncData(context) {
    let page_data;
    await context.app.$axios
      .$get(`https://ultavlar-service.saasdev.net/api/web/homepage`, {
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
  computed: {
    filters() {
      return this.$store.state.projects.filters;
    },
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  },
  methods: {
    updateType: function (type) {
      this.activeType = type;
      this.selectedCategory = type;
    },
    getProjectNumber: function (top_index) {
      let numbers = "";
      this.page_data.slider.forEach(
        function (item, index) {
          if (index + 1 === top_index) {
            numbers = numbers.concat(`<b>${index + 1}</b> - `);
          } else {
            numbers = numbers.concat(`${index + 1} - `);
          }
        }.bind(this)
      );
      return numbers.slice(0, -2);
    },
  },
};
</script>
