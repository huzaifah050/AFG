<template>
  <v-container fluid>
    <v-row>
      <v-col cols="7">
        <router-view></router-view>
      </v-col>
      <v-col cols="5" class="detailContainer">
        <div class="user-card">
          <div class="details">
            <v-avatar size="54px">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
            <div class="name-container">
              <p class="name">John Smith</p>
              <p class="role">Mission Partner</p>
            </div>
          </div>
          <div class="action">
            <button>
              <span>Available (Full-time)</span>
              <v-icon color="#0B0101">mdi-chevron-down</v-icon>
            </button>
          </div>
        </div>
        <h4 class="sub-header">To unlock your next payment</h4>
        <div class="payment-card">
          <div class="">
            <p class="due-date">Due date</p>
            <p class="date">28th April 2022</p>
          </div>
          <v-divider color="white" vertical inset></v-divider>
          <div>
            <p class="due-date">Due date</p>
            <p class="date">28th April 2022</p>
          </div>
          <v-divider color="white" vertical inset></v-divider>
          <div class="">
            <p class="due-date">Due date</p>
            <p class="date">28th April 2022</p>
          </div>
        </div>
        <div class="pending-title">
          <h4 class="sub-header">Pending tasks</h4>
          <p>View all</p>
        </div>

        <div class="pending-container">
          <div class="first-row">
            <div class="">
              <p>30 pending tasks</p>
            </div>
            <div class="">
              <label for="tasks" class="select-label">
                Tasks
                <select v-model="selected" class="select-input" ref="selectRef">
                  <option value="All">All</option>
                  <option value="Some">Some</option>
                  <option value="Rest">Rest</option>
                </select>
                <i class="mdi mdi-chevron-down"></i>
              </label>
            </div>
            <div class="">
              <span>Filter By:</span>
              <v-icon color="#CCCCCC">mdi-calendar-month</v-icon>
              <span>Date</span>
            </div>
          </div>
          <div class="second-row">
            <div class="" v-for="task in tasks" :key="task.id">
              <span>{{ task.category }}</span>
              <span class="chip">{{ task.total }}</span>
            </div>
          </div>
        </div>

        <div class="expansive-tasks">
          <!-- <div class="expansion-container">
            <div class="expansion-title">
              <div class="title-content">
                <p class="">Accept Partner Nomination</p>
                <span class="expansion-sub-tilte">UHNCR</span>
              </div>
              <i class="mdi mdi-chevron-down icon"></i>
            </div>

            <div class="expansion-section">
              <div class="expansion-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit earum
                  praesentium voluptatem ut culpa! Dolores libero quasi eius tenetur itaque
                </p>
                <div class="dates">
                  <div class="date">
                    <p>
                      <v-icon size="16" color="#e1e1e1">mdi-calendar-range</v-icon> Created:
                      <span class="">3 April, 2021</span>
                    </p>
                  </div>
                  <div class="date">
                    <p>
                      <v-icon size="16" color="#e1e1e1">mdi-calendar-check</v-icon> Created:
                      <span class="">3 April, 2021</span>
                    </p>
                  </div>
                </div>

                <button>View Nomination</button>
              </div>
            </div>
          </div> -->
          <ExpandableList />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ExpandableList from "@/components/Home/ExpandableList.vue";

export default {
  name: "HomeComponent",

  components: {
    ExpandableList,
  },
  data: () => ({
    items: ["foo", "bar", "fizz", "buzz"],
    value: ["foo", "bar", "fizz", "buzz"],
    tasks: [
      {
        id: 1,
        category: "All",
        total: 100,
      },
      {
        id: 2,
        category: "Missions",
        total: 25,
      },
      {
        id: 3,
        category: "Surveys",
        total: 25,
      },
      {
        id: 4,
        category: "Contracts",
        total: 25,
      },
    ],
    selected: "All",
  }),

  methods: {},
};
</script>

<style scoped>
.user-card {
  background-color: white;
  height: 5.5rem;
  display: flex;
  align-self: center;
  justify-content: center;
  gap: 10px;
  border-radius: 10px;
}
.user-card .details {
  width: 50%;
  height: 100%;
  display: flex;
  height: 54px;
  align-self: center;
  gap: 10px;
}

