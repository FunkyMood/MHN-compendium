<template>
    <div class="builder-section" id="modal-builder" v-if="isOpen">
      <div class="modal-dialog">
          <div class="modal-content">
            <p v-if="selectedSkill">{{ selectedSkill.skill_name}}</p>
            <p v-else>Nessuna skill selezionata</p>
          </div>
      </div>
    </div>
  </template>
  

<script>

export default {
  name: 'BuilderSection',
  data() {
    return {

    }
  },
  mounted() {
   
  },
  methods: {},

  computed: {
    selectedSkill() {
        return this.$store.getters.getSelectedSkill;
    },
    isOpen() {
        return this.$store.getters.isModalOpen;
    }
  },

}





</script>