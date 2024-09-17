<template>
    <div class="armor-skills-list" v-for="(armorParts, armorName) in ArmorSkills.ArmorSkills" :key="armorName">
      <h3>{{ armorName }}</h3>
      <div v-for="(skills, partName) in armorParts" :key="partName">
        <h4>{{ partName }}</h4>
        <ul class="armor-skills">
          <li v-for="(skill, index) in skills" :key="index">
            <div>
              <div style="display: flex">
                <strong>Skill Name:</strong> 
                <span  data-toggle="tooltip" data-placement="top" title="Da inserire la descrizione della skill">
                    {{ skill.skill_name }}
                </span>
                <button @click="setArmorSelected(skill)" data-toggle="modal" data-backdrop="false" data-target="#modal-builder"></button>
              </div>
            </div>
            <p><strong>Skill Level:</strong> {{ skill.skill_level }}</p>
            <p><strong>Item Grade:</strong> {{ skill.item_grade }}</p>
          </li>
        </ul>
      </div>
    </div>
  </template>

  <!-- TO do in questo componente
   Far parlare i due json per avere la descrizione della skill
   Implementare una search che cerchi i nomi di mostri
  -->

<script>
import ArmorSkills from '@/jsons/armor_skills_json/armor_skills.json';

export default {
  name: 'ArmorSkills',
  data() {
    return {
      ArmorSkills,
      ArmorSkillsName: "",
      SkillDescription: "",
    }
  },
  mounted() {
    this.ArmorSkillsName = Object.keys(ArmorSkills.ArmorSkills);
  },
  methods: {
    setArmorSelected(skill) {
      this.$store.dispatch('selectSkill', {
        skill_name: skill.skill_name,
        skill_level: skill.skill_level,
        item_grade: skill.item_grade,
      });
      this.$store.dispatch('openModal')
    }
  },

  computed: {
    test() {
      return this.$store.state.selectedSkill;
    }
  },

}
</script>