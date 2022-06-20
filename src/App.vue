<template>
  <v-app>
    <v-navigation-drawer app>
      <Sidebar />
    </v-navigation-drawer>

    <v-app-bar app elevation="0" color="bgPrimary">
      <v-container fluid>
        <v-row class="nav-container">
          <v-col cols="7">
            <v-tabs background-color="bgPrimary">
              <v-tab exact-active-class="active" :to="{ name: 'my-updates' }" exact-path
                >my updates
                <v-chip
                  class="ma-2"
                  pill
                  x-small
                  :color="this.$router.currentRoute.path === '/' ? 'primary' : '#ccc'"
                  >20</v-chip
                >
              </v-tab>
              <v-tab exact-path exact-active-class="active" :to="{ name: 'afg-updates' }"
                >AFG Updates
                <v-chip
                  class="ma-2"
                  pill
                  x-small
                  :color="this.$router.currentRoute.path === '/afg-updates' ? 'primary' : '#ccc'"
                  >20</v-chip
                >
              </v-tab>
            </v-tabs>
          </v-col>
          <v-col cols="5">
            <div class="search-container">
              <v-text-field
                outlined
                label="Search roles, projects, tasks and feed"
                prepend-inner-icon="mdi-magnify"
                class="search-input ma-0"
              ></v-text-field>
              <!-- <v-text-field
                solo
                elevation="0"
                label="Search roles, projects, tasks and feed"
                prepend-inner-icon="mdi-magnify"
                class="search-field"
              ></v-text-field>
               -->
              <v-badge color="primary" overlap content="3">
                <v-icon class="search-icon">mdi-bell-outline</v-icon>
              </v-badge>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from "./components/Sidebar/Sidebar.vue";

export default {
  name: "App",
  components: {
    Sidebar,
    // HomeViewVue,
  },
  data: () => ({}),
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}

html {
  font-family: "Inter", sans-serif;
}
#app {
  background-color: #eeeeee;
}

:root {
  --var-light-text: #8a8686;
  --var-black-text: #0b0101;
  --var-gray-text: #8c8c8c;
  --var-primary-color: #ff0008;
  --var-gray-border: #e1e1e1;
}

.active {
  color: var(--var-primary-color);
}
.nav-container {
  /* background-color: #eeeeee; */
  /* background-color: greenyellow; */
  /* padding-top: 80px; */
}

/* .search-container {
  background-color: #19ae46;
  height: 5.5rem;
} */

div.v-input__control {
  flex-wrap: nowrap;
}
.search-container {
  display: flex;
  align-items: center;
  /* gap: 10px; */
  background-color: red;
  /* height: 48px; */
}

.search-field {
  /* border-radius: 50%; */
}
.search-input {
  background-color: greenyellow;
}

.search-icon {
  /* background-color: blue; */
}
</style>
