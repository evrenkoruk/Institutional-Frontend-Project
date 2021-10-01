<template>
  <div class="page --corporate">
    <Banner :title="$t(`corporate`)" />
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
    <div class="mission">
      <div class="mission-container">
        <div
          class="mission-tag"
          v-html="page_data.misyon[`sub_header_${$i18n.locale}`]"
        ></div>
        <div
          class="mission-title"
          v-html="page_data.misyon[`header_${$i18n.locale}`]"
        ></div>
        <div
          class="mission-desc"
          v-html="page_data.misyon[`content_${$i18n.locale}`]"
        ></div>
      </div>
    </div>
    <CorporateMotto
      :image="page_data.banner.image"
      :number_one="page_data.banner.number_one"
      :number_two="page_data.banner.number_two"
      :number_three="page_data.banner.number_three"
    />
    <CorporateFounders :founders="page_data.kurucu" />
  </div>
</template>
<style lang="scss">
@import "@/assets/sass/pages/corporate.scss";
</style>
<script>
import Banner from "@/components/Banner";
import CorporateLabel from "@/components/corporate/Label";
import CorporateMotto from "@/components/corporate/Motto";
import CorporateFounders from "@/components/corporate/Founders";
export default {
  components: {
    Banner,
    CorporateLabel,
    CorporateMotto,
    CorporateFounders,
  },
  data() {
    return {
      page_data: null,
    };
  },
  async asyncData(context) {
    let page_data;
    await context.app.$axios
      .$get(`https://ultavlar-service.saasdev.net/api/web/corporate`, {
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
};
</script>