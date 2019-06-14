import db from '../../config/firebase'


const state = {
    user: {}
}

// getters
const getters = {
    user: state => state.user,
    loggedIn: state => 'uid' in state.user,
}

// mutations
const mutations = {
    SET_USER: (state, payload) => {
        state.user = payload
    },
    LOG_IN:() => {
        const provider = new db.auth.GoogleAuthProvider();

        db.auth().signInWithRedirect(provider);
    },
    LOG_OUT:() => {
        db.auth().signOut();
    }

};

// actions
const actions = {
    retrieveCredentials: (context) => {               
        db.auth().onAuthStateChanged(user => {            
            if (user) {
                const {
                    displayName,
                    email,
                    photoURL,
                    uid
                } = user;
                const cleanedUser = {
                    displayName,
                    email,
                    photoURL,
                    uid
                };
                context.commit('SET_USER', cleanedUser);
            } else {
                context.commit('SET_USER', {});
            }
        });
    },
    logIn: (context) => {
        context.commit('LOG_IN')
    },
    logOut: (context) => {
        context.commit('LOG_OUT')
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}