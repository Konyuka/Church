const actions = {
  updateFamily({ commit }, user) {
    commit("updateFamily", user);
  },
  updateUser({ commit }, user) {
    commit("updateUser", user);
  },
  registerUser({ commit }, user) {
    commit("registerUser", user);
  },
};

export default actions
