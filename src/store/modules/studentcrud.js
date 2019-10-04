import { db } from "../../config/firebase";

const state = {
  manageStudents: []
};

const getters = {
  getStudents: (state, getters) => {
    return state.manageStudents;
  }
};

const mutations = {
  GET_STUDENTS: (state, payload) => {
    state.manageStudents = payload;
  }
};

const actions = {
  getStudents: context => {
    db.collection("students")
      .get()
      .then(querySnapshot => {
        let tempStudents = [];
        querySnapshot.forEach(doc => {
          const data = {
            id: doc.id,
            firstName: doc.data().firstName,
            phoneNumber: doc.data().phoneNumber,
            group: doc.data().group,
            lastName: doc.data().lastName,
            sex: doc.data().sex,
            isActive: doc.data().isActive,
            timeStamp: doc.data().timeStamp
          };
          tempStudents.push(data);
        });
        context.commit("GET_STUDENTS", tempStudents);
      });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
