<template>
  <ul class="list-unstyled birthday-person-list">
    <BirthdayPerson v-for="(person, index) in persons" :key="index" :person="person" />
  </ul>
</template>

<script>
import BirthdayPerson from "./BirthdayPerson";
export default {
  props: ["persons"],
  components: {
    BirthdayPerson
  }
};
</script>

<style lang="scss" scoped>
.birthday-person-list {
  display: flex;
  align-items: center;
}
</style>