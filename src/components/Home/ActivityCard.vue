<template>
  <div class="activity-item activity-box">
    <div class="activity-icon"></div>
    <div class="activity-content-container">
      <!-- <p class="date">17 April, 2022</p> -->
      <div class="activity-content" v-for="activity in activities" :key="activity.id">
        <p>{{ activity.activity }}</p>
        <div class="avatars">
          <v-avatar size="30" v-for="collaborator in activity.collaborators" :key="collaborator.id">
            <img :src="collaborator.avatar" alt="John" />
          </v-avatar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActivityComponent",
  props: {
    activities: {
      type: Array,
    },
  },
  components: {},
};
</script>

<style scoped>
.activity-item {
  width: 100%;
}

.date {
  margin-bottom: 2px;
  text-align: right;
  font-size: 0.8em;
}

.activity-item {
  width: 100%;
}
.activity-box {
  border-left: 1px solid #e1e1e1;
  position: relative;
  min-height: 50px;
  padding-bottom: 40px;
}
.activity-box:last-child {
  border-left: none;
  padding-bottom: 10px;
}
.activity-icon {
  width: 10px;
  height: 10px;
  background-color: #e1e1e1;
  border-radius: 50%;
  position: absolute;
  left: -5px;
  top: -5px;
  /* top: calc(100% - 70%); */
}

.activity-content-container {
  margin-left: 3%;
  width: 97%;
  height: 100%;
}

.activity-content {
  padding: 5px 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  border: 1px solid #e1e1e1;
}

.activity-content p {
  margin: 0;
}

.avatars {
  display: flex;
  flex-wrap: nowrap;
  flex-shrink: 2;
}
</style>
