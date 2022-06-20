<template>
  <div class="expansion-container">
    <div class="expansion-title">
      <div class="title-content">
        <p class="">Accept Partner Nomination</p>
        <span class="expansion-sub-tilte">UHNCR</span>
      </div>
      <i
        :class="`mdi mdi-chevron-${showMore ? `up` : `down`} icon`"
        @click="viewMore"
        @keydown="viewMore"
      ></i>
    </div>

    <div class="expansion-section" v-show="showMore">
      <div class="expansion-content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit earum praesentium
          voluptatem ut culpa! Dolores libero quasi eius tenetur itaque
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
  </div>
</template>

<script>
export default {
  name: "ExpandableList",

  data() {
    return {
      showMore: false,
    };
  },
  methods: {
    viewMore() {
      this.showMore = !this.showMore;
    },
  },
};
</script>

<style scoped>
.expansion-container {
  background-color: white;
  border-radius: 10px;
}

.expansion-title {
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
  padding-bottom: 20px;
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
