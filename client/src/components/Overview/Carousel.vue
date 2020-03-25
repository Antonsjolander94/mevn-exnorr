<template>
  <flickity v-if="allPersons && allPersons.length > 0" ref="flickity" :options="flickityOptions">
    <Slide v-for="(person, index) in allPersons" :person="person" :key="index" />
  </flickity>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Flickity from "vue-flickity";
import Slide from "./Slide";

export default {
  data() {
    return {
      flickityOptions: {
        pageDots: false,
        autoPlay: true,
        selectedAttraction: 0.01,
        cellAlign: "center",
        friction: 0.15,
        prevNextButtons: true,
        adaptiveHeight: true,
        wrapAround: true
      },
      selected: ""
    };
  },
  components: {
    Flickity,
    Slide
  },
  methods: {
    ...mapActions(["fetchPersons"])
  },
  computed: {
    ...mapGetters(["allPersons"]),

    personCarousel: function() {
      let arr = [...this.allPersons];

      for (let index = 0; index < 3; index++) {
        // Sista elementet
        const lastItem = arr.pop();
        // Lägg in i arr på index 0
        arr.unshift(lastItem);
      }

      console.log({ arr: arr });
      return arr;
    }
  },
  created() {
    this.fetchPersons();
  }
};
</script>

<style lang="scss">
.app-carousel {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  width: 100%;

  .carousel-cell {
    &.is-selected + .carousel-cell {
    }
  }
}
</style>
