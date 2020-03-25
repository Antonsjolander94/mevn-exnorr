
<template>
  <b-container>
    <b-row>
      <b-col cols="4"></b-col>
      <b-col cols="12" md="4">
        <div class="card mx-auto">
          <div class="card-header text-white bg-primary">
            <h4 class="mb-0">Logga in</h4>
          </div>
          <div class="card-body">
            <form @submit.prevent="loginUser">
              <div class="form-group">
                <label for="username">Username</label>
                <input
                  id="username"
                  type="text"
                  placeholder="Username"
                  name="username"
                  v-model="username"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  name="password"
                  id="password"
                  v-model="password"
                />
              </div>
              <input type="submit" class="btn btn-primary" value="Login" />
            </form>
          </div>
        </div>
      </b-col>
      <b-col cols="4"></b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(["login"]),
    loginUser() {
      let user = {
        username: this.username,
        password: this.password
      };
      this.login(user)
        .then(res => {
          if (res.data.success) {
            this.$router.push("/admin");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>