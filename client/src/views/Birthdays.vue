<template>
  <div class="birthdays">
    <div class="birthday-container" v-if="allbirthdayPersons && allbirthdayPersons.length > 0">
      <BirthdayPersonList :persons="allbirthdayPersons" />
    </div>
    <Carousel v-else />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Carousel from "@/components/Birthdays/Carousel";
import BirthdayPersonList from "@/components/Birthday/BirthdayPersonList";

export default {
  components: {
    Carousel,
    BirthdayPersonList
  },
  methods: {
    ...mapActions(["fetchPersons"])
  },
  computed: {
    ...mapGetters(["allbirthdayPersons"])
  },
  beforeMount() {},
  mounted: function() {
    this.$nextTick(function() {
      // Will be executed when the DOM is ready
      console.log("asd");
      this.fetchPersons();
    });
  }
};
</script>

<style lang="scss" >
.birthdays {
  background: black;
  height: 100vh;
  overflow: hidden;
}
.birthday-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  .congratulations-title {
    font-size: 5em;
    letter-spacing: 0.05em;
  }
}
</style>