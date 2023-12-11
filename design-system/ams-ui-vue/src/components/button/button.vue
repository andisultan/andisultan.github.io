<template>
  <button type="button" :class="classes" @onClick="onClick">
    <slot>Button</slot>
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { ButtonInterface} from './button.interface';
import './button.style.css';

// default props
const props = withDefaults(defineProps<ButtonInterface>(), {});

// computed class
const classes = computed(() => {
  const { color, size, variant } = props;
  return [{
    'ams-button': true,
    [`ams-button--${size || 'md'}`]: true,
    [`ams-button--${color || 'primary'}-${variant || 'solid'}`]: true,
 }]
})

// emit event
const emit = defineEmits<{
  (e: 'click'): void;
}>()

const onClick = () => {
  emit('click')
}
</script>