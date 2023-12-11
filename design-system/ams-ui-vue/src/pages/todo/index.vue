<!-- create list blog with composition api and tailwind css when api call from jsonplaceholder -->
<template>
  <div class="m-auto w-11/12 py-4 px-6">
    <h1 class="text-2xl font-bold">Blog List</h1>
    <div class="mt-4">
      <ul class="list-none m-0 p-0">
        <li v-for="(blog, index) in blogs" :key="index" class="border border-gray-400 p-2 rounded-sm mb-2">
          <div class="flex justify-between">
            <div class="w-1/2">
              <span>{{ blog.title }}</span>
            </div>
            <div class="w-1/2">
              <button class="bg-blue-500 text-white px-4 py-2 rounded-sm" @click="edit(blog)">Edit</button>
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
  name: 'BlogList',
  setup() {
    const blogs = ref([])

    const getBlogs = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      blogs.value = await response.json()
    }

    getBlogs()

    const edit = (blog: any) => {
      console.log(blog)
    }

    const remove = (index: number) => {
      blogs.value.splice(index, 1)
    }

    return {
      blogs,
      edit,
      remove
    }
  }
})
</script>