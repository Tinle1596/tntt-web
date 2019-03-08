
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
}

const getters = {
    activeStudents: state => {
        return state.students.filter(students => students.active)
    },
    inactiveStudents: state => {
        return state.stduents.filter(students => students.active == false)
    },
    allStudents: state => {
        return state.students
    }
}

const mutations = {
    assignCurrentList(state, currentStudentList){
        state.currentStudentList = currentStudentList
    }
}

const actions = {
   
}


export default{
    state,
    getters,
    actions,
    mutations
}