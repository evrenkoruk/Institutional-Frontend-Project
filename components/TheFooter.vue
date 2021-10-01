<template>
  <div>
    <footer class="footer">
      <div class="footer-row">
        <div class="footer-col">
          <img
            :src="fakeHomeApi.footer.image"
            alt="Ultavlar"
            width="200"
            height="97"
          />
          <div
            class="footer-logo-text"
            v-html="fakeHomeApi.footer[`content_${$i18n.locale}`]"
          ></div>
          <nuxt-link class="link-button" :to="localePath('/kurumsal')">
            {{ $t("more") }}</nuxt-link
          >
        </div>
        <div class="footer-col">
          <div class="footer-col-title">
            {{ fakeHomeApi.footer[`link_header_one_${$i18n.locale}`] }}
          </div>
          <ul class="footer-link-list">
            <li
              v-for="(qlink, qlink_index) in fakeHomeApi.quick_links"
              :key="`qlink-index-${qlink_index}`"
            >
              <nuxt-link :to="localePath(qlink.url)">{{
                qlink[`title_${$i18n.locale}`]
              }}</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="footer-col">
          <div class="footer-col-title">
            {{ fakeHomeApi.footer[`link_header_two_${$i18n.locale}`] }}
          </div>
          <ul class="footer-contact-list">
            <li>
              <b>{{ $t("companyey") }}</b>
            </li>
            <li>
              <b>{{ $t("adres") }}</b>
              {{ fakeHomeApi.footer[`address_${$i18n.locale}`] }}
            </li>
            <li>
              <b>{{ $t("telephone") }}</b>
              {{ fakeHomeApi.footer.phone }}
            </li>
            <li>
              <b>{{ $t("fax") }}</b>
              {{ fakeHomeApi.footer.fax }}
            </li>
            <li>
              <b>{{ $t("mobile") }}</b>
              {{ fakeHomeApi.footer.mobile }}
            </li>
            <li>
              <b>{{ $t("email") }}</b>
              {{ fakeHomeApi.footer.email }}
            </li>
          </ul>
        </div>
      </div>
    </footer>
    <footer class="sub-footer">
      <div class="sub-footer-copyright">
        Copyrights © 2021 {{ $t("companyey") }}
      </div>
      <div class="sub-footer-socials">
        <a
          :href="social.link"
          v-for="(social, social_index) in fakeHomeApi.social_media"
          :key="`social-index-${social_index}`"
          target="_blank"
          ><i class="sub-footer-socials-item" :class="social.icon"></i
        ></a>
      </div>
      <div class="sub-footer-madeby">
        Made By <a href="https://syconx.com">SYCONX YAZILIM.</a>
      </div>
    </footer>
  </div>
</template>
<style lang="scss">
@import "@/assets/sass/components/footer.scss";
</style>
<script>
export default {
  data() {
    return {
      fakeHomeApi: {
        footer: {
          image: require("@/assets/img/logo.png"),
          content_tr:
            "Sürekli daha ileriye ve daha kaliteliye ulaşmayı ilke edinen ve ileri görüşlü stratejilerin yön gösterdiği Ultavlar bu anlayış ile pekçok konut, işyeri ve turistik tesis inşaatını gerçekleştirmiştir.Ultavlar, gelecekte de ülkemizin birçok bölgesinde ses getirecek projeler gerçekleştirmeye devam edecektir..",
          content_en:
            "Ultavlar, which has always adopted the principle of reaching further and higher quality and guided by forward-thinking strategies, has built many residences, workplaces and touristic facilities with this understanding. Ultavlar will continue to realize projects that will make a sound in many regions of our country in the future.",
          content_de:
            "Ultavlar, das seit jeher das Prinzip verfolgt, eine höhere und höhere Qualität zu erreichen und sich an zukunftsorientierten Strategien zu orientieren, hat mit diesem Verständnis viele Residenzen, Arbeitsplätze und touristische Einrichtungen gebaut. Ultavlar wird weiterhin Projekte realisieren, die in vielen Regionen einen guten Eindruck hinterlassen. ",
          link_header_one_tr: "HIZLI LİNKLER",
          link_header_one_en: "EN HIZLI LİNKLER",
          link_header_one_de: "DE HIZLI LİNKLER",
          link_header_two_tr: "BİZİMLE İLETİŞİME GEÇİN",
          link_header_two_en: "EN BİZİMLE İLETİŞİME GEÇİN",
          link_header_two_de: "DE BİZİMLE İLETİŞİME GEÇİN",
          address_tr: "Kitaş Özazman Sitesi A Blok No:37 / 1 09400 ",
          address_en: "EN Kitaş Özazman Sitesi A Blok No:37 / 1 09400 ",
          address_de: "DE Kitaş Özazman Sitesi A Blok No:37 / 1 09400 ",
          phone: "+90 (256) 622 00 90",
          fax: "+90 (256) 622 31 68",
          mobile: "+90 (532) 308 08 30",
          email: "info@ultavlar.com",
        },
        quick_links: [
          {
            title_tr: "ANASAYFA",
            title_en: "HOMEPAGE",
            title_de: "STARTSEİTE",
            url: "/",
          },
          {
            title_tr: "KURUMSAL",
            title_en: "CORPORATE ",
            title_de: "UNTERNEHMEN",
            url: "/kurumsal",
          },
          {
            title_tr: "PROJELER",
            title_en: "PROJECTS",
            title_de: "PROJEKTE",
            url: "/projeler",
          },
          {
            title_tr: "REFERANSLAR",
            title_en: "REFERENCES",
            title_de: "VERWEISE",
            url: "/referanslar",
          },
          {
            title_tr: "İLETİŞİM",
            title_en: "CONTACT",
            title_de: "KONTAKT",
            url: "/iletisim",
          },
        ],
        social_media: [
          {
            icon: "fab fa-facebook-f",
            link: "https://www.facebook.com/Ultavlar",
          },
          {
            icon: "fab fa-twitter",
            link: "https://twitter.com/Ultavlar",
          },
          {
            icon: "fab fa-instagram",
            link: "https://www.instagram.com/ultavlar_ltd_sti",
          },
          {
            icon: "fab fa-linkedin-in",
            link: "https://linkedin.com",
          },
        ],
      },
    };
  },
};
</script>
