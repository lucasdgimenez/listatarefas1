<template>
  <div id="app" class="container">
    <list-create />
    <list-read />
  </div>
</template>

<script>
//import { todosCollection } from "./firebase";

export default {
  name: "app"
};
</script>

<style>
@import "assets/css/style.css";
ul {
  list-style: none;
  padding: 0;
}
#app {
  color: #2c3e50;
  margin-top: 60px;
}
</style>
