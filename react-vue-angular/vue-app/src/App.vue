<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class=" bg-black py-4">
    <nav class="w-10/12 m-auto flex justify-between">
      <RouterLink to="/">
        <img alt="Vue logo" src="@/assets/logo.svg" width="55"/>
      </RouterLink>
      <ul class="list-none m-0 p-0 inline-flex items-center text-neutral-500">
        <li class="py-2 px-3 hover:text-white">
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li class="py-2 px-3 hover:text-white">
          <RouterLink to="/blog">Blog</RouterLink>
        </li>
        <li class="py-2 px-3 hover:text-white">
          <RouterLink to="/product">Product</RouterLink>
        </li>
        <li class="py-2 px-3 hover:text-white">
          <RouterLink to="/todo">Todo</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
  <main class="w-10/12 m-auto py-8">
    <RouterView />
  </main>
</template>