<template>
    <div class="armor-skills-list" v-for="(armorParts, armorName) in ArmorSkills.ArmorSkills" :key="armorName">
      <h3>{{ armorName }}</h3>
      <div v-for="(skills, partName) in armorParts" :key="partName">
        <h4>{{ partName }}</h4>
        <ul class="armor-skills">
          <li v-for="(skill, index) in skills" :key="index">
            <div>
                <strong>Skill Name:</strong> 
                <span class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Da inserire la descrizione della skill">
                    {{ skill.skill_name }}
                </span>
            </div>
            <p><strong>Skill Level:</strong> {{ skill.skill_level }}</p>
            <p><strong>Item Grade:</strong> {{ skill.item_grade }}</p>
          </li>
        </ul>
      </div>
    </div>
  </template>

  <!-- TO do
   Implementare una search che cerchi le parole chiave e mostri solo l'equip con quelle lì Es. Gauge
  -->

<script>
import ArmorSkills from '@/jsons/armor_skills_json/armor_skills.json';

export default {
  name: 'ArmorSkills',
  data() {
    return {
      ArmorSkills,
      ArmorSkillsName: "",
    }
  },
  mounted() {
    this.ArmorSkillsName = Object.keys(ArmorSkills.ArmorSkills);
  },
  methods: {

  computed: {},
}
}
</script>