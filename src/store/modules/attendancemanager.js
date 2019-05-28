// initial state
import db from '../../config/firebase'

const state = {
    sort_by: 'id',
    sort_ascending: true,
    students:[],  
    selectedAttendance: null,
    searchWord: null
}

const getters = {
    filteredStudents: state => {
        var attendance = state.selectedAttendance;

        if(attendance === null){
            return state.students;
        } else {
            return state.students.filter(function(student) {
                return student.isActive === state.selectedAttendance;
            })
        }
    },
    filteredSearchStudents: (state, getters) => {
        var searchWord = state.searchWord;
        var filteredStudents = getters.filteredStudents;

        if(searchWord){
            return filteredStudents.filter((student) =>{
                return student.firstName.toLowerCase().includes(searchWord);
            })
        } else {
            return filteredStudents;
        }        
    },
    getSearchWord: (state) => state.searchWord
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
                        console.log("Added", change.doc.data());
                        const source = change.doc.metadata.hasPendingWrites ? 'Local' : 'Server';
                    }
                    if (change.type === "modified") {
                        console.log("Modified", change.doc.data()); 
                        context.commit('TOGGLE_ATTENDANCE', {
                            id: change.doc.id,
                            isActive: change.doc.data().isActive,
                            timeStamp: change.doc.data().timeStamp
                        })
                    }
                    if (change.type === "removed") {
                        console.log("Removed", change.doc.data());
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
        var tempStudent = student
        if (student.isActive === false) {
            student.isActive = true;
        }
        else {
            tempStudent.isActive = false;
        }
        db.collection('students').doc(student.id).update({
            isActive: tempStudent.isActive
        })
            .then(() => {
                context.commit('TOGGLE_ATTENDANCE', tempStudent)
            })        
    },
}


export default{
    state,
    getters,
    actions,
    mutations
}