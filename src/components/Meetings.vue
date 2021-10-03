<template>
  <main class="container">
    <h1>Meetings</h1>
    <hr />
    <!-- .........  -->
    <div class="">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <router-link class="nav-link active" exact  to="/meetings/filtermeetings">
            Filter / Search meetings</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/addmeetings">
            Add a meeting</router-link>
        </li>
      </ul>
      <router-view/>
    </div>
  </main>
</template>

<script>

export default {
  name: "Meetings",
};
</script>
