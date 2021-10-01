<template>
  <div class="page --contact">
    <Banner :title="$t(`contact`)" />
    <div class="page-title title-has-border border-center font-bold">
      {{ page_data.contact[`header_${$i18n.locale}`] }}
    </div>
    <div class="page-sub-title font-bold">
      {{ page_data.contact[`sub_header_${$i18n.locale}`] }}
    </div>
    <div class="contact-channel">
      <div class="contact-channel-list">
        <div class="contact-channel-list-item">
          <b>{{ $t("adres") }}</b>
          {{ page_data.contact[`address_${$i18n.locale}`] }}
        </div>
        <div class="contact-channel-list-item">
          <b> {{ $t("telephone") }}</b> {{ page_data.contact.phone }} <br />
          <b> {{ $t("fax") }} </b>{{ page_data.contact.fax }}
        </div>
        <div class="contact-channel-list-item">
          <b> {{ $t("mobile") }}</b> {{ page_data.contact.mobile }} <br />
          <b> {{ $t("emailbro") }}:</b>
          <font color="#7C141B"> {{ page_data.contact.email }}</font>
        </div>
      </div>
    </div>
    <div class="container flex-start">
      <div class="contact-us-title title-has-border">
        {{ $t("contactus2") }}
      </div>
      <ContactForm />
      <Map />
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/sass/components/container.scss";
@import "@/assets/sass/pages/contact.scss";
</style>
<script>
import Banner from "@/components/Banner";
import ContactForm from "@/components/contact/Form";
import Map from "@/components/Map";
export default {
  components: {
    Banner,
    ContactForm,
    Map,
  },
  data() {
    return {
      page_data: null,
    };
  },
  async asyncData(context) {
    let page_data;
    await context.app.$axios
      .$get(`https://ultavlar-service.saasdev.net/api/web/contact`, {
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
