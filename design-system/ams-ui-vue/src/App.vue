<template>
  <header class="m-auto w-11/12 py-4 px-6">
    <ul class=" list-none m-0 p-0 flex align-middle items-center">
      <li><RouterLink to="/" class="pr-2 py-2">Home</RouterLink></li>
      <li><RouterLink to="/about" class="p-2">About</RouterLink></li>
      <li><RouterLink to="/contact" class="pl-2 py-2">Contact</RouterLink></li>
      <li><RouterLink to="/todo-list" class="pl-2 py-2">Todo Project</RouterLink></li>
    </ul>
  </header>
  
  <div class="m-auto w-11/12 py-4 px-6">
    <RouterView />
  </div>
</template>