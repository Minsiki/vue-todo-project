<template>
<div class="todoapp">
  <TodoHeader></TodoHeader>
  <TodoInput @createTodoItem="createTodoItem"></TodoInput>
  <ToodoList @deleteTodoItem="deleteTodoItem" ref="todo_list"></ToodoList>
  <TodoFooter></TodoFooter>
</div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import ToodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoInput,
    ToodoList,
    TodoFooter
  },
  methods: {
    async createTodoItem(data) {
      await this.$createTodoItem(data);
      this.$refs.todo_list.getTodoList();
    },
    async deleteTodoItem(data) {
      await this.$deleteTodoItem(data);
      this.$refs.todo_list.getTodoList();
    }
  }
}
</script>