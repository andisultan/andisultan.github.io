<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import { ref } from 'vue'
import { useTodoStore }  from './todo.store'
const todos = useTodoStore()

const newTodo = ref('')
const clearNewTodo = () => {
  console.log(newTodo.value.value)
  newTodo.value.value = ''
}
</script>

<template>
  <h1>Todo</h1>
  <form class="flex border max-w-lg m-auto" @submit.prevent="todos.addTodoList(newTodo.value, clearNewTodo)">
    <input type="text" ref="newTodo" placeholder="Add todo" class="block border-0 p-2 w-4/5"/>
    <button class="border-0 p-2 bg-slate-800 text-stone-50 w-1/5">Add</button>
  </form>
  <ul>
    <li><button>Show all</button></li>
    <li><button>Done only</button></li>
    <li><button>Undone only</button></li>
  </ul>
  <ul>
    <li v-for="(todo, index) in todos.todoList" :key="todo.name" class=" border border-gray-500 p-2 mb-2 flex items-center justify-between">
      <span>
        <input type="checkbox" :checked="todo.done" @checked="todos.toggleTodoList(index)"/> {{ todo.name }}
      </span>
      <button @click="todos.deleteTodoList(index)" class=" border-0 px-2 bg-red-500">X</button>
    </li>
  </ul>
</template>