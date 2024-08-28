<template>
  <div class="list-wrapper">
    <ul v-for="item in 5" :key="item">
      <li class="card-mmonster">
        <p>ciao</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ListMonster',
}
</script>
