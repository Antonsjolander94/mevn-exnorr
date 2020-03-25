<template>
  <div>
    <hooper
      style="height: auto"
      @slide="slide"
      ref="carousel"
      v-if="allPersons && allPersons.length > 0"
      :settings="hooperSettings"
    >
      <slide v-for="(person, index) in allPersons" :key="index">
        <SlideHooper :person="person" />
      </slide>
    </hooper>
  </div>
</template>


<script>
import { mapActions, mapGetters } from "vuex";
import { Hooper, Slide } from "hooper";
import SlideHooper from "./SlideHooper";
import "hooper/dist/hooper.css";
export default {
  data() {
    return {
      hooperSettings: {
        itemsToShow: 5,
        centerMode: true,
        infiniteScroll: true,
        autoPlay: true,
        playSpeed: 5000
      },
      carouselData: 0,
      myCarouselData: 0
    };
  },
  components: {
    Hooper,
    Slide,
    SlideHooper
  },
  methods: {
    ...mapActions(["fetchPersons"]),
    slidePrev() {
      this.$refs.carousel.slidePrev();
    },
    slideNext() {
      this.$refs.carousel.slideNext();
    },
    slide() {
      let slides = document.getElementsByClassName("is-active");

      let allSlides = document.getElementsByClassName("hooper-slide");
      for (const iterator of allSlides) {
        iterator.classList.remove("first-active-slide");
        iterator.classList.remove("second-active-slide");
      }

      setTimeout(function() {
        slides[0].classList.add("first-active-slide");
        slides[4].classList.add("first-active-slide");
        slides[1].classList.add("second-active-slide");
        slides[3].classList.add("second-active-slide");
      }, 100);
    }
  },
  computed: {
    ...mapGetters(["allPersons"])
  },
  created() {
    this.fetchPersons();
  }
};
</script>

<style lang="scss" >
.hooper-track {
  align-items: center;
  .hooper-slide {
    &.is-current {
      .dutt {
        opacity: 1;
        transform: translateY(0px);
      }
      .slide-info {
        opacity: 1;
        transform: translateY(0px);
      }
      .slide-container {
        img {
          width: 320px;
          height: 320px;
          margin: 0;
          opacity: 1;
        }
        .person-image-slide {
          width: 320px;
          height: 320px;
          margin: 0;
          opacity: 1;
        }
      }
    }
    &.first-active-slide {
      .slide-container {
        img {
          width: 106px;
          height: 106px;
          opacity: 0.15;
        }
        .person-image-slide {
          width: 106px;
          height: 106px;
          opacity: 0.15;
        }
      }
    }
    &.second-active-slide {
      .slide-container {
        img {
          width: 146px;
          height: 146px;
          opacity: 0.35;
        }
        .person-image-slide {
          width: 146px;
          height: 146px;
          opacity: 0.35;
        }
      }
    }
  }
}
</style>