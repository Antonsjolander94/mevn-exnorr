<template>
  <div class="carousel-cell">
    {{ person.forename }}
    {{ person.daysLeft }}
  </div>
</template>

<script>
export default {
  props: ["person"]
};
</script>

<style lang="scss" scoped>
.carousel-cell {
  width: 15%;
  display: block;
  margin-right: 10px;
  margin-bottom: 10px;
  background: #8c8;
  counter-increment: carousel-cell;
  opacity: 0.5;
  height: 350px;
  text-align: center;

  &.is-selected {
    opacity: 1;
  }
  &:nth-child(2) {
    background: red;
  }
  &:nth-child(3) {
    background: blue;
  }
  &:last-child {
    background: purple;
  }
  &:nth-last-child(2) {
    background: gold;
  }
}
</style>
