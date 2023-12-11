<!-- create todo list form from scratch with composition api -->
<template>
  <div class="m-auto w-11/12 py-4 px-6">
    <h1 class="text-2xl font-bold">Todo List</h1>
    <div class="flex justify-between">
      <div class="w-1/2">
        <input type="text" class="border border-gray-400 w-full p-2 rounded-sm" v-model="newTodo" />
      </div>
      <div class="w-1/2">
        <button class="bg-blue-500 text-white px-4 py-2 rounded-sm" @click="addTodo">Add Todo</button>
      </div>
    </div>
    <div class="mt-4">
      <ul class="list-none m-0 p-0">
        <li v-for="(todo, index) in todos" :key="index" class="border border-gray-400 p-2 rounded-sm mb-2">
          <div class="flex justify-between">
            <div class="w-1/2">
              <span v-if="!todo.isEdit">{{ todo.title }}</span>
              <input type="text" class="border border-gray-400 w-full p-2 rounded-sm" v-model="todo.title" v-if="todo.isEdit" />
            </div>
            <div class="w-1/2">
              <button class="bg-blue-500 text-white px-4 py-2 rounded-sm" @click="edit(todo)">Edit</button>
              <button class="bg-red-500 text-white px-4 py-2 rounded-sm" @click="remove(index)">Remove</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue'

export default defineComponent({
  name: 'TodoList',
  setup() {
    const newTodo = ref('')
    const todos = ref([
      {
        title: 'Learn Vue 3',
        isEdit: false
      },
      {
        title: 'Learn Tailwind CSS',
        isEdit: false
      },
      {
        title: 'Learn TypeScript',
        isEdit: false
      }
    ])

    const addTodo = () => {
      todos.value.push({
        title: newTodo.value,
        isEdit: false
      })
      newTodo.value = ''
    }

    const edit = (todo: any) => {
      todo.isEdit = !todo.isEdit
    }

    const remove = (index: number) => {
      todos.value.splice(index, 1)
    }

    return {
      newTodo,
      todos,
      addTodo,
      edit,
      remove
    }
  }
})
</script>