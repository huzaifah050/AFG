import Vue from "vue";
import "@mdi/font/css/materialdesignicons.css";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi", // default - only for display purposes
  },
  theme: {
    themes: {
      light: {
        primary: "#FF0008",
        secondary: " #FFCDD2",
        accent: " #3F51B5",
        error: "#FF0008",
        grayText: "#8c8c8c",
        bgPrimary: "#eeeeee",
      },
    },
  },
});
