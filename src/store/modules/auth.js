const state = {
    user: {},
    status: false
}

// getters
const getters = {
    user(state) {
        return state.user;
    },
    isSignedIn(state) {
        return state.status;
    }
}

// mutations
const mutations = {
    onAuthStateChanged(state, user) {
        state.user = user;
    },
    onUserStatusChanged(state, status) {
        state.status = status;
    }
}

// actions
const actions = {    

}

export default {
    state,
    getters,
    actions,
    mutations
}