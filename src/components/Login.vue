<template>
  <div class="login_container">
    <form class="login-email" @submit.prevent="login">
      <p class="login-text" style="font-size: 2rem; font-weight: 800">Login</p>
      <div class="input-group">
        <input
          type="email"
          placeholder="Email"
          name="email"
          value=""
          required
          v-model="form.email"
        />
      </div>
      <div class="input-group">
        <input
          type="password"
          placeholder="Password"
          name="password"
          value=""
          required
          v-model="form.password"
        />
      </div>
      <div class="input-group">
        <button name="submit" class="btn">Login</button>
      </div>
      <p class="login-register-text">
        Don't have an account?
        <router-link to="/register">Register Here</router-link>.
      </p>
    </form>
  </div>
</template>

<script>
// import { login } from "@/services/managements";
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    login() {
      console.log(this.form);
      this.$store
        .dispatch("login", this.form)
        .then(() => {
          this.$router.push({ name: "Calendar" });
        })
        .catch((error) => {
          console.log(error);
          // console.log("is auth", this.$store.getters.isAuthenticated);
        });
    },
  },
};
</script>

<style >
.login_container {
  width: 265px;
  min-height: 342px;
  margin: 10rem 1.5rem;
  background: rgb(238, 220, 220);
  border-radius: 5px;
  box-shadow: 0 0 5px rgb(0 0 0 / 30%);
  padding: 40px 30px;
  line-height: 0.9;
  /* display: flex;
    justify-content: center;
    align-items: center; */
}

.login_container .login-text {
  color: rgb(0, 0, 0);
  font-weight: 500;
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 20px;
  display: block;
  text-transform: capitalize;
}

.login_container .login-email .input-group {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50px;
  margin: 25px 0;
}
input {
  background-color: rgb(229, 202, 255);
  border-radius: 23px;
  padding-left: 28px;
}

.login_container .btn {
  display: block;
  width: 100%;
  padding: 15px 20px;
  text-align: center;
  border: none;
  background: rgb(74, 71, 119);
  outline: none;
  border-radius: 30px;
  font-size: 1.2rem;
  color: rgb(255, 255, 255);
  cursor: pointer;
  transition: 0.3s;
}
.login_container:hover {
  background-color: rgb(214, 214, 238);
}

.btn,
.input-group:hover {
  filter: brightness(120%);
}

.login_container .login-email .input-group input:focus,
.login-email .input-group input:valid {
  border-color: rgb(81, 77, 134);
}

@media only screen and (min-width: 600px) {
  .login_container {
    display: flex;
    justify-content: center;
    width: 350px;
    min-height: 342px;
    margin: 3.91rem 2.5rem;
    margin-left: 37%;
  }
}
</style>
