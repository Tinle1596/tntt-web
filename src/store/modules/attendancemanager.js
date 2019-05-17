// initial state
import db from '../../config/firebase'

const state = {
    sort_by: 'id',
    sort_ascending: true,
    students: [],
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
    RETRIEVE_STUDENTS:(state, students) => {
        state.students = students
    }
}

const actions = {
   filterStudentAttendance: (context, payload) => {
       setTimeout(function(){
        context.commit('FILTER_ATTENDANCE_LIST', payload)
       },)
   },
   updateSearchWord:(context, payload) => {
       context.commit('UPDATE_SEARCH_WORD', payload)
   },
   retrieveStudents(context){
       db.collection('students').get()
       .then(querySnapshot => {
           let tempStudents = []
            querySnapshot.forEach(doc => {                
                const data = {
                    id: doc.id,
                    age: doc.data().age,
                    firstName: doc.data().firstName,
                    group: doc.data().group,
                    isActive: doc.data().isActive,
                    lastName: doc.data().lastName,
                    phoneNumber: doc.data().phoneNumber,
                    sex: doc.data().sex                   
                }
                tempStudents.push(data)
            })
            context.commit('RETRIEVE_STUDENTS', tempStudents)
       })    
   },
}


export default{
    state,
    getters,
    actions,
    mutations
}