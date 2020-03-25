

<template>
  <div id="carousel-wrapper">
    <carousel-3d
      ref="carousel"
      :width="350"
      :height="740"
      :autoplay="true"
      :autoplay-timeout="3000"
      :inverse-scaling="650"
      :display="8"
      :space="600"
      :loop="true"
      :perspective="0"
      v-if="allPersons && allPersons.length > 0"
    >
      <slide v-for="(slide, i) in allPersons" :index="i" :key="i">
        <Slide3D :person="slide"></Slide3D>
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
import { mapGetters, mapActions } from "vuex";
import Slide3D from "./Slide3D";

export default {
  name: "carousel-wrapper",
  components: {
    "carousel-3d": Carousel3d,
    slide: Slide,
    Slide3D
  },
  data: function() {
    return {
      slides: 7
    };
  },
  mounted() {
    if (this.allPersons && this.allPersons.length > 0) {
      console.log({ data: this.allPersons });
      setTimeout(() => {
        this.$refs["carousel"].autoPlay();
        this.$refs["carousel"].goToPage(0);
      }, 1000);
    }
  },
  methods: {
    ...mapActions(["fetchPersons"])
  },
  computed: {
    ...mapGetters(["allPersons"]),
    personImg: function() {
      return `${process.env.VUE_APP_IMGURL}${this.person.image}`;
    }
  },
  created() {
    this.fetchPersons();
  }
};
</script>

<style  lang="scss">
.app-slide-person-container {
  display: flex;
  .app-slide-duttar {
  }
  .app-slide-info {
  }
}

.carousel-3d-container figure {
  margin: 0;
}

.carousel-3d-container figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
}
#carousel-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.carousel-3d-slide {
  background-color: transparent;
  border: none;

  &.current {
    .app-slide-person-container {
    }
  }
  &.left-3 {
    opacity: 0.2 !important;
  }
  &.left-2 {
    opacity: 0.4 !important;
  }
  &.left-1 {
    opacity: 0.5 !important;
  }
  &.right-3 {
    opacity: 0.2 !important;
  }
  &.right-2 {
    opacity: 0.4 !important;
  }
  &.right-1 {
    opacity: 0.5 !important;
  }
}
</style>