import {
  db
} from '../../config/firebase'

// initial state
// shape: [{ id, quantity }]
const state = {
  currentDate: new Date().toISOString().substr(0, 10),
  timestamps: [],
  overlay: false
}

// getters
const getters = {
  timestamps: state => {
    return state.timestamps
  },
  currentDate: state => {
    return state.currentDate
  },
  overlayStatus: state => {
    return state.overlay
  }
}

// mutations
const mutations = {
  RETRIEVE_TIMESTAMPS: (state, timestamps) => {
    state.timestamps = timestamps;
  },
  UPDATE_CURRENT_DATE: (state, payload) => {
    state.currentDate = payload;
  },
  TOGGLE_OVERLAY: (state) => {
    if (state.overlay === false) {
      state.overlay = true
    } else {
      state.overlay = false
    }
  }
}

// actions
const actions = {
  // retrieveTimestamps: (context) => {
  //   db.collection('attendance').get()
  //   .then(querySnapshot => {
  //     let tempTimestamps = []
  //     querySnapshot.forEach(doc => {
  //       const data = {
  //         id: doc.id,
  //         studentId: doc.studentId,
  //         checkIn: doc.checkIn,
  //         checkOut: doc.checkOut,
  //         eventDate: doc.eventDate
  //       }
  //       tempTimestamps.push(data)
  //     })
  //     context.commit('RETRIEVE_TIMESTAMPS', tempTimestamps)
  //   })
  // },
  async updateCurrentDate({dispatch, commit}, date) {
    await dispatch('getTimestampsByDate', date)
    commit('UPDATE_CURRENT_DATE', date)
  },
  async getTimestampsByDate({commit}, date) {
    db.collection('attendance').where('eventDate', '==', date)
      .get()
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
        commit('RETRIEVE_TIMESTAMPS', tempTimestamps)
      })
  },
  async submitDate({dispatch, commit}, date) {
    await dispatch('updateCurrentDate', date)
    commit('TOGGLE_OVERLAY')
  },
  toggleOverlay(context) {
    context.commit('TOGGLE_OVERLAY')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}