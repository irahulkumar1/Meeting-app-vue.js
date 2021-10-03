<template>
  <div>
    <hr class="customHr" />

    <div class="searchBox">
      <h2>Search for meetings</h2>
      <hr style="margin: 10px" />

      <div class="date_search">
        <p>Date</p>
        <select
          class="date_search_dwopdown"
          name="date"
          id="date"
          v-model="period"
        >
          <option value="All">All</option>
          <option value="Past">Past</option>
          <option value="Today">Today</option>
          <option value="Upcoming">Upcoming</option>
        </select>

        <p>Search for</p>
        <textarea
          name=""
          id=""
          cols="48"
          rows="4"
          placeholder="Search using words which describe the meeting "
          v-model="searchDescription"
        ></textarea>
        <br />
        <button type="button" class="btn btn-primary">Search</button>
      </div>
    </div>
    <h2 style="margin: 20px 0; font-size: 29px">
      Meetings matching search criteria
    </h2>
    <!-- ...attedees_box....  -->
    <div class="d-flex justify-content-center" v-if="status === 'LOADING'">
      <h2 class="animate">Loading...</h2>
    </div>
    <hr />
    <div class="attedees_box" v-for="meeting in meetings" :key="meeting.index">
      <div>
        <h3 style="font-size: 24px">
          {{ meeting.date }}
          <span style="font-size: 16px"
            >{{ meeting.startTime.hours }}:{{ meeting.startTime.minutes }}</span
          >
        </h3>
        <p>{{ meeting.name }}</p>
        <button type="button" class="btn btn-danger btn-lg btn-color">
          Excuse yourself
        </button>
        <hr />
        <h4 style="font-size: 20px">Attendees:</h4>
        <p v-for="attendee in meeting.attendees" :key="attendee.index">
          {{ attendee.email }}
        </p>
        <select class="attedees_box_dropdown" name="date" id="date">
          <option value="Select member">Select member</option>
          <option v-for="user in users" :key="user.id">{{ user.email }}</option>
        </select>
        <button type="button" class="btn btn-primary btn-sm add_btn">
          Add
        </button>
      </div>
    </div>
    <div class="alert alert-danger" role="alert" v-if="status === 'ERROR'">
      {{ error.message }}
    </div>
  </div>
</template>

<script>
import { getmeetings } from "@/services/meetings.js";
import { getUsers } from "@/services/meetings.js";
export default {
  data() {
    return {
      meetings: [],
      users: [],
      status: "LOADING",
      error: null,
      period: "All",
      searchDescription: "vue",
    };
  },
  created() {
    getmeetings()
      .then((data) => {
        this.status = "LOADED";
        this.meetings = data;
      })
      .catch((error) => {
        this.status = "ERROR";
        this.error = error;
      });

    getUsers().then((data) => {
      this.users = data;
      console.log(this.users);
    });
  },
  methods: {
    // pathch
  },
};
</script>


<style scoped>
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
  /* color: white; */
}
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
  /* background-color: #fd6f96; */
}
.attedees_box_dropdown {
  padding: 7px 12px;
  border-radius: 5px;
}
.attedees_box:hover {
  border-color: blue;
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
