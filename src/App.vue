<!-- eslint-disable vuejs-accessibility/form-control-has-label  -->
<!-- eslint-disable vuejs-accessibility/label-has-for  -->
<template>
  <v-app>
    <v-navigation-drawer app id="inspire" v-model="drawer">
      <Sidebar />
    </v-navigation-drawer>

    <v-app-bar app elevation="0" color="bgPrimary" height="80px">
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="7" class="navbar-row">
            <i
              class="mdi mdi-menu menu-icon"
              @click="drawer = !drawer"
              @keydown="drawer = !drawer"
            ></i>
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
          <v-col cols="5" class="search-container">
            <div class="search-content">
              <div class="search-input-container">
                <input
                  type="text"
                  placeholder="Search roles, projects, tasks and feed"
                  class="search-input"
                />
                <i class="mdi mdi-magnify input-icon"></i>
              </div>
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
  },
  data: () => ({
    drawer: null,
  }),
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
.navbar-row {
  display: flex;
  align-items: center;
  gap: 10px;
}
.menu-icon {
  font-size: 20px;
  cursor: pointer;
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

.search-content {
  height: 100%;
  display: flex;
  align-items: center;
}

.search-input-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.search-input {
  background-color: white;
  border-radius: 10px;
  width: 95%;
  height: 100%;
  padding-left: 50px;
}

.input-icon {
  color: var(--var-gray-border);
  font-size: 30px;
  position: absolute;
  left: 5px;
  top: 5px;
}

@media screen and (max-width: 600px) {
  .search-container {
    visibility: hidden;
    display: none;
  }
}
@media screen and (min-width: 600px) {
  .menu-icon {
    display: none;
    visibility: hidden;
  }
}
</style>
