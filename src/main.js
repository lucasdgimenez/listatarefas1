//import * as firebase from "firebase";
import Vue from "vue";
import App from "./App.vue";
import { firestorePlugin } from "vuefire";
import listRead from "@/components/listRead";
import listCreate from "@/components/listCreate";

//Vue.config.productionTip = false;
Vue.use(firestorePlugin);
Vue.component("list-create", listCreate);
Vue.component("list-read", listRead);

new Vue({
  el: "#app",
  render: (h) => h(App),
  /*created() {
    firebase.initializeApp({
      apiKey: "AIzaSyCJbjSlxFutfjTFLxiKkWq8dNX7PEfqjUI",
      authDomain: "listatarefasone.firebaseapp.com",
      databaseURL: "https://listatarefasone.firebaseio.com",
      projectId: "listatarefasone",
      storageBucket: "listatarefasone.appspot.com",
      messagingSenderId: "1098084185951",
      appId: "1:1098084185951:web:0d1cdc9fc865f8756e68ea",
      measurementId: "G-SGPVP1GXP4",
    });
  },*/
});
//.$mount("#app");
