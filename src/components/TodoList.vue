<template>
<main>
    <input class="toggle-all" type="checkbox"/>
    <div class="todo-list">
        <TodoItem :key="index"
        v-for="(data, index) in todoList"
        :data="data"
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
        deleteTodoItem(data) {
            this.$emit("deleteTodoItem", data);
        }
    }
}
</script>