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
    ON_AUTH_STATE_CHANGED(state, user) {
        state.user = user;
    },
    ON_USER_STATUS_CHANGED(state, status) {
        state.status = status;
    }
}

// actions
const actions = {    
    onAuthStateChanged: (context, user) => {
        context.commit('ON_AUTH_STATE_CHANGED', user)
    },
    onUserStatusChanged: (context, status) => {
        context.commit('ON_USER_STATUS_CHANGED', status)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}