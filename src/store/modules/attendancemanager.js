// initial state
import db from '../../config/firebase'

const state = {
    sort_by: 'id',
    sort_ascending: true,
    studentsAttendance: [],  
    studentsInfo: [],
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
    RETRIEVE_STUDENT_ATTENDANCE: (state, students) => {
        state.studentsAttendance = students;
    },    
    MERGE_STUDENT_STUDENTINFO: (state, studentsInfo) => {        
        state.studentsInfo = studentsInfo;
        for(let i=0; i<state.studentsAttendance.length; i++) {
            state.students.push({
                ...state.studentsAttendance[i],
                ...(studentsInfo.find((itmInner) => itmInner.studentId === state.studentsAttendance[i].studentId))
            });
        }        
    },
    TOGGLE_ATTENDANCE: (state, student) => {        
        const index = state.students.findIndex(item => item.attendanceId == student.attendanceId)        
        state.students[index].isActive = student.isActive
    },
}

const actions = {
   filterStudentAttendance: (context, payload) => {
       setTimeout(function(){
        context.commit('FILTER_ATTENDANCE_LIST', payload)
       },)
   },
   updateSearchWord: (context, payload) => {
       context.commit('UPDATE_SEARCH_WORD', payload)
   },
   retrieveStudents:(context) =>{
        db.collection('studentAttendance').get()
            .then(querySnapshot => {
                let tempStudents = []
                querySnapshot.forEach(doc => {
                    const data = {
                        attendanceId: doc.id,
                        studentId: doc.data().studentId,
                        isActive: doc.data().isActive,
                        timestampIn: doc.data().timestampIn,
                        timestampOut: doc.data().timestampOut
                    }
                    tempStudents.push(data)
                })
                context.commit('RETRIEVE_STUDENT_ATTENDANCE', tempStudents)
            })
        },
   retrieveStudentsInfo: (context) =>{
       db.collection('students').get()
        .then(querySnapshot => {
            let tempStudentsInfo = []
            querySnapshot.forEach(doc => {
                const data = {
                    studentId: doc.id,
                    age: doc.data().age,
                    firstName: doc.data().firstName,
                    group: doc.data().group,                    
                    lastName: doc.data().lastName,
                    phoneNumber: doc.data().phoneNumber,
                    sex: doc.data().sex
                }
                tempStudentsInfo.push(data)
            })
            context.commit('MERGE_STUDENT_STUDENTINFO', tempStudentsInfo)
        })
   },   
   toggleAttendance:(context, student) => {  
       var tempStudent = student
       if(student.isActive === false){
            tempStudent.isActive = true;
       }
       else{
            tempStudent.isActive = false;
       }
       db.collection('studentAttendance').doc(student.attendanceId).update({
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