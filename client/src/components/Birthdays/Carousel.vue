

<template>
  <div id="carousel-wrapper">
    <carousel-3d
      ref="mycarousel"
      :width="350"
      :autoplay="true"
      :autoplay-timeout="3500"
      :display="8"
      :height="680"
      :animation-speed="700"
      :perspective="190"
      :inverse-scaling="650"
      :space="600"
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
    this.$nextTick(function() {
      // Will be executed when the DOM is ready
      if (this.allPersons && this.allPersons.length > 0) {
        this.$refs.mycarousel.goSlide(0);
        console.log({ data: this.allPersons });
      }
    });
  },
  methods: {
    ...mapActions(["fetchPersons"])
  },
  computed: {
    ...mapGetters(["allPersons"]),
    personImg: function() {
      return `http://localhost:5000/uploads/${this.person.image}`;
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
    opacity: 0.1 !important;
  }
  &.left-2 {
    opacity: 0.3 !important;
  }
  &.left-1 {
    opacity: 0.4 !important;
  }
  &.right-3 {
    opacity: 0.1 !important;
  }
  &.right-2 {
    opacity: 0.3 !important;
  }
  &.right-1 {
    opacity: 0.4 !important;
  }
}
</style>