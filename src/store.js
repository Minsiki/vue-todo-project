import {createStore} from 'vuex'
const store = createStore({
    state() {
        return {
            filter: "all",
            todoList: []
        }
    },
    mutations: {
        setTodoList: (state, data) => {
            state.todoList = data;
        },
        setFilter: (state, data) => {
            state.filter = data;
        },
    },
    getters: {
        getTodoList: (state) => {
            console.log(state.todoList)
            return state.todoList;
        },
        getFilter: (state) => {
            return state.filter;
        }
    }
})

export default store;