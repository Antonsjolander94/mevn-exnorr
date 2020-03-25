<template>
  <b-list-group-item>
    <b-img class="person-image" v-if="person.image" fluid :src="getImgUrl" :alt="person.name" />
    <p class="mb-0">{{person.name}}</p>
    <div class="d-flex flex-row align-items-center justify-content-center">
      <p class="mb-0">{{person.year}}-</p>
      <p class="mb-0">
        <template v-if="person.month < 10">
          <span>0{{person.month}}-</span>
        </template>
        <template v-else>{{person.month}}-</template>
      </p>
      <p class="mb-0">
        <template v-if="person.day < 10">
          <span>0{{person.day}}</span>
        </template>
        <template v-else>{{person.day}}</template>
      </p>
    </div>
    <div class="b-list-group-actions">
      <b-button variant="outline-secondary" @click="editPerson(person)">
        <BIconPencil />
      </b-button>
      <b-button variant="outline-danger" @click="deletePerson(person._id)">
        <BIconTrash />
      </b-button>
    </div>
  </b-list-group-item>
</template>

<script>
import { mapActions } from "vuex";
import { BIconPencil, BIconTrash } from "bootstrap-vue";
export default {
  props: ["person"],
  components: {
    BIconPencil,
    BIconTrash
  },
  methods: {
    ...mapActions(["deleteThePerson"]),
    async deletePerson(id) {
      if (window.confirm("Ta bort personen?")) {
        await this.deleteThePerson(id);
        this.$emit("deletedPerson");
      }
    },
    editPerson(person) {
      this.$emit("editPerson", person);
    }
  },
  computed: {
    getImgUrl: function() {
      return `http://localhost:5000/uploads/${this.person.image}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.list-group-item {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
  }

  .person-image {
    max-width: 10%;
  }
  .b-list-group-actions {
    display: flex;
    align-items: center;
    button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-left: 5px;
    }
  }
}
</style>