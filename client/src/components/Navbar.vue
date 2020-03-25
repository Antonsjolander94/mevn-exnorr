<template>
  <div>
    <b-navbar fixed="top" type="dark" class="app-navbar" variant="dark">
      <b-navbar-nav>
        <li class="nav-item">
          <router-link class="nav-link" exact to="/">Födelsedagar</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/birthday">Födelsedag</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/slideshow">Bildspel</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin">Admin</router-link>
        </li>

        <b-nav-item @click.prevent="logoutUser" v-if="isLoggedIn" href="/logout">Logga ut</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  methods: {
    ...mapActions(["logout"]),
    logoutUser() {
      this.logout();
    }
  },
  computed: {
    ...mapGetters(["isLoggedIn"])
  }
};
</script>

<style lang="scss" >
.navbar {
  padding: 0 !important;
  background-color: rgba($color: #000000, $alpha: 0.5) !important;
  .nav-item {
    a {
      &.router-link-active {
        border-bottom: 2px solid white;
      }
    }
  }
}
</style>