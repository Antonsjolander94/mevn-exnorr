<template>
  <div class="overview">
    <Carousel @finished="changeRoute" />
  </div>
</template>

<script>
// import Carousel from "@/components/Overview/Carousel";
import Carousel from "@/components/Overview/Carousel3D";
import { mapActions } from "vuex";

export default {
  components: {
    Carousel
  },
  created() {
    this.changeRoute();
  },
  methods: {
    ...mapActions(["pushSlideshow"]),
    changeRoute() {
      setTimeout(() => {
        this.pushSlideshow();
      }, 60 * 3 * 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
.overview {
  background: $black;
  height: 100vh;
}
</style>
