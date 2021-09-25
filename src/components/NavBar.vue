<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark ">
      <div class="container">
        <h4 class="cal-heading ">My Meetings</h4>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="nav navbar-nav mr-auto ">
            <li class="nav-item ">
              <router-link class="nav-link" to="/" active-class="active" exact
                >Calendar</router-link
              >
            </li>
            <li class="nav-item ">
              <router-link
                class="nav-link"
                to="/Meetings"
                active-class="active"
                exact
                >Meetings</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                to="/Teams"
                active-class="active"
                exact
                >Teams</router-link
              >
            </li>
          </ul>

          <!-- .......... -->

          <ul class="nav navbar-nav ">
            <li class="nav-item">
              <router-link class="nav-link" to="#">
                <i class="fas fa-user-alt"></i> &nbsp; Hello!
                irahulkv@gamil.com</router-link
              >
            </li>
            <li class="nav-item ">
              <router-link class="nav-link" to="#" active-class="active" exact>
                <i class="fas fa-sign-out-alt "></i> &nbsp; Logout</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
.navbar {
  background-color: #7a76b9;
}
li {
  margin-right: 25px;
}
.li-border {
  background-color: #524c7c;
  box-shadow: 5px 10px 30px #383752;
  border-radius: 15px;
}
.cal-heading {
  display: none;
}
@media (max-width: 576px) {
  .cal-heading {
    display: block;
    color: aliceblue;
    text-shadow: 1px 1px 2px #c8c5e9;
  }
}
</style>
