// initial state
const state = {
    sort_by: 'id',
    sort_ascending: true,
    students: [
        {
            id: 1,
            firstName: 'John',
            lastName: 'Nguyen',
            age: 11,
            group: 'TN',
            attendance: true,
        },
        {
            id: 2,
            firstName: 'Jenny',
            lastName: 'Tran',
            age: 17,
            group: 'HS',
            attendance: true,
        },
        {
            id: 3,
            firstName: 'Jacob',
            lastName: 'Nguyen',
            age: 9,
            group: 'TN',
            attendance: false
        }
    ],
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
                return student.attendance === state.selectedAttendance;
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
   }
}


export default{
    state,
    getters,
    actions,
    mutations
}