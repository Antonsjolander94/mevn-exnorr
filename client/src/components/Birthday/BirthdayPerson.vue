<template>
  <li class="birthday-person-list-item">
    <b-card>
      <Duttar class="duttar" />
      <div :style="{ backgroundImage: 'url(' + personImg + ')' }" class="birthday-person-image"></div>
      <h1>Grattis {{firstName}}!</h1>
    </b-card>
  </li>
</template>

<script>
import Duttar from "@/assets/duttar.svg?inline";

export default {
  props: ["person"],
  components: {
    Duttar
  },
  computed: {
    personImg: function() {
      return `http://localhost:5000/uploads/${this.person.image}`;
    },
    firstName: function() {
      return this.person.name.split(" ")[0];
    }
  }
};
</script>

<style lang="scss" scoped>
.birthday-person-list-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  margin-right: 85px;
  &:last-child {
    margin-right: 0px;
  }
  .duttar {
    width: 660px;
    fill: #ff00ff;
  }
  .card {
    background: transparent;
  }

  .birthday-person-image {
    height: 505px;
    width: 505px;
    background-position: center;
    background-size: cover;
    border-radius: 50%;
    margin: 0 auto;
    background-repeat: no-repeat;
    margin-bottom: 60px;
  }
  h1 {
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 70px;
    line-height: 80px;
    text-align: center;
  }
}
</style>