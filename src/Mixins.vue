'<script>
export default {
    data() {
        return {
            todoList: this.$getTodoList(),
        };
    },
    methods: {
        $getUUID() {
            return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);

                return v.toString(16);
            });
        },
        $getTodoList() {
            let todoList = localStorage.getItem('todoList');

            if(todoList === null) {
                todoList = []
            } else {
                todoList = JSON.parse(todoList)
            }
            
            return todoList;
        },
        $createTodoItem(data) {
            this.todoList.push({
                code: this.$getUUID(),
                title: data.title,
                isComplete: data.isComplete
            })
            this.$saveTodoList();
        },
        $deleteTodoItem(target) {
            let findIdx = this.todoList.findIndex((data) => { return data.code === target.code});

            this.todoList.splice(findIdx, 1);            
            this.$saveTodoList();
        },
        $updateTodoItem(target, title) {
            let findIdx = this.todoList.find((data) => { return data.code === target.code});

            this.todoList[findIdx].title = title;
            this.$saveTodoList();
        },
        $saveTodoList() {
            localStorage.setItem('todoList', JSON.stringify(this.todoList));
        }
    }
}
</script>