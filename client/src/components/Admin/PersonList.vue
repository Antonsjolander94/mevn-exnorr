<template>
  <b-list-group class="mb-5">
    <AddPerson @addedPerson="fetchPersons" class="mb-3"></AddPerson>
    <template v-if="allPersons && allPersons.length > 0">
      <EditPerson @editedPerson="resetEdit" :person="person"></EditPerson>
      <Person
        @deletedPerson="fetchPersons"
        @editPerson="editPerson"
        v-for="(person, index) in allPersons"
        :key="index"
        :person="person"
      />
    </template>
  </b-list-group>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AddPerson from "./AddPerson";
import EditPerson from "./EditPerson";
import Person from "./Person";
export default {
  components: {
    Person,
    AddPerson,
    EditPerson
  },
  data() {
    return {
      person: null
    };
  },
  updated() {
    console.log(this.$route);
  },
  methods: {
    ...mapActions(["fetchPersons"]),
    resetEdit() {
      this.person = null;
      this.fetchPersons();
      this.$bvModal.hide("edit-modal");
    },
    editPerson(person) {
      this.person = person;
      this.person
        ? this.$bvModal.show("edit-modal")
        : this.$bvModal.hide("edit-modal");
    }
  },
  computed: {
    ...mapGetters(["allPersons"]),
    hasPersonID: function() {
      return this.person ? true : false;
    }
  },
  created() {
    this.fetchPersons();
  }
};
</script>

<style>
</style>