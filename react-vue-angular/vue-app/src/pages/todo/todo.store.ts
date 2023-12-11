import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todoList: [
      { name: 'Belajar Vue 3', done: true },
      { name: 'Belajar Vuex 4', done: false },
      { name: 'Belajar Pinia', done: false },
    ],
  }),
  actions: {
    addTodoList(todo: string, callback: () => void) {
      // Jika todo kosong, maka tidak akan di push
      if (!todo) return

      // Jika todo sudah ada, maka tidak akan di push
      const isExist = this.todoList.find((item) => item.name === todo)
      if (isExist) return

      this.todoList.push({ name: todo, done: false })
      callback()
    },
    toggleTodoList(index: number) {
      this.todoList[index].done = !this.todoList[index].done
    },
    deleteTodoList(index: number) {
      this.todoList.splice(index, 1)
    },
  },
})
