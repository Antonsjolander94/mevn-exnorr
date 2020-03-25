<template>
  <div class="slideshow">
    <vue-flux
      v-if="vfImages && vfImages.length > 0"
      :options="vfOptions"
      :images="vfImages"
      :transitions="vfTransitions"
      ref="slider"
    ></vue-flux>
    <Clock />
  </div>
</template>

<script>
import { VueFlux } from "vue-flux";
import { mapActions } from "vuex";
import Clock from "@/components/Slideshow/Clock";

export default {
  components: {
    VueFlux,
    Clock
  },
  data: () => ({
    vfImages: [],
    vfTransitions: ["concentric", "warp", "camera"],
    words: [
      "lappland",
      "northern",
      "scandinavia",
      "stockholm",
      "new-york",
      "wallpapers",
      "backgrounds",
      "nature",
      "swedish"
    ],
    vfOptions: {
      autoPlay: true,
      infinite: true,
      lazyLoad: true,
      lazyLoadAfter: 1
    }
  }),
  created() {
    this.changeRoute();
    this.fetchImages();
    this.startInterval();
  },

  watch: {
    "$route.fullPath": {
      immediate: true, // Immediate option to call watch handler on first mount
      handler() {
        this.vfImages = [];
        console.log("asd");
        console.log(this.vfImages);
      }
    }
  },
  methods: {
    ...mapActions(["pushOverview"]),
    changeRoute() {
      setTimeout(() => {
        this.pushOverview();
      }, 60 * 3 * 1000);
    },
    startInterval: function() {
      setInterval(() => {
        if (this.vfImages.length > 0 && this.$refs.slider) {
          this.$refs.slider.show("next");
        }
      }, 10000);
    },
    async fetchImages() {
      this.vfImages = [];
      let images = this.words.map(word => {
        return `https://source.unsplash.com/1920x1080/?${word}`;
      });
      this.vfImages = images;
    }
  }
};
</script>

<style lang="scss" scoped>
.slideshow {
  background-color: $black;
  height: 100vh;
  overflow: hidden;
  position: relative;
}
</style>