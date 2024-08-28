<template>
  <ListMonster></ListMonster>
</template>

<script>

import ListMonster from "./components/ListMonster";

export default {
  name: 'App',
  components: {
    ListMonster
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
