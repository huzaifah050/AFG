<template>
  <v-app app>
    <div class="container">
      <v-img max-height="56px" max-width="38px" src="../../../public/images/logo.svg" />

      <nav class="navbar">
        <NavVue
          v-for="route in routes"
          :key="route.name"
          :name="route.name"
          :icon="route.icon"
          :destination="route.to"
        />
      </nav>
    </div>
  </v-app>
</template>

<style scoped>
#app {
  background-color: white;
}
.container {
  height: 100%;
  margin-top: 20px;
  padding-left: 24px;
}

.navbar {
  width: 100%;
  margin-top: 70px;
}
.logo {
  height: 56px;
  width: 38px;
}
</style>

<script>
import NavVue from "./Nav.vue";

export default {
  name: "Sidebar",
  components: {
    NavVue,
  },
  data: () => ({
    drawer: false,
    group: null,
    routes: [
      {
        name: "Home",
        icon: "mdi-home-outline",
        to: "/",
      },
      {
        name: "Missions",
        icon: "mdi-rocket-launch-outline",
        to: "/about",
      },
      {
        name: "Appraisals",
        icon: "mdi-clipboard-check-outline",
        to: "/appraisals",
      },
      {
        name: "Contracts",
        icon: "mdi-file-swap-outline",
        to: "/contracts",
      },
      {
        name: "Training",
        icon: "mdi-school-outline",
        to: "/training",
      },
      {
        name: "Help",
        icon: "mdi-alert-circle-outline",
        to: "/help",
      },
      {
        name: "Settings",
        icon: "mdi-cog-outline",
        to: "/settings",
      },
      {
        name: "Logout",
        icon: "mdi-logout-variant",
        to: "/logout",
      },
    ],
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
