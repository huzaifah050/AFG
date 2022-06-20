<template>
  <div class="container">
    <h3>Mission Updates</h3>

    <div class="content">
      <div class="title-container">
        <h4>Mission Sankofa_NG_004</h4>
        <span>Mission Partner</span>
        <v-spacer />
        <i class="mdi mdi-dots-horizontal"></i>
      </div>

      <div class="description">
        <p>
          {{ truncatedText }}
          <span @click="viewMore" @keydown="viewMore">{{ showMore ? "Less" : "More" }} </span>
        </p>
      </div>

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
      <div class="recent-activity">
        <div class="ready ready-activity-box">
          <v-icon size="30" color="green" class="ready-activity-icon">mdi-check-circle</v-icon>
          <h4>Recent Activity</h4>
        </div>
        <ActivityCard
          v-for="activity in data.recentActivities"
          :key="activity.id"
          :activities="activity.activities"
        />
      </div>
      <div class="footer-container">
        <div class="chips-group">
          <v-chip outlined small v-for="(keyword, index) in data.keywords" :key="index">
            {{ keyword }}
          </v-chip>
        </div>
        <button class="btn-details">View Details</button>
      </div>
    </div>
  </div>
</template>

<script>
import ActivityCard from "./ActivityCard.vue";

export default {
  name: "MissionComponent",
  components: {
    ActivityCard,
  },
  data() {
    const data = {
      keywords: ["Ghana", "Remote", "Implementation", "4 weeks", "In Progress"],
      recentActivities: [
        {
          id: 1,
          date: "3 April, 2021",
          activities: [
            {
              id: 1,
              activity: "Collaborated on draftings agreement",
              collaborators: [
                {
                  id: 1,
                  name: "John",
                  avatar: "https://cdn.vuetifyjs.com/images/john.jpg",
                },
                {
                  id: 2,
                  name: "John",
                  avatar: "https://cdn.vuetifyjs.com/images/john.jpg",
                },
              ],
            },
            {
              id: 2,
              activity: "Collaboratedd on draftings agreement",
              collaborators: [
                {
                  id: 1,
                  name: "John",
                  avatar: "https://cdn.vuetifyjs.com/images/john.jpg",
                },
                {
                  id: 2,
                  name: "John",
                  avatar: "https://cdn.vuetifyjs.com/images/john.jpg",
                },
              ],
            },
          ],
        },
        {
          id: 1,
          date: "3 April, 2021",
          activities: [
            {
              id: 1,
              activity: "Collaborated on draftings agreement",
              collaborators: [
                {
                  id: 1,
                  name: "John",
                  avatar: "https://cdn.vuetifyjs.com/images/john.jpg",
                },
                {
                  id: 2,
                  name: "John",
                  avatar: "https://cdn.vuetifyjs.com/images/john.jpg",
                },
              ],
            },
            {
              id: 2,
              activity: "Collaboratedd on draftings agreement",
              collaborators: [
                {
                  id: 1,
                  name: "John",
                  avatar: "https://cdn.vuetifyjs.com/images/john.jpg",
                },
                {
                  id: 2,
                  name: "John",
                  avatar: "https://cdn.vuetifyjs.com/images/john.jpg",
                },
              ],
            },
          ],
        },
      ],
    };

    return {
      data,
      showMore: false,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis molestiae quibusdam dolorum amet, adipisci sit magnam eius inventore culpa. Asperiores commodi deleniti sunt error. Ratione est maxime laboriosam officia voluptatem!",
    };
  },
  methods: {
    truncate(string, limit) {
      if (string.length > limit) {
        return `${string.substring(0, limit)}...`;
      }
      return string;
    },
    viewMore() {
      this.showMore = !this.showMore;
    },
  },
  computed: {
    truncatedText() {
      return this.showMore
        ? this.truncate(this.description, this.description.length)
        : this.truncate(this.description, 130);
    },
  },
};
</script>

<style scoped>
.container {
  background-color: white;
  margin-top: 50px;
}

.content {
  margin-top: 2rem;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid var(--var-gray-border);
}
.title-container {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  width: 100%;
}

.title-container span {
  font-size: 0.875rem;
  color: var(--var-light-text);
}

.title-container i {
  font-size: 24px;
  color: var(--var-light-text);
}
.description {
  display: inline;
}
.description p {
  font-size: 0.9rem;
  color: var(--var-light-text);
  margin-top: 10px;
}

.description span {
  font-size: 0.9rem;
  color: rgb(60, 60, 192);
  cursor: pointer;
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
  color: var(--var-light-text);
}

.recent-activity {
  margin-top: 30px;
}

.ready {
  width: 100%;
}

.ready-activity-box {
  border-left: 1px solid #e1e1e1;
  position: relative;
  min-height: 50px;
  padding-bottom: 40px;
}

.ready-activity-box > h4 {
  position: absolute;
  left: 20px;
  top: -10px;
  font-weight: normal;
}
.ready-activity-icon {
  position: absolute;
  left: -15px;
  top: -15px;
}
.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.chips-group {
  display: flex;
  gap: 5px;
}

.btn-details {
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid var(--var-gray-border);
}
</style>
