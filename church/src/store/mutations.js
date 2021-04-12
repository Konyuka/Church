const mutations = {
  updateFamily(state, user) {
    state.familyMember = user;
    // state.familyMember.mobile = user.mobile;
    // state.familyMember.email = user.email;
    // state.familyMember.IDNumber = user.IDNumber;
    // state.familyMember.gender = user.gender;
    // state.familyMember.relationship = user.relationship;
    // state.familyMember.birth = user.birth;
    // state.familyMember.baptism = user.baptism; 
    // state.familyMember.confirmation = user.confirmation;
    // state.familyMember.bio = user.bio;
    // state.familyMember.location = user.location;
  },
  updateUser(state, user) {
    state.email = user.email;
    state.IDNumber = user.IDNumber;
    state.gender = user.gender;
    state.birth = user.birth;
    state.baptism = user.baptism; 
    state.confirmation = user.confirmation;
    state.bio = user.bio;
    state.location = user.location;
  },
  setUser(state, user) {
    state.uid = user.uid;
    state.email = user.email;
  },
  registerUser(state, user){
    state.mobile = user.mobile;
    state.name = user.name;
    state.parent = user.parent;
  },
};

export default mutations