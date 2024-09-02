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
    /* this.monsters = this.getMonsterList; */
    this.getMonsterList();
  },
  methods: {
    getMonsterList() {
      let url = 'https://script.google.com/macros/s/AKfycbxtHbh4hzr-6VAyFwxfvg37EDzzTygRQNXEhbwYMvFJ9hlJWOZG4kw_q7ju3Rq4lKbT/exec';
      axios.get(url, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => console.log(response.data))
      .catch(error => console.error('Errore:', error));
  },
  computed: {

  },
}
}
</script>