.name-container p {
  margin: 0;
  padding: 0;
}

.name-container .name {
  font-size: 1rem;
  font-weight: bold;
}

.name-container .role {
  font-size: 0.9rem;
  color: var(--var-light-text);
}
.user-card .action {
  height: 100%;
}

.user-card .action {
  height: 100%;
  display: flex;
  align-items: center;
}

.user-card .action button {
  background-color: #e9ffe5;
  height: 37px;
  padding: 0px 10px;
  border-radius: 10px;
}

.user-card .action button span {
  font-size: 0.875rem;
  color: #179717;
}

.sub-header {
  margin: 25px 0;
  font-size: 1.12rem;
}

.payment-card {
  background-color: var(--var-primary-color);
  color: white;
  padding: 20px 5px;
  display: flex;
  border-radius: 10px;
}

.payment-card > div {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.payment-card > div:first-child {
  padding-right: 5px;
}

.payment-card .due-date {
  font-size: 0.875rem;
}

.payment-card .date {
  font-size: 1rem;
  font-weight: bold;
}

.pending-container {
  background-color: white;
  padding: 30px 15px;
  border-radius: 10px;
}

.pending-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pending-title p {
  margin: 0;
  padding: 0;
  color: var(--var-light-text);
  font-size: 14px;
  cursor: pointer;
}
.first-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.first-row > div:nth-child(1) {
  width: 30%;
}

.first-row > div:nth-child(1) p {
  margin: auto 0;
  font-weight: bold;
}
.first-row > div:nth-child(2) {
  width: 30%;
  font-size: 16px;
}

.first-row > div:nth-child(2) label {
  font-size: 0.875rem;
}
.first-row > div:nth-child(3) {
  width: 30%;
  color: var(--var-light-text);
}

.first-row > div:nth-child(3) span {
  font-size: 0.875rem;
}

.select-label {
  border: 1px solid var(--var-gray-border);
  padding: 10px 7px;
  border-radius: 10px;
}

.first-row label {
  color: var(--var-light-text);
}
.select-input {
  background-color: transparent;
  border: none;
  outline: none;
  font-weight: bold;
}

.second-row {
  display: flex;
  padding-top: 10px;
}

.second-row > div {
  width: 100%;
  display: flex;
  padding-top: 10px;
  align-items: center;
}

.second-row > div:nth-child(1) {
  color: red;
}

.chip {
  background-color: var(--var-gray-border);
  padding: 1px 5px;
  border-radius: 10px;
  margin-right: 5px;
  font-size: 12px;
  font-weight: 500;
  margin-left: 2px;
}

.second-row > div:nth-child(1) .chip {
  background-color: var(--var-primary-color);
  color: white;
}
.expansive-tasks {
  margin-top: 30px;
}

.expansion-container {
  background-color: white;
  border-radius: 10px;
}

.expansion-title {
  /* background-color: red; */
  display: flex;
  align-items: center;
  height: 77px;
  justify-content: space-between;
  padding: 0 20px;
}

.expansion-title p {
  padding: 0px;
  margin: 0px;
}

.title-content {
  display: flex;
  align-items: center;
  gap: 13px;
}

.title-content p {
  font-weight: bold;
  font-size: 1.2em;
}

.title-content span {
  font-size: 1em;
  color: var(--var-gray-text);
}

.expansion-title i {
  font-size: 2rem;
  font-weight: normal;
}

.expansion-section {
  border-top: 1px solid var(--var-gray-border);
}

.expansion-content {
  padding: 10px 20px;
}

.expansion-content p {
  font-size: 0.9rem;
  color: var(--var-light-text);
}

.dates {
  display: flex;
  gap: 10px;
}
.date p {
  font-weight: 500;
  line-height: 12px;
  font-size: 0.9rem;
}

.date span {
  font-weight: normal;
  color: black;
}

.expansion-content button {
  background-color: var(--var-primary-color);
  width: 100%;
  color: white;
  height: 40px;
  border-radius: 10px;
}
</style>
