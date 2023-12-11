<template>
  <div :class="classes">
    <label for="id" class="ams-textfield__label">{{ label }}</label>
    <input type="text" class="ams-textfield__input" :placeholder="placeholder" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { TextfieldInterface } from './textfield.interface';
import './textfield.style.css';

const props = withDefaults(defineProps<TextfieldInterface>(), { label: 'Label', placeholder: 'Placeholder' });

const classes = computed(() => {
  const { size } = props;
  return [{
    'ams-textfield': true,
    [`ams-button--${size || 'md'}`]: true,
 }]
})
</script>