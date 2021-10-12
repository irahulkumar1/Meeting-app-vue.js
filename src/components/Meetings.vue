<template>
  <main class="container">
    <h1>Meetings</h1>
    <hr />
    <!-- .........  -->
    <div class="">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item">
          <router-link
            class="nav-link active"
            id="home-tab"
            data-toggle="tab"
            to="/meetings/filtermeetings"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Filter / Search meetings</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            id="profile-tab"
            data-toggle="tab"
            to="/meetings/addmeetings"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Add a meeting</router-link
          >
        </li>
      </ul>
      <router-view />
    </div>
  </main>
</template>

<script>
export default {
  name: "Meetings",
};
</script>
