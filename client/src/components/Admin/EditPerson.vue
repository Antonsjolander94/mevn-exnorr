<template>
  <b-modal scrollable no-close-on-esc no-close-on-backdrop hide-footer hide-header id="edit-modal">
    <div
      v-if="personData && personData.image"
      class="person-image mb-3"
      v-bind:style="{ backgroundImage: 'url(' + getImgUrl + ')' }"
    />
    <b-form @submit.prevent="onSubmit" v-if="personData">
      <b-form-group>
        <label for="name">Namn</label>
        <b-form-input v-model="personData.name" type="text" id="name" placeholder="Namn"></b-form-input>
      </b-form-group>
      <b-form-group>
        <label for="day">Dag</label>
        <b-form-input v-model="personData.day" type="number" id="day" placeholder="Dag"></b-form-input>
      </b-form-group>
      <b-form-group>
        <label for="month">Månad</label>
        <b-form-select id="month" type="number" v-model="personData.month" :options="months"></b-form-select>
      </b-form-group>
      <b-form-group>
        <label for="year">År</label>
        <b-form-input v-model="personData.year" type="number" id="year" placeholder="År"></b-form-input>
      </b-form-group>

      <div class="mt-4 d-flex justify-content-between">
        <b-button variant="success" type="submit">Spara</b-button>
        <b-button variant="outline-secondary" @click="hideEditPersonModal">Avbryt</b-button>
      </div>
    </b-form>
  </b-modal>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["person"],
  data() {
    return {
      personData: null,
      months: [
        { value: null, text: "Välj en månad", disabled: true },
        { value: 1, text: "01 - Januari" },
        { value: 2, text: "02 - Februari" },
        { value: 3, text: "03 - Mars" },
        { value: 4, text: "04 - April" },
        { value: 5, text: "05 - Maj" },
        { value: 6, text: "06 - Juni" },
        { value: 7, text: "07 - Juli" },
        { value: 8, text: "08 - Augusti" },
        { value: 9, text: "09 - September" },
        { value: 10, text: "10 - Oktober" },
        { value: 11, text: "11 - November" },
        { value: 12, text: "12 - December" }
      ]
    };
  },
  watch: {
    person: function(newVal, oldVal) {
      console.log(newVal + "was" + oldVal);
      this.personData = newVal;
    }
  },
  methods: {
    ...mapActions(["updatePerson"]),
    cancelEdit() {
      this.$emit("cancelEdit");
    },
    async onSubmit() {
      await this.updatePerson(this.personData);
      this.$emit("editedPerson");
    },
    hideEditPersonModal() {
      this.$bvModal.hide("edit-modal");
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
.person-image {
  height: 350px;
  width: 350px;
  background-position: center;
  background-size: 110%;
  background-repeat: no-repeat;
  border-radius: 50%;
  margin: 0 auto;
  border: 1px solid rgba($color: #000000, $alpha: 0.1);
}
</style>