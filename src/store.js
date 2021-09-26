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
        },

    },
    mutations: {
        addTodoList(state, payload) {
            state.todoList.push({
                code: payload.code,
                title: payload.title,
                isComplete: payload.isComplete
            });
        },
        updateTodoItem(state, payload) {
            console.log(payload);
            let findIdx = state.todoList.find((item) => {
                return item.code === payload.code;
            })

            console.log(findIdx);
        }
    },
})

export default store;