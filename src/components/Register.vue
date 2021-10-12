<template>
  <div class="login_container">
    <form action="index.html" method="GET" class="login-email">
      <p class="login-text" style="font-size: 2rem; font-weight: 800">
        Register
      </p>
      <div class="input-group">
        <input
          type="text"
          placeholder="Your Name"
          name="text"
          value=""
          required
          v-model="name"
        />
      </div>
      <div class="input-group">
        <input
          type="email"
          placeholder="Email"
          name="email"
          value=""
          required
          v-model="email"
        />
      </div>
      <div class="input-group">
        <input
          type="password"
          placeholder="Password"
          name="password"
          value=""
          required
          v-model="password"
        />
      </div>
      <div class="input-group">
        <button name="submit" class="btn" @click="register">Register</button>
      </div>
      <p class="login-register-text">
        Already have an account?
        <router-link to="/login">Login Here</router-link>.
      </p>
    </form>
  </div>
</template>

<script>
import Vue from "vue";
import { register } from "@/services/managements";
export default {
  name: "Register",
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    register() {
      register(this.form)
        .then((data) => {
          Vue.$toast.open({
            message: "Success! Please Login",
            duration: 3000,
            type: "success",
          });
          console.log(data);
        })
        .catch(() =>
          Vue.$toast.open({
            message: "Error while signing up!",
            duration: 3000,
            type: "error",
          })
        );
    },
  },
};
</script>
<style>
</style>