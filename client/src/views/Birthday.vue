<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <div class="birthday-container">
          <BirthdayPersonList
            v-if="allbirthdayPersons && allbirthdayPersons.length > 0"
            :persons="allbirthdayPersons"
          />
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import BirthdayPersonList from "@/components/Birthday/BirthdayPersonList";
export default {
  components: {
    BirthdayPersonList
  },
  methods: {
    ...mapActions(["fetchPersons"])
  },
  computed: {
    ...mapGetters(["allbirthdayPersons"])
  },
  created() {
    this.fetchPersons();
  }
};
</script>
<style lang="scss" scoped>
.birthday-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  .congratulations-title {
    font-size: 5em;
    letter-spacing: 0.05em;
  }
}
</style>