<template>
  <div>
    <main class="container">
      <hr class="customHr" />

      <div class="add_meeting">
        <h2 style="color: white; font-size: 35px">Add a new meeting</h2>
        <hr />

        <p>Meeting Name</p>
        <input
          type="text"
          placeholder="Enter Meeting Name"
          v-model="form.name"
        />
        <p>Date</p>
        <input type="date" id="date" name="date" v-model="form.date" />

        <p>Start time (hh:mm)</p>
        <select name="hour" id="" v-model="form.startTime.hours">
          <option v-for="hour in 24" :key="hour">{{ hour }}</option>
        </select>
        :
        <select name="min" id="" v-model="form.startTime.minutes">
          <option v-for="minute in 60" :key="minute">{{ minute }}</option>
        </select>

        <p>End time (hh:mm)</p>
        <select name="hour" id="" v-model="form.endTime.hours">
          <option v-for="hour in 24" :key="hour">{{ hour }}</option>
        </select>
        :
        <select name="min" id="" v-model="form.endTime.minutes">
          <option v-for="minute in 60" :key="minute">{{ minute }}</option>

          <option></option>
        </select>

        <p>Description</p>
        <textarea name="" id="" cols="40" rows="4" v-model="form.description" />

        <p>Emial IDs of attendees, or team's short</p>
        <select
          name="emails"
          id="emails"
          class="emails"
          v-model="emailId"
          @change="emailList(emailId)"
        >
          <!-- <option value="---Select Attendees---" selected>---Select Attendees---</option> -->
          <option v-for="user in registerdUsers" :key="user.id">
            {{ user.email }}
          </option>
        </select>

        <!-- <select name="emails" id="emails" class="emails" placeholder="john@example.com, @annual-day, mark@example.com" 
        v-for="(attendee,index) in attendees" :key="index" v-model="form.attendees[index].email">
            <option v-for="user in registerdUsers" :key="user.id">{{user.email}}</option>
        </select> -->
        <!-- <div class="emails-overlay">
          <span
            class="overlay"
            v-for="(attendee, index) in form.attendees"
            :key="index"
            >{{ form.attendees[index] }} &#32;</span
          >
        </div> -->
        <!-- ///////// -->
        <p style="color: white">
          Separate emailsIDs / teams short names by commas - team short names
          always begin with @
        </p>

        <button @click="submit">Add meeting</button>
      </div>
    </main>
  </div>
</template>

<script>
import { addMeetings, getUsers } from "@/services/meetings.js";
// import moment from "moment";
export default {
  data() {
    return {
      form: {
        name: "",
        description: "",
        date: "",
        startTime: { hours: 12, minutes: 20 },
        endTime: { hours: 13, minutes: 30 },
        attendees: [],
      },
      registerdUsers: [],
      emailId: "Attendees",
    };
  },

  methods: {
    submit() {
      console.log(this.form);
      addMeetings(this.form).then((data) => {
        this.$toaster.success("Meeting added");
        console.log("axios call ke baad", data);
        this.form.attendees = [];
      });
    },
  },
  emailList(emailId) {
    this.emailId = emailId;
    this.form.attendees.push(this.emailId);
    console.log(this.emailId);
  },
  created() {
    getUsers().then((data) => {
      this.registerdUsers = data;
      // console.log(this.users);
    });
  },
};
</script>
<style scoped>
.mtng_btn {
  background-color: rgb(255, 255, 255);
}
.add_mtng {
  padding: 15px 10px;
  border: 1px solid rgb(194, 194, 194);
  border-radius: 5px;
}
.filter {
  color: rgb(167, 167, 209);
  margin-right: -5px;
  padding: 13px 5px;
  border: none;
  background-color: rgb(255, 255, 255);
}
.filter a {
  color: rgb(76, 76, 158);
}
.filter:hover {
  border: 1px solid rgb(177, 177, 177);
}

.add_mtng {
  border-bottom: rgb(95, 68, 68);
}
.customHr {
  margin-top: -2px;
}

/*......... add meeting ....... */

.add_meeting {
  width: 90%;
  height: auto;
  background-color: rgb(141, 192, 221);
  padding: 15px 20px;
  border-radius: 5px;
  /* box-sizing: border-box; */
}
.add_meeting p {
  margin: 12px 0px;
}
input,
textarea {
  width: 95%;
  border-radius: 5px;
  padding: 10px;
}
select {
  padding: 5px;
  border-radius: 5px;
}
.emails {
  width: 95%;
  border-radius: 5px;
  padding: 10px;
}
.emails-overlay {
  margin: 20px 0 0 0;
}
.overlay {
  margin: 20px 10px 0 0;
  padding: 5px;
  color: black;
  border-radius: 10px;
  background: white;
}
.add_meeting button {
  margin: 18px 0;
  padding: 8px 10px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: rgb(39, 123, 156);
}

@media (min-width: 600px) {
  .add_meeting {
    width: 96%;
  }
  input {
    width: 99%;
  }
  input,
  textarea {
    width: 99%;
    border-radius: 5px;
    padding: 10px;
  }
}
</style>
