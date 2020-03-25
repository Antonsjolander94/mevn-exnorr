<template>
  <div class="slide-container">
    <!-- {{ person.forename }}
    {{ person.surname }}
    {{ person.daysLeft }}-->
    <Duttar class="dutt" />
    <img v-if="!person.image" src="https://placekitten.com/g/300/300" alt="kitten" />
    <div class="person-image-slide" v-else :style="{ backgroundImage: 'url(' + personImg + ')' }"></div>
    <div class="slide-info">
      <h1>{{person.day}}</h1>
      <h3>{{monthByNumber}}</h3>
    </div>
  </div>
</template>

<script>
import Duttar from "@/assets/duttar.svg?inline";
export default {
  props: ["person"],
  components: {
    Duttar
  },
  computed: {
    monthByNumber: function() {
      return this.$moment()
        .month(this.person.month - 1)
        .format("MMM");
    },
    personImg: function() {
      return `${process.env.VUE_APP_IMGURL}${this.person.image}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.slide-container {
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  font-size: 30px;
  border-radius: 10px;
  height: 100%;
  position: relative;
  padding-top: 100px;
  .person-image-slide {
    background-position: center;
    background-size: cover;
    height: 175px;
    width: 175px;
    border-radius: 50%;
    transition: all 0.3s ease;
    margin: 87.5px 0;
    opacity: 0.3;
    z-index: 2;
  }
  .slide-info {
    min-height: 320px;
    opacity: 1;
    text-align: center;
    transition: opacity 0.3s ease, transform 1.2s ease;
    transform: translateY(-250px);
    h1 {
      font-size: 256px;
      line-height: 294px;
      margin-bottom: -26px;
      color: white;
    }
    h3 {
      font-size: 48px;
      line-height: 55px;
      text-transform: uppercase;
    }
  }
  .dutt {
    width: 262px;
    position: absolute;
    top: 0;
    fill: #ff00ff;
    opacity: 0;
    transition: opacity 0.3s ease, transform 1.2s ease;
    transform: translateY(250px);
    will-change: transform;
    z-index: 1;
  }

  img {
    height: 175px;
    width: 175px;
    border-radius: 50%;
    transition: all 0.3s ease;
    margin: 87.5px 0;
    opacity: 0.3;
    z-index: 2;
  }
}
</style>