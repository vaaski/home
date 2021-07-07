<script setup lang="ts">
import type { QuickToggle } from "$/QuickToggle"
import type { PropType } from "vue"

import SvgIcon from "@/components/SvgIcon.vue"
import { computed, defineEmit, defineProps, ref, toRefs } from "vue"
import { onClickOutside } from "@vueuse/core"

const props = defineProps({
  qt: {
    type: Object as PropType<QuickToggle>,
    required: true,
  },
})

const { name, enabled, icon, offIcon, spin } = toRefs(props.qt)

const emit = defineEmit(["clickOutside"])

const target = ref<HTMLElement | null>(null)
onClickOutside(target, e => emit("clickOutside", e))

const renderedIcon = computed(() => {
  if (enabled.value) return icon?.value ?? "power"
  return offIcon?.value ?? icon?.value ?? "power_off"
})

const iconSpin = computed(() => ({
  "animation-play-state": enabled.value ? "running" : "paused",
}))
</script>

<template>
  <div class="qt" :class="{ enabled }" ref="target">
    <div class="state">
      <SvgIcon :name="renderedIcon" :class="{ spin }" :style="iconSpin" />
      <Transition name="slide">
        <span key="on" v-if="enabled">on</span>
        <span key="off" v-else>off</span>
      </Transition>
    </div>
    <div class="name">
      <span>{{ name }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-359deg);
  }
}

.qt {
  width: calc(50% - 0.5 * var(--gap));
  max-height: 100px;
  overflow: hidden;

  border-radius: 0.5rem;
  padding: 1.25rem 1rem;

  background: var(--background-dark);
  transition: var(--expand-transition);
  border: 1px solid transparent;

  .state {
    margin-bottom: 0.25rem;
    display: flex;
    align-items: center;

    svg {
      font-size: 1.25em;

      &.spin {
        animation: spin 1s linear infinite;
      }
    }

    span {
      position: absolute;
      margin-left: calc(1em + 0.5rem);
      font-variation-settings: "wght" 800;

      &.slide-enter-active,
      &.slide-leave-active {
        transition: 200ms;
      }

      &.slide-leave-to,
      &.slide-enter-from {
        transform: translateX(-1em);
        opacity: 0;
      }
    }
  }

  &.expanded {
    width: 100%;
    border: 1px solid currentColor;
    padding-bottom: 500px;
  }

  &.enabled {
    background: var(--text);
    color: var(--background);
  }

  &.hide {
    max-height: 0;
    width: 0;
    padding: 0;
    opacity: 0;
    border: 0px solid transparent;
  }
}
</style>
