import sliderData from '../../api/slider';

// initial state
const state = {
  all: []
};

// getters
const getters = {
  allSliders: state => state.all
};

// actions
const actions = {
  getAllSliders ({ commit }) {
    sliderData.getSliders(sliders => {
      commit('setSliders', sliders);
    });
  },
  changeSliderItem ({ commit }, {id, type}) {
    commit('changeSlidersActiive', id, type);
  }
};

// mutations
const mutations = {
  setSliders (state, sliders) {
    state.all = sliders;
  },

  changeSlidersActiive (state, id, type) {
    const slider = state.all.find(slider => slider.id === id);
    slider.isActive = type !== 'change';
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
