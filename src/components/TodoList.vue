<template>
<main>
    <input class="toggle-all" type="checkbox"/>
    <div class="todo-list">
        <TodoItem :key="index" v-for="(data, index) in todoList" :data="data"></TodoItem>
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
    computed: {
        // getTodoList() {
        //     return this.$store.getters.getTodoList;
        // }
    }
}
</script>