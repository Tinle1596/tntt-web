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
            attendance: 'In',
        },
        {
            id: 2,
            firstName: 'Jenny',
            lastName: 'Tran',
            age: 17,
            group: 'HS',
            attendance: 'In',
        },
        {
            id: 3,
            firstName: 'Jacob',
            lastName: 'Nguyen',
            age: 9,
            group: 'TN',
            attendance: 'Out'
        }
    ],
    selectedAttendance: "All",
    searchStudent: "John"
}

const getters = {
    allStudents: state => {
        return state.students
    },
    filteredStudents: state => {
        var attendance = state.selectedAttendance;

        if(attendance === "All"){
            return state.students;
        } else {
            return state.students.filter(function(student) {
                return student.attendance === state.selectedAttendance;
            })
        }
    },
    filteredSearchStudents: (state, getters) => {
        var studentSearch = state.searchStudent;
        var filteredStudents = getters.filteredStudents;

        if(studentSearch){
            return filteredStudents.filter((student) =>{
                return student.firstName.startsWith(studentSearch);
            })
        } else {
            return filteredStudents;
        }        
    }
}

const mutations = {
    assignCurrentList(state, currentStudentList){
        state.currentStudentList = currentStudentList
    },
    FILTER_ATTENDANCE_LIST: (state, payload) => {
        state.selectedAttendance = payload;
    }    
}

const actions = {
   filterStudentAttendance: (context, payload) => {
       setTimeout(function(){
        context.commit('FILTER_ATTENDANCE_LIST', payload)
       },)
   }
}


export default{
    state,
    getters,
    actions,
    mutations
}