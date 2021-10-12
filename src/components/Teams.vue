<template>
  <div>
    <main class="container">
      <h1>Teams</h1>
      <hr />
      <!-- ........  -->

      <p>View and edit teams you are part of</p>
      <AppSpinner v-if="status === 'LOADING'" />
      <!-- Teams  -->
      <div class="d-flex row" v-else-if="status === 'LOADED'">
        <div
          class="card mr-auto d-flex justify-content-around my-3"
          style="width: 20rem"
          v-for="team in teams"
          :key="team.id"
        >
          <div row sm-4>
            <div class="card-body">
              <h5 class="card-title">{{ team.name }}</h5>
              <p class="card-text">@{{ team.shortName }}</p>
              <p class="card-text">
                {{ team.description }}
              </p>
              <input
                type="button"
                value="Excuse yourself"
                class="btn btn-danger btn-lg btn-color"
                @click="excuseTeams(team._id)"
              />
              <hr />
              <b>Members:</b>
              <p
                class="card-text"
                v-for="attendee in team.members"
                :key="attendee.id"
              >
                {{ attendee.email }}
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
          <div class="closebtn ml-auto mx-2" v-on:click="hideForm">
            <i class="fas fa-times"></i>
          </div>

          <div class="card-body">
            <form>
              <h4>Add New Team</h4>
              <div class="form-group">
                <label for="name">Full Name</label>
                <input
                  type="name"
                  class="form-control"
                  id="name"
                  placeholder="Enter full Name"
                  v-model="form.name"
                />
              </div>
              <div class="form-group">
                <label for="InputEmail1">Team Id</label>
                <input
                  type="text"
                  class="form-control"
                  id="InputEmail1"
                  placeholder="Team Id"
                  v-model="form.shortName"
                />
              </div>
              <div class="form-group">
                <label for="description">Description</label>
                <textarea
                  type="text"
                  class="form-control"
                  placeholder="Team Id"
                  v-model="form.description"
                />
              </div>
              <div class="form-group">
                <label for="description">Members</label>
                <select
                  name="emails"
                  id="emails"
                  class="date-selector form-control"
                  v-model="emailId"
                  @change="emailList(emailId)"
                >
                  <option value="Select member">Select a member</option>
                  <option v-for="user in users" :key="user.id">
                    {{ user.email }}
                  </option>
                </select>
              </div>
              <button @click="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <AppAlert v-if="status === 'ERROR'" :message="error.message">
      <h4>Error</h4>
      <hr />
      <p>
        {{ error.message }}
      </p>
    </AppAlert>
  </div>

  <!-- <model section> -->
</template>

<script>
import { getTeams, excuseTeams, addTeams } from "@/services/teams";
import { getUsers } from "@/services/meetings.js";
export default {
  name: "Teams",
  data() {
    return {
      addForm: false,
      teams: [],
      users: [],
      error: null,
      status: "LOADING",
      form: {
        name: "Test 2",
        shortName: "test 2",
        description: "hello world 2",
        members: [],
      },
    };
  },
  created() {
    // console.log("created");
    getTeams()
      .then((data) => {
        this.status = "LOADED";
        this.teams = data;
        console.log(data);
      })
      .catch((error) => {
        this.status = "ERROR";
        this.error = error;
      }),
      getUsers().then((data) => {
        this.users = data;
        console.log(this.users);
      });
  },

  // created() {
  //   getTeams()
  //     .then((data) => {
  //       this.status = "LOADED";
  //       console.log(this.data);
  //       this.teams = data;
  //     })
  //     .catch((error) => {
  //       this.status = "ERROR";
  //       this.error = error;
  //     });

  // getTeams().then((data) => {
  //   console.log("getting data", this.data);
  //   this.teams = data;
  // });
  // viewTeams();
  // getUsers().then((data) => {
  //   this.users = data;
  //   console.log(this.users);
  // });
  // },

  methods: {
    showForm() {
      this.addForm = true;
    },
    hideForm() {
      this.addForm = false;
    },
    excuseTeams(_id) {
      excuseTeams(_id).then((response) => console.log(response));
    },
    submit() {
      console.log(this.form);
      addTeams(this.form).then((data) => {
        alert("Team added");
        console.log("axios call ke baad", data);
        this.form.members = [];
      });
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
.bg-popup {
  position: fixed;
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
</style>
