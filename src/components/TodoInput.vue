<template>
<div class="todo-input">
    <input 
        class="new-todo"
        v-model="todoTitle"
        @keyup.enter="inputTodoItem"
        placeholder="Add Todo Item"
        maxlength="32">
</div>
</template>
<script>
export default {
    name: '', 
    components: {}, 
    data() {
        return {
            todoTitle: ''
        };
    },
    methods: {
        inputTodoItem() {
            if(this.checkVale()) {
                let todoList = localStorage.getItem('todoList');
                if(todoList === null) todoList = [];
                this.$createTodoItem({
                    title: this.todoTitle,
                    isComplete: false
                });
            }            
        },
        checkVale() {
            let returnValue = true;
            
            if(this.todoTitle.length === 0) {
                alert("Title을 입력하세요.");
                returnValue = false;
            }

            return returnValue;
        }
    },
    computed: {
    }
}
</script>