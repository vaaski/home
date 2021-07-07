<script setup lang="ts">
import { computed, defineProps } from "vue"

const props = defineProps({
  prefix: {
    type: String,
    default: "icon",
  },
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "currentColor",
  },
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>

<template>
  <svg aria-hidden="true">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<style lang="scss" scoped>
:where(svg) {
  font-size: 24px;
  height: 1em;
  width: 1em;
  vertical-align: middle;
  transform-origin: center;
}
</style>
