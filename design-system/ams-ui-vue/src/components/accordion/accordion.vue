<template>
  <div>
    <div :fo>
      <button>

      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { AccordionInterface} from './accordion.interface';
import './accordion.style.css';

// default props
const props = withDefaults(defineProps<AccordionInterface>(), {});

// computed class
</script>