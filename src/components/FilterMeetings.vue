<template>
  <div>
    <hr class="customHr" />

    <div class="searchBox">
      <h2>Search for meetings</h2>
      <hr style="margin:10px ;" />

      <div class="date_search">
        <p>Date</p>
        <select class="date_search_dwopdown" name="date" id="date">
          <option value="All">All</option>
          <option value="Past">Past</option>
          <option value="Today" selected>Today</option>
          <option value="Upcoming">Upcoming</option>
        </select>

        <p>Search for</p>
        <textarea
          name=""
          id=""
          cols="48"
          rows="4"
          placeholder="Search using words which describe the meeting "
        ></textarea>
        <br />
        <button>Search</button>
      </div>
    </div>
    <h2 style="margin: 20px 0; font-size: 29px;">
      Meetings matching search criteria
    </h2>
    <!-- ...attedees_box....  -->
    <hr />
    <div class="attedees_box">
      <h3 style="font-size:24px ;">
        12 september 2020 <span style="font-size: 16px;">06:00 - 07:00</span>
      </h3>
      <p>Project Kickoff</p>
      <button type="button" class="btn  btn-danger btn-lg btn-color">
        Excuse yourself
      </button>
      <hr />
      <h4 style="font-size: 20px;">Attendees:</h4>
      <p>mark@exapmle.com jane@example.com</p>
      <select class="attedees_box_dropdown" name="date" id="date">
        <option value="Select member" selected>Select member</option>
        <option value="john@example.com">john@example.com</option>
        <option value="jane@example.com">jane@example.com</option>
        <option value="mark@example.com">mark@example.com</option>
      </select>
      <button type="button" class="btn btn-primary btn-sm add_btn">Add</button>
    </div>

    <div class="attedees_box">
      <h3 style="font-size:24px ;">
        12 september 2020 <span style="font-size: 16px;">08:00 - 09:30</span>
      </h3>
      <p>AWS architecture</p>
      <button type="button" class="btn  btn-danger btn-lg btn-color">
        Excuse yourself
      </button>
      <hr />
      <h4 style="font-size: 20px;">Attendees:</h4>
      <p>john@exapmle.com jane@example.com</p>
      <select class="attedees_box_dropdown" name="date" id="date">
        <option value="Select member" selected>Select member</option>
        <option value="john@example.com">john@example.com</option>
        <option value="jane@example.com">jane@example.com</option>
        <option value="mark@example.com">mark@example.com</option>
      </select>
      <button type="button" class="btn btn-primary btn-sm add_btn">Add</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
