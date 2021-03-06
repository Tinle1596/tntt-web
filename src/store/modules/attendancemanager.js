import { db } from '../../config/firebase'

const state = {
    sort_by: 'id',
    sort_ascending: true,
    students: [],
    selectedAttendance: null,
    searchWord: null,    
}

const getters = {
    isActiveStudents: (state, getters) => {
        return keyword => getters.filteredSearchStudents.filter(student => {
            return student.isActive === keyword
        });
    },
    filteredSearchStudents: state => {
        var searchWord = state.searchWord;
        var filteredSearchStudents = state.students;

        if (searchWord) {
            return filteredSearchStudents.filter((student) => {
                return student.firstName.toLowerCase().includes(searchWord);
            })
        } else {
            return filteredSearchStudents;
        }
    },
    getSearchWord: state => state.searchWord    
}

const mutations = {
    FILTER_ATTENDANCE_LIST: (state, payload) => {
        state.selectedAttendance = payload;
    },
    UPDATE_SEARCH_WORD: (state, word) => {
        state.searchWord = word.toLowerCase();
    },
    RETRIEVE_STUDENTS: (state, students) => {
        state.students = students;
    },
    TOGGLE_ATTENDANCE: (state, student) => {
        const index = state.students.findIndex(item => item.id == student.id)
        state.students[index].isActive = student.isActive
    },
}

const actions = {
    initRealtimeListeners(context) {
        db.collection("students").onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if (change.type === "added") {
                    const source = change.doc.metadata.hasPendingWrites ? 'Local' : 'Server';
                }
                if (change.type === "modified") {
                    context.commit('TOGGLE_ATTENDANCE', {
                        id: change.doc.id,
                        isActive: change.doc.data().isActive,
                        timeStamp: change.doc.data().timeStamp
                    })
                }                
            });
        });
    },
    filterStudentAttendance: (context, payload) => {
        setTimeout(function () {
            context.commit('FILTER_ATTENDANCE_LIST', payload);
        })
    },
    updateSearchWord: (context, payload) => {
        context.commit('UPDATE_SEARCH_WORD', payload);
    },
    retrieveStudents: (context) => {
        db.collection('students').get()
            .then(querySnapshot => {
                let tempStudents = []
                querySnapshot.forEach(doc => {
                    const data = {
                        id: doc.id,
                        age: doc.data().age,
                        firstName: doc.data().firstName,
                        group: doc.data().group,
                        lastName: doc.data().lastName,
                        phoneNumber: doc.data().phoneNumber,
                        sex: doc.data().sex,
                        isActive: doc.data().isActive,
                        timeStamp: doc.data().timeStamp
                    }
                    tempStudents.push(data)
                })
                context.commit('RETRIEVE_STUDENTS', tempStudents)
            })
    },
    toggleAttendance: (context, student) => {
        if (student.isActive === false) {
            student.isActive = true;
        } else {
            student.isActive = false;
        }
        if (student.isActive === true) {
            db.collection('attendance').add({
                    studentId: student.id,
                    studentFullName: student.firstName + ' ' + student.lastName,
                    group: student.group,
                    checkIn: new Date().toLocaleTimeString(),
                    checkOut: null,
                    eventDate: new Date().toISOString().substr(0, 10)
                })                
                .catch((error) => {
                    console.log('Error adding document ', error)
                })
        } else if (student.isActive === false) {        
            db.collection('attendance')
                .where('studentId', '==', student.id)
                .where('checkOut', '==', null)
                .get()
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        if(doc.exists){
                            db.collection('attendance').doc(doc.id).update({
                                checkOut: new Date().toLocaleTimeString()
                            })                                                    
                        } else {
                            console.log('unable to update document')
                        }
                    })                    
                })
                .catch(error => {
                    console.log('unable to find document', error)
                })
        }
        db.collection('students').doc(student.id).update({
                isActive: student.isActive
            })
            .then(() => {
                context.commit('TOGGLE_ATTENDANCE', student)
            })
    },
}


export default {
    state,
    getters,
    actions,
    mutations
}