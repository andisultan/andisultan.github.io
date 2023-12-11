<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  // mengirimkan   dari parent ke child
  props: {},
  // mengirimkan data dari child ke parent
  emits: [],
  // state dalam component
  data() {
    return {
      user: {
        firstname: 'John',
        lastname: 'Doe'
      },
      state: {
        count: 0
      }
    }
  },
  methods: {},
  // lifecycle hooks @link: https://v3.vuejs.org/guide/instance.html#lifecycle-hooks
  // dimana data belum terinisialisasi
  beforeCreate() {},
  // dimana data sudah terinisialisasi
  created() {},
  // dimana dom belum terpasang
  beforeMount() {},
  // dimana dom sudah terpasang
  mounted() {},
  // dimana data belum terupdate
  beforeUpdate() {},
  // dimana data sudah terupdate
  updated() {},
  beforeUnmount() {},
  unmounted() {},
})
</script>

<template>
  <div class='w-4/5 m-auto py-6'>
    <p>Firstname: {{ user.firstname  }}</p>
    <input v-model="user.firstname" class="border-red-100 border border-solid p-3">
    <br>
    <br>
    <p>Lastname: {{ user.lastname }}</p>
    <input v-model="user.lastname" class="border-red-100 border border-solid p-3">
    <br>
    <br>
    <button @click="state.count++" class="bordered bg-slate-600 p-3">+</button>
    <span class="bordered p-3">{{ state.count }}</span>
    <button @click="state.count--" class="bordered bg-slate-600 p-3">-</button>
  </div>
</template>