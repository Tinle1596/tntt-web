import {
    functions
} from "../../config/firebase";


const state = {
    user: {},
    users: [],
    status: false,
    getUser: {}
}

// getters
const getters = {
    user(state) {
        return state.user;
    },
    users(state) {
        return state.users;
    },
    getUser(state) {
        return state.getUser;
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
    },
    SET_GETUSER_BY_EMAIL(state, getUser) {
        state.getUser = getUser;
    },
    SET_ALLUSERS(state, users) {
        state.users = users;
    }
}

// actions
const actions = {
    onAuthStateChanged: (context, user) => {
        context.commit('ON_AUTH_STATE_CHANGED', user)
    },
    onUserStatusChanged: (context, status) => {
        context.commit('ON_USER_STATUS_CHANGED', status)
    },
    addAdminByEmail: (context, email) => {
        const addAdminRole = functions.httpsCallable('addAdminRole');
        addAdminRole({
            email: email
        }).then(result => {
            // call notification
            console.log(result)
        })
    },
    getUserByEmail: (context, email) => {
        const getUserByEmail = functions.httpsCallable('getUserByEmail');
        getUserByEmail({
            email: email
        }).then(result => {
            console.log(result)
            context.commit('SET_GETUSER_BY_EMAIL', result)
        })
    },
    listAllUsers: (context) => {
        const listAllUsers = functions.httpsCallable('listAllUsers');
        listAllUsers({

        }).then(users => {
            console.log(users)
            context.commit('SET_ALLUSERS', users)
        })
    }


}

export default {
    state,
    getters,
    actions,
    mutations
}