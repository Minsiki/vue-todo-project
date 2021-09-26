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
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        },
        $getTodoList() {
            let todoList = localStorage.getItem('todoList');
            if(todoList !== null && todoList !== undefined) todoList = JSON.parse(todoList);
            return todoList;
        },
        $createTodoItem(data) {
            console.log(this.todoList);
            this.todoList.push({
                code: this.$getUUID(),
                title: data.title,
                isComplete: data.isComplete
            })

            this.$saveTodoList();
        },
        $deleteTodoItem(target) {
            let findIdx = this.todoList.find((data) => { return data.code === target.code});

            this.todoList.slice(findIdx, 1);
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