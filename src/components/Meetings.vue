<template>
  <main class="container">
    <h1>Meetings</h1>
    <hr />
    <!-- .........  -->
    <div class="">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <router-link class="nav-link active" to="/filtermeetings">
            Filter / Search meetings</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/addmeetings">
            Add a meeting</router-link
          >
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </main>
</template>

<script>
export default {
  name: "Meetings",
};
</script>

<style>
.customHr {
  margin-top: -2px;
}
.searchBox {
  width: 100%;
  height: auto;
  background-color: #fdf2cb;
  border-radius: 5px;
}
.searchBox h2 {
  color: #585444;
  padding: 20px 0 0 15px;
  font-size: 35px;
}
.searchBox option {
  background-color: rgb(141, 192, 221);
  width: 70%;
  border-radius: 5px;
}

/* date search  */
.date_search {
  padding: 10px 20px;
}
.date_search p {
  margin: 12px 0px;
}
.date_search_dwopdown {
  width: 100%;
  height: 38px;
  padding-left: 12px;
  border-radius: 5px;
}
textarea {
  width: 94%;
  padding: 10px;
  border-radius: 5px;
}
.date_search button {
  margin: 18px 0;
  padding: 8px 10px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: rgb(39, 123, 156);
}

/* attendees box */

.attedees_box {
  width: auto;
  height: auto;
  margin: 20px 0px;
  padding: 15px 20px;
  border: 1px solid rgb(177, 177, 177);
  border-radius: 5px;
}
.attedees_box p {
  font-size: 20px;
  margin: 14px 0px;
}
.btn-color {
  background-color: #fd6f96;
}
.attedees_box_dropdown {
  padding: 7px 12px;
  border-radius: 5px;
}
.add_btn {
  margin-left: 10px;
  padding: 7px 12px;
}

@media (min-width: 600px) {
  textarea {
    width: 98%;
  }
}
</style>
