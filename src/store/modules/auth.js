import {
    functions
} from "../../config/firebase";


const state = {
    user: {},
    users: [],
    status: false,
    getUser: {},
    userOverlay:false
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
    },
    userOverlayStatus: state => {
        return state.userOverlay
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
        state.users = users.data.users
    },
    SUCCESS_NOTIFICATION(state) {
        // TODO: trigger notication on successful role assignment
    },
    // UI MUTATIONS
    TOGGLE_USER_OVERLAY: (state) => {
        state.userOverlay = !state.userOverlay
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
    addRoleByUid: (context, uid, role) => {
        const addAdminRole = functions.httpsCallable('addAdminRoleByUid');
        const addTeacherRole = functions.httpsCallable('addTeacherRoleByUid');
        const addParentRole = functions.httpsCallable('addParentRoleByUid');
        console.log(uid)

        // switch(role) {
        //     case "Admin": {
        //         addAdminRole({
        //             uid: uid
        //         }).then((result) => {
        //             console.log(result);   
        //             //context.commit('SUCCESS_NOTIFICATION')
        //         })
        //         break;
        //     }
        //     case "Teacher": {
        //         addTeacherRole({
        //             uid: uid
        //         }).then((result) => {
        //             console.log(result);
        //             //context.commit('SUCCESS_NOTIFICATION')
        //         })
        //         break;
        //     }
        //     case "Parent": {
        //         addParentRole({
        //             uid:uid
        //         }).then((result) => {
        //             console.log(result);
        //             //context.commit('SUCCESS_NOTIFICATION')
        //         })
        //         break;
        //     }
        //     default: {
        //         console.log("No such role found")
        //         console.log(role)
        //         //context.commit('Error_notification')
        //     }
        // }
        
    },
    addAdminByUid: (context, uid) => {
        const addAdminRole = functions.httpsCallable('addAdminRoleByUid');
        addAdminRole({
            uid: uid
        }).then((result) => {
            console.log(result)
            //context.commit('SUCCESS_NOTIFICATION')
        })
    },
    addTeacherByUid: (context, uid) => {
        const addTeacherRole = functions.httpsCallable('addTeacherRoleByUid');
        addTeacherRole({
            uid: uid
        }).then((result) => {
            console.log(result)
            //context.commit('SUCCESS_NOTIFICATION')
        })
    },
    addParentByUid: (context, uid) => {
        const addParentRole = functions.httpsCallable('addParentRoleByUid');
        addParentRole({
            uid: uid
        }).then((result) => {
            console.log(result)
            //context.commit('SUCCESS_NOTIFICATION')
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
            context.commit('SET_ALLUSERS', users)
        })
    },
    toggleUserOverlay(context) {
        context.commit('TOGGLE_USER_OVERLAY')
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}