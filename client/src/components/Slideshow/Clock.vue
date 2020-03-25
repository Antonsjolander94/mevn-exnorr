<template>
  <div class="info-box">
    <div class="info-box-content">
      <digital-clock :blink="false" :twelveHour="false" :displaySeconds="true" />
    </div>
  </div>
</template>

<script>
import DigitalClock from "vue-digital-clock";
export default {
  components: {
    DigitalClock
  }
};
</script>
<style lang="scss" scoped>
.info-box {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  /* display: flex;
    justify-content: center;
    align-items: center; */
  z-index: 9999999999;
  .info-box-content {
    background: rgba($color: $black, $alpha: 0.5);
    backdrop-filter: blur(5px);
    position: absolute;
    color: white;
    bottom: 5rem;
    left: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    time {
      padding: 3rem 5rem;
      font-size: 5em;
    }
  }
}
</style>