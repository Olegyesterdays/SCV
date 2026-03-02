<script setup lang="ts">
import { computed } from 'vue';
import type { TTypeBtn } from './ScvButton.types';

const props = withDefaults(
  defineProps<{
    disabled?: boolean;
    type?: TTypeBtn;
    mainColor?: string;
    accentColor?: string;
  }>(),
  {
    disabled: false,
    type: 'button',
    typeAnim: 'opacity',
    mainColor: 'ffffff',
    accentColor: '000000'
  }
);

const mainColorVbind = computed(() => `#${props.mainColor}`);
const accentColorVbind = computed(() => `#${props.accentColor}`);
</script>

<template>
  <button :disabled="disabled" :type="type">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
button {
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 8px;
  color: inherit;
  color: v-bind(accentColorVbind);
  border: 2px solid v-bind(accentColorVbind);
  background-color: v-bind(mainColorVbind);

  transition:
    background-color 0.5s ease,
    color 0.5s ease,
    border-color 0.5s ease;

  &:hover:not(:disabled) {
    color: v-bind(mainColorVbind);
    border: 2px solid v-bind(mainColorVbind);
    background-color: v-bind(accentColorVbind);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}
</style>
