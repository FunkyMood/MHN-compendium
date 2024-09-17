// store.js
import { createStore } from 'vuex';

const store = createStore({
  state: {
    selectedSkill: null,
    isModalOpen: false,
  },
  mutations: {
    setSelectedSkill(state, skill) {
      state.selectedSkill = skill;
    },
    openModal(state) {
      state.isModalOpen = true;
    },
    closeModal(state) {
      state.isModalOpen = false;
    },
  },
  actions: {
    selectSkill({ commit }, skill) {
      commit('setSelectedSkill', skill);
    },
    openModal({ commit }) {
      commit('openModal');
    },
    closeModal({ commit }) {
      commit('closeModal');
    },
  },
  getters: {
    getSelectedSkill(state) {
      return state.selectedSkill;
    },
    isModalOpen(state) {
      return state.isModalOpen;
    },
  },
});


export default store;
