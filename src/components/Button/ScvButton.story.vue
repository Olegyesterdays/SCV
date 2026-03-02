<script setup lang="ts">
import { ref } from 'vue'
import { logEvent } from 'histoire/client'
import ScvButton from './ScvButton.vue'

const text = ref('Нажми на меня!')

function handleClick() {
  logEvent('button:click', { text: text.value })
}
</script>

<template>
  <Story title="Button">
    <template #controls>
      <HstText v-model="text" title="Text" />
    </template>

    <Variant title="Default">
      <ScvButton @click="handleClick">
        {{ text }}
      </ScvButton>
    </Variant>

    <Variant title="Disabled">
      <ScvButton :disabled="true">
        {{ text }}
      </ScvButton>
    </Variant>
  </Story>
</template>

<docs lang="md">
# ScvButton

Базовый компонент кнопки.

## Props

| Prop | Тип | По умолчанию |
|------|------|-------------|
| disabled | boolean | false |

## События

- click
</docs>