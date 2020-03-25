<template>
  <div id="app">
    <Errors v-if="error" :msg="error" />
    <Navbar v-if="isLoggedIn" />
    <vue-page-transition name="fade-in-left">
      <router-view />
    </vue-page-transition>
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
import Navbar from "@/components/Navbar";
import Errors from "@/components/Errors";

export default {
  components: {
    Navbar,
    Errors
  },
  computed: {
    ...mapGetters(["isLoggedIn", "error"])
  },
  methods: {
    ...mapActions(["fetchPersons"])
  },
  created() {
    this.fetchPersons();
  }
};
</script>

