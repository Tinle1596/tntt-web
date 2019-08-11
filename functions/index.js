const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.addAdminRole = functions.https.onCall((data, context) => {
    // get user and add custom claim (admin)
    return admin.auth().getUserByEmail(data.email).then(user => {
        return admin.auth().setCustomUserClaims(user.uid, {
            admin: true
        });
    }).then(() => {
        return {
            message: 'Success! ${data.email} has been an admin'
        }
    }).catch(err => {
        return err;
    })
})

exports.getUserByEmail = functions.https.onCall((data, context) => {
    //get user by email
    return admin.auth().getUserByEmail(data.email).then(userRecord => {
        return userRecord
    }).catch(err => {
        return err;
    })
})

exports.listAllUsers = functions.https.onCall(context => {
    return admin.auth().listUsers(1000)
    .then(listUserResult => {
        return listUserResult
    }).catch(err => {
        return err;
    })
})
