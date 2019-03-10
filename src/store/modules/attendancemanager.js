
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
    selectedAttendance: "All"    
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
    }
}

const mutations = {
    assignCurrentList(state, currentStudentList){
        state.currentStudentList = currentStudentList
    },
    changeCurrentList: (state, payload) => {
        state.selectedAttendance = payload;
    }    
}

const actions = {
   changeCurrentList: (context, payload) => {
       setTimeout(function(){
        context.commit('changeCurrentList', payload)
       },)
   }
}


export default{
    state,
    getters,
    actions,
    mutations
}