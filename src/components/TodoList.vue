<template>
<main>
    <input class="toggle-all" type="checkbox"/>
    <div class="todo-list">
        <TodoItem 
            :key="data"
            v-for="(data) in todoList"
            :data="data"
            @updateTodoItem="updateTodoItem"
            @updateTodoItemComplete="updateTodoItemComplete"
            @deleteTodoItem="deleteTodoItem"></TodoItem>
    </div>
</main>
</template>
<script>
import TodoItem from "./TodoItem.vue"
export default {
    name: '', 
    components: {TodoItem}, 
    data() {
        return {
            todoList: this.$getTodoList(),
        };
    },
    methods: {
        getTodoList() {
            this.todoList = this.$getTodoList();
        },
        updateTodoItem(data) {
            this.$emit("updateTodoItem", data);
        },
        updateTodoItemComplete(data) {
            this.$emit("updateTodoItemComplete", data);
        },
        deleteTodoItem(data) {
            this.$emit("deleteTodoItem", data);
        },
    }
}
</script>