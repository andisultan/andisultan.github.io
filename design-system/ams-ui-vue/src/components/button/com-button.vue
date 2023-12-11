<!-- Composition API Component -->
<script lang="ts" setup>
import { computed } from 'vue';

interface ButtonProps {
  /**
   * set display block of the component
   */
  block?: boolean
  /**
   * set color of the component
   */
  color?: 'primary' | 'secondary' | 'tertiary' | 'error' | 'success' | 'information' | 'warning'
  /**
   * set icon left of the component
   */
  iconLeft?: any
  /**
   * set icon right of the component
   */
  iconRight?: any
  /**
   * set size of the component
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * set variant of the component
   */
  variant?: 'solid' | 'outline' | 'soft' | 'transparent'
}

const props = withDefaults(defineProps<ButtonProps>(), { block: false });
const classes = computed(() => {
  const { block, color, size, variant } = props;
  return [{
    'ams-button': true,
    ['ams-button--block']: block,
    [`ams-button--${size || 'md'}`]: true,
    [`ams-button--${color || 'primary'}-${variant || 'solid'}`]: true,
 }]
})

const emit = defineEmits<{
  (e: 'click'): void;
}>()

const onClick = () => {
  emit('click')
}
</script>

<template>
  <button type="button" :class="classes" @click="onClick">
    <slot>Button</slot>
  </button>
</template>