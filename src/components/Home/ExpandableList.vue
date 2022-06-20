<template>
  <div class="expansion-container">
    <div class="expansion-title">
      <div class="title-content">
        <slot name="header"></slot>
      </div>
      <i
        :class="`mdi mdi-chevron-${showMore ? `up` : `down`} icon`"
        @click="viewMore"
        @keydown="viewMore"
      ></i>
    </div>

    <div class="expansion-section" v-show="showMore">
      <slot name="expanded-content"></slot>
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
  margin-bottom: 10px;
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
