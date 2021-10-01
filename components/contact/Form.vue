<template>
  <form action="/" method="get" class="contact-us-form">
    <div class="contact-us-form-field">
      <label for="name">{{ $t("namesurname") }} : </label>
      <input type="text" id="name" name="ad-soyad" />
    </div>
    <div class="contact-us-form-field firma">
      <label for="firm">{{ $t("firma") }} : </label>
      <input type="text" id="firm" name="firma" />
    </div>
    <div class="contact-us-form-field telefon">
      <label for="phone">{{ $t("telephone") }} </label>
      <input type="number" id="phone" name="telefon" />
    </div>
    <div class="contact-us-form-field e-mail">
      <label for="email">{{ $t("emailbro") }} :</label>
      <input type="email" id="email" name="e-posta" />
    </div>
    <div class="contact-us-form-field mesaj">
      <label for="message">{{ $t("messageform") }} :</label>
      <textarea name="mesaj" id="message" cols="30" rows="8"></textarea>
    </div>

    <nuxt-link class="link-button" :to="localePath('')">
      {{ $t("sendbro") }}</nuxt-link
    >
  </form>
</template>

<style lang="scss">
@import "@/assets/sass/components/contact/form.scss";
</style>
