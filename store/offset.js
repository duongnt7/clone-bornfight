import { convertColor } from "~/helper/helper.js";

const state = () => ({
  pageYOffset: 0,
  offsetHeight: 0,
  offsetScroll: "",
  background: "#363636"
});

const mutations = {
  setPageYOffset(state, offsetY) {
    state.pageYOffset = offsetY;
    state.offsetScroll =
      state.offsetHeight > offsetY ? "" : `${offsetY - state.offsetHeight}px`;
    // state.background = convertColor(state.background, offsetY);
  },
  setOffsetHeight(state, offsetHeight) {
    state.offsetHeight = offsetHeight;
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
