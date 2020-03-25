<template>
  <div class="mb-4 pt-5">
    <b-button @click="showModal" variant="primary">Ny Person</b-button>
    <b-button class="ml-3" to="/slideshow" variant="primary">Till Bildspel</b-button>
    <b-button class="ml-3" to="/" variant="primary">Till Personer</b-button>

    <b-modal scrollable ref="my-modal" @submit.prevent="onSubmit" hide-footer title="Ny person">
      <b-form autocomplete="off">
        <br />
        <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
          <b-input v-model="form.forename" id="forename" type="text" required placeholder="Förnamn"></b-input>
        </b-input-group>
        <br />
        <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
          <b-input v-model="form.surname" id="surname" type="text" required placeholder="Efternamn"></b-input>
        </b-input-group>
        <br />
        <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
          <b-input v-model="form.month" id="month" type="number" required placeholder="Månad"></b-input>
        </b-input-group>
        <br />
        <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
          <b-input v-model="form.day" id="day" type="number" required placeholder="Dag"></b-input>
        </b-input-group>
        <br />
        <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
          <b-input v-model="form.year" id="year" type="number" required placeholder="År"></b-input>
        </b-input-group>
        <div
          class="form-file-img mt-3 mb-3"
          v-if="form.file && url"
          :style="{ backgroundImage: 'url(' + url + ')' }"
        >
          <div class="form-file-img-header">
            <b-button @click="deleteImage" variant="danger" rounded>x</b-button>
          </div>
          <b-img :src="url" fluid></b-img>
        </div>
        <b-form-file
          class="mb-3 mt-5"
          v-model="form.file"
          @change="onFileChange"
          :state="Boolean(form.file)"
          placeholder="Bild"
          drop-placeholder="Släpp bilden här..."
        ></b-form-file>
        <br />
        <div class="d-flex flex-row justify-content-between mt-3">
          <b-button
            @click="onSubmit"
            :disabled="isComplete == false"
            type="submit"
            variant="primary"
          >Spara</b-button>
          <b-button @click="hideModal" variant="secondary">Avbryt</b-button>
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
      url: "",
      form: {
        forename: "",
        surname: "",
        month: null,
        day: null,
        year: null,
        file: null
      }
    };
  },
  computed: {
    isComplete: function() {
      let { forename, surname, month, day, year } = this.form;
      if (forename && surname && month && day && year) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    ...mapActions(["addPerson"]),
    deleteImage() {
      this.url = "";
      this.form.file = null;
    },
    async onSubmit() {
      await this.addPerson(this.form);
      this.reset();
      this.hideModal();
      this.$emit("addedPerson");
      console.log("submitted");
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
    },
    reset() {
      let form = {
        forename: "",
        surname: "",
        month: null,
        day: null,
        year: null,
        file: null
      };

      this.form = form;
    },
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.reset();
      this.$refs["my-modal"].hide();
    }
  }
};
</script>

<style lang="scss" scoped>
.form-file-img {
  position: relative;
  max-height: 390px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  .form-file-img-header {
    position: absolute;
    background: rgba($color: #000000, $alpha: 0.5);
    top: 0;
    left: 0;
    right: 0;
    padding: 1rem;
  }
}
</style>