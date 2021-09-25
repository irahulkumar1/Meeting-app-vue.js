<template>
  <div>
    <main class="container">
      <hr class="customHr" />

      <div class="add_meeting">
        <h2 style="color: white;font-size: 35px;">Add a new meeting</h2>
        <hr />
        <p>
          Date
        </p>
        <input type="date" id="date" name="date" />
        <p>Start time (hh:mm)</p>
        <select name="hour" id="">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option> </option
        ></select>

        :
        <select name="min" id="">
          <option value="0">0</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
          <option value="60">60</option>

          <option> </option
        ></select>

        <p>End time (hh:mm)</p>
        <select name="hour" id="">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option> </option
        ></select>

        :
        <select name="min" id="">
          <option value="0">0</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
          <option value="60">60</option>

          <option> </option
        ></select>

        <p>Description</p>
        <textarea name="" id="" cols="40" rows="4"></textarea>

        <p>Emial IDs of attendees, or team's short</p>
        <input
          type="text"
          placeholder="joh@example.com, @annual-day, mark@example.com"
        />
        <p style="color: white;">
          Separate emailsIDs / teams short names by commas - team short names
          always begin with @
        </p>

        <button>Add meeting</button>
      </div>
    </main>
  </div>
</template>

<script>
export default {};
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
