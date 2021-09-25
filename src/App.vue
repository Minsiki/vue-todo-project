<template>
<div class="todoapp">
  <TodoHeader></TodoHeader>
  <TodoInput></TodoInput>
  <ToodoList></ToodoList>
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
  }
}
</script>