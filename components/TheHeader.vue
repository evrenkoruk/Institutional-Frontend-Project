<template>
  <header class="header">
    <NuxtLink to="/" class="header-logo">
      <img src="@/assets/img/logo.png" alt="Ultavlar" width="200" height="97" />
    </NuxtLink>
    <div class="header-nav">
      <div class="header-nav-menu">
        <div class="header-nav-menu-item">
          <nuxt-link :to="localePath('/')">{{ $t("homepage") }}</nuxt-link>
        </div>
        <div class="header-nav-menu-item">
          <nuxt-link :to="localePath('/kurumsal')">{{
            $t("corporate")
          }}</nuxt-link>
        </div>
        <div class="header-nav-menu-item">
          <nuxt-link :to="localePath('/projeler')">{{
            $t("project")
          }}</nuxt-link>
        </div>
        <div class="header-nav-menu-item">
          <nuxt-link :to="localePath('/referanslar')">{{
            $t("reference")
          }}</nuxt-link>
        </div>
        <div class="header-nav-menu-item">
          <nuxt-link :to="localePath('/iletisim')">{{
            $t("contact")
          }}</nuxt-link>
        </div>
      </div>
      <div class="header-nav-lang">
        <div
          class="header-nav-lang-item"
          v-for="locale in $i18n.locales"
          :key="locale.code"
        >
          <nuxt-link :to="switchLocalePath(locale.code)">{{
            locale.code
          }}</nuxt-link>
        </div>
      </div>
    </div>
    <div class="header-mobile">
      <div
        class="header-mobile-trigger"
        @click="changeHamburgerMenuStatus()"
        :class="hamburgerMenuOpened ? 'active' : null"
      >
        <i></i><i></i><i></i>
      </div>
      <ul
        class="header-mobile-menu"
        :class="hamburgerMenuOpened ? 'active' : null"
      >
        <li>
          <nuxt-link :to="localePath('/')">{{ $t("homepage") }}</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('/kurumsal')">{{
            $t("corporate")
          }}</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('/projeler')">{{
            $t("project")
          }}</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('/referanslar')">{{
            $t("reference")
          }}</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('/iletisim')">{{
            $t("contact")
          }}</nuxt-link>
        </li>
      </ul>
    </div>
  </header>
</template>
<style lang="scss">
@import "@/assets/sass/components/header.scss";
</style>
<script>
export default {
  data() {
    return {
      hamburgerMenuOpened: false,
    };
  },
  methods: {
    changeHamburgerMenuStatus: function () {
      this.hamburgerMenuOpened = !this.hamburgerMenuOpened;
    },
  },
};
</script>
