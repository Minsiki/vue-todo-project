<template>
<div class="todoapp">
  <TodoHeader></TodoHeader>
  <TodoInput @createTodoItem="createTodoItem"></TodoInput>
  <ToodoList
    ref="todo_list"
    @deleteTodoItem="deleteTodoItem"
    @updateTodoItem="updateTodoItem"
    @updateTodoItemComplete="updateTodoItemComplete"></ToodoList>
  <TodoFooter 
    ref="todo_footer"
    @clickFilter="clickFilter"
    ></TodoFooter>
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
      this.setTodoInfo();
    },
    async deleteTodoItem(data) {
      await this.$deleteTodoItem(data);
      this.setTodoInfo();
    },
    async updateTodoItem(data) {
      await this.$updateTodoItem(data);
      this.setTodoInfo();
    },
    async updateTodoItemComplete(data) {
      await this.$updateTodoItemComplete(data);
      this.setTodoInfo();
    },
    async clickFilter(data) {
      this.$store.commit("setFilter", data);
      this.setTodoInfo();
    },
    setTodoInfo() {
      this.$refs.todo_list.getTodoList();
      this.$refs.todo_footer.getCount();
    }
  }
}
</script>