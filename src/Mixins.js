export default {
    methods: {
        $getUUID() {
            return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);

                return v.toString(16);
            });
        },
        $getTodoList() { 
            let todoList = localStorage.getItem('todoList');
    
            if(todoList !== null) {
                todoList = JSON.parse(todoList);
                
                if(this.$store.getters.getFilter === "active") {
                    todoList = todoList.filter((item) => {return !item.isComplete})
                } else if(this.$store.getters.getFilter === "completed") {
                    todoList = todoList.filter((item) => {return item.isComplete})
                }
            } else {
                todoList = [];
            }
            
            this.$store.commit("setTodoList", todoList);
            
            return todoList;
        },
        $createTodoItem(data) {
            let todoList = this.$store.getters.getTodoList;
            
            todoList.push({
                code: this.$getUUID(),
                title: data.title,
                isComplete: data.isComplete
            })
            this.$saveTodoList(todoList);
        },
        $deleteTodoItem(target) {
            let todoList = this.$store.getters.getTodoList;
            let findIdx = todoList.findIndex((data) => { return data.code === target.code});

            todoList.splice(findIdx, 1);            
            this.$saveTodoList(todoList);
        },
        $updateTodoItem(target) {
            let todoList = this.$store.getters.getTodoList;
            let findIdx = todoList.findIndex((item) => { return item.code === target.target.code});
            
            todoList[findIdx].title = target.title;
            this.$saveTodoList(todoList);
        },
        $updateTodoItemComplete(target) {
            let todoList = this.$store.getters.getTodoList;
            let findIdx = todoList.findIndex((item) => { return item.code === target.target.code});
            
            todoList[findIdx].isComplete = target.isComplete;
            this.$saveTodoList(todoList);
        },
        $saveTodoList(data) {

            //let todoList = this.$store.getters.todoList;
            localStorage.setItem('todoList', JSON.stringify(data));
            this.$store.commit("setTodoList", data);
        },
        getFilter() {
            return this.filter;
        }
    }
}