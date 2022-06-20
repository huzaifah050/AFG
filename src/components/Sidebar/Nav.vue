<template>
  <div class="navbar-container">
    <router-link :to="destination" class="link" exact-active-class="active">
      <div class="navbar-content">
        <div class="icon-container">
          <i :class="`mdi ${icon}`" class="icon" aria-hidden="true"></i>
        </div>
        <v-spacer></v-spacer>
        <div class="text-container">
          <span class="navbar-text">{{ name }}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "NavComponent",
  props: {
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.navbar-content {
  height: 40px;
  display: flex;
  align-items: center;
  color: var(--var-gray-text);
  margin-bottom: 1rem;
  cursor: pointer;
}

.navbar-content:hover {
  color: var(--var-primary-color);
}
.navbar-container:nth-last-child(3) {
  margin-bottom: 3rem;
}

.link {
  text-decoration: none;
}

.active {
  color: var(--var-primary-color);
}

.icon-container {
  width: 10%;
  display: flex;
  font-size: 24px;
}

.text-container {
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
}

.navbar-text {
  font-size: 16px;
  font-weight: normal;
  color: inherit;
}
</style>
