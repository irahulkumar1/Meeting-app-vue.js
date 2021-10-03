<template>
  <div class="Cal-container">
    <header>
      <h1>Calendar</h1>
    </header>
    <hr />
    <!-- ...........-->

    <div class="cal_heading">
      <h3> {{ moment(new Date(this.selectedDate)).format('DD MMMM YYYY')}}</h3>
      <div class="calender_selector">
        <input type="date" id="meeting" value="" name="meeting" v-model="selectedDate" v-on:input="desiredDate(selectedDate)" />
      </div>
    </div>
    <h3>{{day}}</h3>
    <!-- Meeting content  -->
    <div class="calendar">
      <!-- Markup for 24 hours in the calendar and meetings (start with one meeting, say 7:30 - 8:30) -->
      <div class="calendar-hours">
        <div class="calendar-hour" v-for="calendar in 24" :key="calendar">
          <p>{{ calendar }}</p>
        </div>
      </div>
      <!-- calender Meetings details -->
      <div class="calendar-meetings">
        <div
          class="calendar-meeting"
          data-start-time="7:30"
          data-end-time="8:30"
          v-for="meeting in meetings"
          :key="meeting.id">

          <p>{{ meeting.name }}</p>
          <hr class="bar" />
          <p> Attendees :<span v-for="attendee in meeting.attendees" :key="attendee.id"
              >{{ attendee.email }}
            </span>
          </p>
        </div>
      </div>
      <div class="calendar-meetings-2">
        <div
          class="calendar-meeting-2"
          data-start-time="7:30"
          data-end-time="8:30"
        >
          <p>AWS architecture</p>
          <hr class="bar" />
          <p>Attendees : john@example.comjane@example.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCalendar } from "@/services/calendar";
  import moment from 'moment';
// import moment from "moment";

export default {
  name: "Calendar",
  data() {
    return {
      selectedDate:moment(new Date()).format('YYYY-MM-DD'),
      status: "LOADING",
      meetings: [],
      error: null,
      day:moment().format('dddd')
    };
  },
  // createdDate() {
  //   setInterval(this.getNow, 1000);
  // },

  created(){
    getCalendar(this.selectedDate)
    .then(data=>{
      this.meetings = data;
    })
  },


  //implimenting life cycle method
  // async created() {
  //   try {
  //     const data = await getCalendar();
  //     console.log(data);
  //     this.status = "LOADED";
  //     this.meetings = data;
  //     console.log("calendar page", this.meetings);
  //   } catch (error) {
  //     this.status = "ERROR";
  //     this.error = error;
  //   }
  // },
  
  methods:{
    desiredDate (date){
      this.day=moment(date).format('dddd')
      console.log(date)
      getCalendar(date)
      .then(data=>{
      this.meetings = data;
      console.log(this.meetings)
    })
   
    }
  }
};
</script>

<style scoped>
h3 {
  margin: 20px 0;
}

.Cal-container {
  margin: 0px 25px;
}
.cal_heading {
  margin: 1rem 0 0 0;
  display: flex;
  justify-content: space-between;
}
.cal_heading h3 {
  font-size: 27px;
}

.calender_selector input {
  float: right;
  width: 69%;
  overflow: hidden;
  text-overflow: ellipsis;
}
.calendar-hour {
  height: 40px;
  margin: 2px 0;
  background-color: #95dac1;
}

.calendar {
  position: relative;
}
.calendar-meetings,
.calendar-meetings-2 {
  position: absolute;
  width: 96%;
  background-color: #ffeba1;
  height: 40px;
  left: 2%;
  font-size: 14px;
}

.calendar-meetings {
  top: 210px;
}
.calendar-meetings-2 {
  top: 336px;
  height: 56px;
}

.calendar-meeting,
.calendar-meeting-2 p {
  padding-left: 12px;
}

.bar {
  margin: 3px 0 5px 2px;
}
.calendar-hours p {
  position: absolute;
  margin-left: -21px;
  font-size: 15px;
}

/* Media quaries  */

@media (min-width: 600px) {
  .calender_selector input {
    width: 100%;
  }
  .calendar-meeting {
    width: 96%;
  }
}
</style>
