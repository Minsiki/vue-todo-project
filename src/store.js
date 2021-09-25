import {createStore} from "vuex"

const store = createStore({
    state() {
        return {
            todoList: []
        }
    },
    getters: {
        getTodoList: (state) => {
            return state.todoList;
        },
        getTotalCount: (state) => {
            return state.todoList.length;
        }

    },
    mutations: {
        addTodoList(state, palyload) {
            state.todoList.push(palyload.title);
        }
    }
})

export default store;