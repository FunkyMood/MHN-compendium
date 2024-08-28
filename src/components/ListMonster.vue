<template>
  <div class="list-wrapper">
    <ul v-for="item in monsters" :key="item">
      <li class="card-mmonster">
        <p>{{ item }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'ListMonster',

  data() {
    return {
      monsters: [],
    }
  },
  mounted() {
    this.monsters = this.getMonsterList;
  },
  methods: {
    getMonsterList() {
      axios.get('https://api.example.com/monsters')
        .then(response => {
          this.monsters = response.data;
        })
        .catch(error => {
          console.error('Errore durante il fetch dei mostri:', error);
        });
  },
  computed: {

  },
}
}
</script>
