<template>
  <div class="mt-5">
    <AddPerson @addedPerson="addedPerson"></AddPerson>

    <b-list-group v-if="allPersons && allPersons.length > 0">
      <Person
        @editPerson="editPerson"
        @deletePerson="deletePerson"
        v-for="(person, index) in allPersons"
        :key="index"
        :person="person"
      />
    </b-list-group>
    <h3 v-else class="text-white">Hittade inga personer :(</h3>
    <b-modal
      scrollable
      ref="edit-person"
      no-close-on-backdrop
      hide-header
      no-close-on-esc
      hide-footer
    >
      <b-form @submit.prevent="onSubmit" v-if="person">
        <template v-if="person.forename">
          <label for="forename">Förnamn</label>
          <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
            <b-input
              id="forename"
              v-model="editPersonData.forename"
              type="text"
              :placeholder="person.forename"
            ></b-input>
          </b-input-group>
        </template>
        <br />
        <template v-if="person.surname">
          <label for="surname">Efternamn</label>
          <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
            <b-input
              id="surname"
              v-model="editPersonData.surname"
              type="text"
              :placeholder="person.surname"
            ></b-input>
          </b-input-group>
        </template>
        <br />
        <template v-if="person.month">
          <label for="month">Månad</label>
          <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
            <b-input
              id="month"
              v-model="editPersonData.month"
              type="number"
              :placeholder="person.month.toString()"
            ></b-input>
          </b-input-group>
        </template>
        <br />
        <template v-if="person.day">
          <label for="day">Dag</label>
          <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
            <b-input
              id="day"
              v-model="editPersonData.day"
              type="number"
              :placeholder="person.day.toString()"
            ></b-input>
          </b-input-group>
        </template>
        <br />
        <template v-if="person.year">
          <label for="year">År</label>
          <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
            <b-input
              id="year"
              v-model="editPersonData.year"
              type="number"
              :placeholder="person.year.toString()"
            ></b-input>
          </b-input-group>
        </template>

        <b-img class="mt-5" v-if="person.image" fluid :src="personImg"></b-img>

        <div class="d-flex flex-row justify-content-between mt-3">
          <b-button :disabled="isComplete == false" type="submit" variant="primary">Spara</b-button>
          <b-button @click="hideModal" variant="secondary">Avbryt</b-button>
        </div>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import Person from "./Person";
import { mapGetters, mapActions } from "vuex";
import AddPerson from "@/components/Admin/AddPerson";

export default {
  components: {
    Person,
    AddPerson
  },
  data() {
    return {
      url: "",
      person: null,
      editPersonData: {
        forename: "",
        surname: "",
        month: null,
        day: null,
        year: null
      }
    };
  },
  methods: {
    ...mapActions(["fetchPersons", "updatePerson", "deleteThePerson"]),
    async deletePerson(id) {
      if (
        window.confirm("Är du säker på att du vill ta bort den här personen?")
      ) {
        this.reset();
        await this.deleteThePerson(id);
      }
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
    },
    addedPerson() {
      this.fetchPersons();
    },
    async onSubmit() {
      let { forename, surname, month, day, year } = this.editPersonData;
      let obj = { ...this.person };
      if (forename) {
        obj.forename = forename;
      }
      if (surname) {
        obj.surname = surname;
      }
      if (month) {
        obj.month = month;
      }
      if (day) {
        obj.day = day;
      }
      if (year) {
        obj.year = year;
      }
      let newObj = {
        id: obj._id,
        forename: forename ? forename : obj.forename,
        surname: surname ? surname : obj.surname,
        month: month ? Number(month) : Number(obj.month),
        day: day ? Number(day) : Number(obj.day),
        year: year ? Number(year) : Number(obj.year)
      };
      console.log({ submit: newObj });
      await this.updatePerson(newObj);
      this.reset();
      this.fetchPersons();
      this.$refs["edit-person"].hide();
    },
    editPerson(person) {
      let personObj = { ...person };
      console.log({ person: personObj });
      this.person = personObj;
      this.$refs["edit-person"].show();
    },
    hideModal() {
      this.reset();
      this.$refs["edit-person"].hide();
    },
    reset() {
      let form = {
        forename: "",
        surname: "",
        month: null,
        day: null,
        year: null
      };

      this.editPersonData = form;
    }
  },
  computed: {
    ...mapGetters(["allPersons"]),
    personImg: function() {
      return `${process.env.VUE_APP_IMGURL}${this.person.image}`;
    },
    isComplete: function() {
      let { forename, surname, month, day, year } = this.editPersonData;
      if (forename || surname || month || day || year) {
        return true;
      } else {
        return false;
      }
    }
  },
  created() {
    this.fetchPersons();
    console.log(this.allPersons);
  }
};
</script>

<style lang="scss" scoped>
.add-new-person {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba($color: grey, $alpha: 0.3);
  p {
    margin: 0;
  }
}
</style>