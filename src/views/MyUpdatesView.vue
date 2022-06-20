<template>
  <v-app app>
    <div class="container">
      <h3>Outstanding Appraisals</h3>
      <v-row class="content">
        <!-- the scrollbar container -->
        <v-col cols="11">
          <v-row>
            <div class="scrollable-container">
              <div class="scrollable-content" v-for="user in users" :key="user.id">
                <div class="card-container">
                  <div class="card-content">
                    <div class="user-content">
                      <v-avatar>
                        <img :src="user.img" alt="John" />
                      </v-avatar>
                      <div class="name-container">
                        <p class="name">{{ user.name }}</p>
                        <p class="role">{{ user.role }}</p>
                      </div>
                    </div>
                    <div class="action-container">
                      <button class="btn-action">View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </v-row>
        </v-col>

        <!-- the navigation -->
        <v-spacer></v-spacer>
        <v-col cols="1" class="bggg d-flex align-center">
          <div class="navigation-container">
            <v-icon size="40" color="#e1e1e1"> mdi-chevron-right</v-icon>
          </div>
        </v-col>
      </v-row>
    </div>
    <MissionUpdatesVue />
  </v-app>
</template>

<script>
import MissionUpdatesVue from "@/components/Home/MissionUpdates.vue";

export default {
  name: "MyUpdatesView",
  components: {
    MissionUpdatesVue,
  },
  data() {
    const users = [
      {
        name: "John",
        role: "Mission Partner",
        img: "https://cdn.vuetifyjs.com/images/john.jpg",
        id: 1,
      },
      {
        name: "John",
        role: "Mission Partner",
        img: "https://cdn.vuetifyjs.com/images/john.jpg",
        id: 2,
      },
      {
        name: "John",
        role: "Mission Partner",
        img: "https://cdn.vuetifyjs.com/images/john.jpg",
        id: 2,
      },
    ];
    return {
      users,
    };
  },
};
</script>

<style scoped>
.container {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
}
.content {
  margin: 0;
  margin-top: 20px;
}
.scrollable-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-wrap: nowrap;
  overflow: auto;
  scroll-behavior: smooth;
  gap: 10px;
}

.scrollable-container {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollable-container::-webkit-scrollbar {
  display: none;
}

.scrollable-content {
  width: 48%;
  height: 71px;
  border-radius: 10px;
  flex-shrink: 0;
  border: 2px solid var(--var-gray-border);
}

.card-container {
  height: 100%;
}

.card-content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}

.user-content {
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
}

.action-container {
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
}

.btn-action {
  height: 2.5rem;
  padding: 0 0.5em;
  border-radius: 10px;
  border: 2px solid var(--var-gray-border);
}

.name-container p {
  margin: 0;
}

.name {
  font-weight: bold;
  font-size: 1em;
}

.role {
  font-size: 0.9em;
  color: var(--var-light-text);
}
.btn-container {
  display: flex;
  justify-content: center;
}

.navigation-container {
  display: flex;
  justify-content: center;
  border-radius: 100px;
  border: 2px solid #e1e1e1;
  padding: 1px;
  cursor: pointer;
}
</style>
