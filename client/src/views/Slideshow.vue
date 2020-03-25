<template>
  <div class="page-flux-slider">
    <vue-flux
      :options="vfOptions"
      :images="images"
      :transitions="vfTransitions"
      :captions="vfCaptions"
      ref="slider"
    >
      <template v-slot:preloader>
        <flux-preloader />
      </template>
    </vue-flux>
  </div>
</template>

<script>
import {
  VueFlux,
  //   FluxCaption,
  //   FluxControls,
  //   FluxIndex,
  //   FluxPagination,
  FluxPreloader
} from "vue-flux";

export default {
  components: {
    VueFlux,
    // FluxCaption,
    // FluxControls,
    // FluxIndex,
    // FluxPagination,
    FluxPreloader
  },

  data: () => ({
    vfOptions: {
      autoplay: true
    },
    vfImages: ["URL1", "URL2", "URL3"],
    images: [
      "https://source.unsplash.com/SiFizC6pD9o/1920x1080",
      "https://source.unsplash.com/-81lVsfM4gQ/1920x1080",
      "https://source.unsplash.com/DcQ8dSqEosA/1920x1080",
      "https://source.unsplash.com/8spo0Sr00j8/1920x1080",
      "https://source.unsplash.com/Du8sGaNHVMc/1920x1080"
    ],
    vfTransitions: ["zip", "blinds2d", "round1", "swipe"],
    vfCaptions: [
      "Caption for image 1",
      "Caption for image 2",
      "Caption for image 3"
    ]
  })
};
</script>

<style lang="scss" scoped>
.page-flux-slider {
  height: 100vh;
  overflow: hidden;
}
</style>