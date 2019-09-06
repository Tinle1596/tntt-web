import {
  db
} from '../../config/firebase'

// initial state
// shape: [{ id, quantity }]
const state = {
  currentDate: new Date().toISOString().substr(0, 10),
  timestamps: [],
  historyOverlay: false
}

// getters
const getters = {
  timestamps: state => {    
    return state.timestamps
  },
  currentDate: state => {
    return state.currentDate
  },
  historyOverlayStatus: state => {
    return state.historyOverlay
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
  TOGGLE_HISTORY_OVERLAY: (state) => {
    state.historyOverlay = !state.historyOverlay  
  }
}

// actions
const actions = {
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
            studentId: doc.data().studentId,
            studentFullName: doc.data().studentFullName,
            group: doc.data().group,
            checkIn: doc.data().checkIn,
            checkOut: doc.data().checkOut,
            eventDate: doc.data().eventDate
          }
          tempTimestamps.push(data)
        })
        commit('RETRIEVE_TIMESTAMPS', tempTimestamps)
      })
  },
  async submitDate({dispatch, commit}, date) {
    await dispatch('updateCurrentDate', date)
    commit('TOGGLE_HISTORY_OVERLAY')
  },
  toggleHistoryOverlay(context) {
    context.commit('TOGGLE_HISTORY_OVERLAY')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}