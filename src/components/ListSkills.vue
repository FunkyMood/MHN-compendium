<template>
  <div class="skills-list">
    <div class="card-skill" v-for="abilityName in skillsName" :key="abilityName">
      <p class="skill-name">{{ abilityName }}</p>
      <ul>
        <li v-for="(skillLevelDescription, levelKey, index) in Skills.Skills[abilityName]" :key="levelKey">
          <p> {{ index +1 }} - {{skillLevelDescription}}</p>
        </li>
        
      </ul>
    </div>
  </div>
</template>

<script>
import Skills from '@/jsons/skills_json/skills.json';

export default {
  name: 'ListSkills',

  data() {
    return {
      Skills,
      skillsName: "",
    }
  },
  mounted() {
    this.skillsName = Object.keys(Skills.Skills);
  },
  methods: {

  computed: {},
}
}
</script>
