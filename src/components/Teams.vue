<template>
  <div>
    <main class="container">
      <h1>Teams</h1>
      <hr />
      <!-- ........  -->

      <p>View and edit teams you are part of</p>
      <div class="d-flex justify-content-center" v-if="status === 'LOADING'">
        <!-- <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div> -->
        <h2 class="animate">Loading...</h2>
      </div>
      <!-- Teams  -->
      <div class="d-flex row" v-else-if="status === 'LOADED'">
        <div
          class="card mr-auto d-flex justify-content-around my-3"
          style="width: 20rem"
          v-for="viewMeeting in viewMeetings"
          :key="viewMeeting"
        >
          <div row sm-4>
            <div class="card-body">
              <h5 class="card-title">{{ viewMeeting.name }}</h5>
              <p class="card-text">{{ viewMeeting.description }}</p>
              <p class="card-text">
                Teams to come up with strategies to win over customers by end of
                FY21
              </p>
              <a href="#" class="btn btn-danger">Excuse yourself</a>
              <hr />
              <p class="card-text" v-for="user in 3" :key="user.id">
                Members: {{ user.email }}
              </p>
              <select id="inputUser" class="form-control">
                <option value="Select member">Select a member</option>
                <option v-for="user in users" :key="user.id">
                  {{ user.email }}
                </option>
              </select>
              <button
                type="button"
                class="btn btn-primary btn-sm mx-2 my-2 add_btn"
              >
                Add
              </button>
            </div>
          </div>
        </div>
        <button
          type="button"
          class="
            addMeetingBtn
            card
            mr-auto
            btn btn-secondary
            justify-content-center
            align-items-center
          "
          style="width: 18rem"
          v-on:click="showForm"
        >
          +
        </button>
      </div>
    </main>

    <!-- popup -->
    <div class="bg-popup" v-if="addForm">
      <div class="">
        <div
          class="
            card
            mr-auto
            justify-content-center
            align-items-center
            popupform
          "
          style="width: 20rem"
        >
          <div class="closebtn ml-auto mx-2 my-2" v-on:click="hideForm">
            <i class="fas fa-times"></i>
          </div>

          <div class="card-body">
            <form>
              <div class="form-group">
                <label for="name">Full Name</label>
                <input
                  type="name"
                  class="form-control"
                  id="name"
                  placeholder="Enter full Name"
                />
              </div>
              <div class="form-group">
                <label for="InputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="InputEmail1"
                  placeholder="Enter email"
                />
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <model section> -->
</template>

<script>
import { viewMeetings } from "@/services/teams";
import { getUsers } from "@/services/meetings.js";
export default {
  name: "Teams",
  data() {
    return {
      addForm: false,
      viewMeetings: [],
      users: [],
      status: "LOADING",
    };
  },
  created() {
    viewMeetings(this.viewMeetings).then((data) => {
      this.status = "LOADED";
      console.log(viewMeetings);
      this.viewMeetings = data;
    });
    getUsers().then((data) => {
      this.users = data;
      console.log(this.users);
    });
  },

  methods: {
    showForm() {
      this.addForm = true;
    },
    hideForm() {
      this.addForm = false;
    },
  },
};
</script>

<style >
.addMeetingBtn {
  color: black;
  font-size: 50px;
}
.card:hover {
  border-color: 2px 2px red;
}
.bg-popup {
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.popupform {
  background-color: #d7e9f7;
}
.closebtn:hover {
  transform: scale(1.5);
  cursor: pointer;
}
.card:hover {
  box-shadow: 0px 2px 10px blue;
  border-color: blue;
}
@keyframes load {
  0% {
    opacity: 0.08;
    /*         font-size: 10px; */
    /* 				font-weight: 400; */
    filter: blur(5px);
    letter-spacing: 3px;
  }
  100% {
    /*         opacity: 1; */
    /*         font-size: 12px; */
    /* 				font-weight:600; */
    /* 				filter: blur(0); */
  }
}

.animate {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: auto;
  /* 	width: 350px; */
  /* 	font-size:26px; */
  font-family: sans-serif, Arial;
  animation: load 0.5s infinite 0s ease-in-out;
  animation-direction: alternate;
  text-shadow: 0 0 1px rgb(155, 150, 150);
}
/* body,
html {
  height: 96vh;
  background-color: #111;
  color: white;
} */
</style>
