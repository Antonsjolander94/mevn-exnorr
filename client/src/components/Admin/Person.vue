<template>
  <b-list-group-item class="text-white">
    <b-img class="person-img" v-if="url" fluid :src="url"></b-img>
    <strong>{{person.fullName}}</strong>
    <div class="buttons">
      <b-button @click="editPerson(person)" variant="outline-secondary">edit</b-button>
      <b-button @click="delPerson(person._id)" variant="outline-secondary" class="ml-3">x</b-button>
    </div>
  </b-list-group-item>
</template>

<script>
export default {
  props: ["person"],
  data() {
    return {
      edit: false,
      url: ""
    };
  },
  mounted() {
    this.combinePersonUrl();
  },
  methods: {
    editPerson(person) {
      this.$emit("editPerson", person);
    },
    delPerson(id) {
      this.$emit("deletePerson", id);
    },
    combinePersonUrl() {
      if (this.person && this.person.image) {
        this.url = `${process.env.VUE_APP_IMGURL}${this.person.image}`;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.list-group-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  min-height: 70px;
  background-color: rgba($color: grey, $alpha: 0.3);
  p {
    margin: 0;
  }
  &:hover {
    background-color: rgba($color: grey, $alpha: 0.5);
  }
  .person-img {
    max-width: 100px;
  }

  .buttons {
    display: flex;
    align-items: center;
  }
}
</style>