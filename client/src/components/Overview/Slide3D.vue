<template>
  <div class="app-slide-person-container">
    <Duttar class="app-slide-duttar" />
    <div v-if="isAnton" class="glasses">
      <img src="@/assets/glasses.png" alt />
    </div>
    <div class="app-slide-info">
      <h1>{{person.day}}</h1>
      <h3>{{monthByNumber}}</h3>
    </div>
    <div class="app-slide-img" :style="{ backgroundImage: 'url(' + personImg + ')' }"></div>
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
    },
    isAnton: function() {
      return this.person.forename.includes("Anton");
    }
  }
};
</script>

<style lang="scss" scoped>
.app-slide-person-container {
  position: relative;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 256px;
    line-height: 294px;
    margin-bottom: -26px;
    color: white;
    text-shadow: 0px 0px 25px rgb(0, 0, 0);
  }
  h3 {
    font-size: 48px;
    line-height: 55px;
    text-transform: uppercase;
    color: white;
  }
  .glasses {
    width: 96px;
    position: absolute;
    bottom: 0;
    transform: rotate(45deg);
    left: 0;
    right: 0;
    opacity: 0;
    top: 0;
    text-align: center;
    transition: opacity 0.6s ease, transform 3.3s ease;
    fill: #ff00ff;
    transform: translateY(-250px);
    z-index: 99;
    margin: 0 auto;
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .app-slide-duttar {
    width: 262px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    top: 0;
    text-align: center;

    transition: opacity 0.6s ease, transform 0.6s ease;
    fill: #ff00ff;
    transform: translateY(250px);
    z-index: 1;
    margin: 0 auto;
  }
  .app-slide-info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    top: 0;
    text-align: center;
    z-index: 3;

    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .app-slide-img {
    width: 350px;
    height: 350px;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
    margin-top: 100px;
    z-index: 2;
  }
}
</style>