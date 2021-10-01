<template>
  <div class="motto">
    <div class="motto-container">
      <img
        :src="image"
        class="motto-img"
        alt="About Ultavs"
        width="571"
        height="401"
      />
      <div class="motto-texts">
        <div class="motto-texts-item">
          <div class="motto-text">
            {{ number_one }}
          </div>
          <div class="motto-subtext">MÜŞTERİ</div>
        </div>
        <div class="motto-texts-item">
          <div class="motto-text">
            {{ number_two }}
          </div>
          <div class="motto-subtext">TAMAMLANMIŞ PROJELER</div>
        </div>
        <div class="motto-texts-item">
          <div class="motto-text">
            {{ number_three }}
          </div>
          <div class="motto-subtext">YIL TECRÜBE</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/sass/components/corporate/motto.scss";
</style>
<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    number_one: {
      type: String,
      required: true,
    },
    number_two: {
      type: String,
      required: true,
    },
    number_three: {
      type: String,
      required: true,
    },
  },
};
</script>