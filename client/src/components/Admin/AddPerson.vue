<template>
  <div>
    <b-button @click="modalShow = !modalShow" variant="primary">Ny person</b-button>

    <b-modal scrollable hide-footer v-model="modalShow" title="Ny person">
      <b-form @submit.prevent="onSubmit">
        <b-form-group>
          <label for="name">Namn</label>
          <b-form-input v-model="form.name" type="text" id="name" placeholder="Namn"></b-form-input>
        </b-form-group>
        <b-form-group>
          <label for="day">Dag</label>
          <b-form-input v-model="form.day" type="number" id="day" placeholder="Dag"></b-form-input>
        </b-form-group>
        <b-form-group>
          <label for="month">Månad</label>
          <b-form-select id="month" type="number" v-model="form.month" :options="months"></b-form-select>
        </b-form-group>
        <b-form-group>
          <label for="year">År</label>
          <b-form-input v-model="form.year" type="number" id="year" placeholder="År"></b-form-input>
        </b-form-group>
        <b-form-group>
          <label for="image">Bild</label>
          <b-form-file
            accept="image/jpeg, image/png"
            v-model="form.image"
            id="image"
            placeholder="Bild"
            plain
          ></b-form-file>
        </b-form-group>

        <div class="mt-4 d-flex justify-content-between">
          <b-button variant="success" type="submit">Spara</b-button>
          <b-button variant="outline-secondary" @click="modalShow = !modalShow">Avbryt</b-button>
        </div>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      modalShow: false,
      form: {
        name: "",
        day: null,
        month: null,
        year: null,
        image: null
      },
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

  methods: {
    ...mapActions(["addPerson"]),
    async onSubmit() {
      await this.addPerson(this.form);
      this.reset();
      this.$emit("addedPerson");
    },
    reset() {
      let form = {
        name: "",
        day: null,
        month: null,
        year: null,
        image: null
      };
      this.form = form;
      this.modalShow = false;
    }
  }
};
</script>