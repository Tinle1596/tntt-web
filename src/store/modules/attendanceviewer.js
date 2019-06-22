import { db } from '../../config/firebase'

// initial state
// shape: [{ id, quantity }]
const state = {
  timestamps: [],
}

// getters
const getters = {
  timestamps: state => {
    return state.timestamps
  }
}

// mutations
const mutations = {
  RETRIEVE_TIMESTAMPS: (state, timestamps) => {
    state.timestamps = timestamps;
  }
}

// actions
const actions = {
  retrieveTimestamps: (context) => {
    db.collection('attendance').get()
    .then(querySnapshot => {
      let tempTimestamps = []
      querySnapshot.forEach(doc => {
        const data = {
          id: doc.id,
          studentId: doc.studentId,
          checkIn: doc.checkIn,
          checkOut: doc.checkOut,
          eventDate: doc.eventDate
        }
        tempTimestamps.push(data)
      })
      context.commit('RETRIEVE_TIMESTAMPS', tempTimestamps)
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}