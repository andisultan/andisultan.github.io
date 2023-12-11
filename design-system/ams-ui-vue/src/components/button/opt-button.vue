<!-- Options API Component -->
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    block: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'small'
    },
  },
  data() {
    return {
      count: 0
    }
  },
  emits: ['click'],
  methods: {
    handleClick() {
      this.count++;
      this.$emit('click', this.count);
    }
  },
  computed: {
    classes() {
      const { block, size } = this.$props;
      return [{
        'ams-button': true,
        ['ams-button--block']: block,
        [`ams-button--${size || 'small'}`]: size,
      }]
    }
  }
})
</script>

<template>
  <button type="button" :class="classes" @click="handleClick">
    <slot>{{ count }}</slot>
  </button>
</template>