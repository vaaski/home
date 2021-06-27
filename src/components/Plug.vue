<template>
  <div class="plug" :class="{ enabled }">
    <div class="state">
      <SvgIcon :name="icon" :class="{ spin }" :style="iconSpin" />
      <transition name="slide">
        <span key="on" v-if="enabled">on</span>
        <span key="off" v-else>off</span>
      </transition>
    </div>
    <div class="name">
      <span>{{ name }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Plug } from "$/Plugs"

import { computed, defineComponent, PropType, toRefs, watch } from "vue"
import SvgIcon from "@/components/SvgIcon.vue"

export default defineComponent({
  components: { SvgIcon },
  props: {
    plug: {
      type: Object as PropType<Plug>,
      required: true,
    },
  },
  setup(props) {
    const { name, enabled, icon, offIcon, spin } = toRefs(props.plug)

    return {
      icon: computed(() => {
        // if (!icon?.value) return "outlet"
        // if (!offIcon?.value || enabled.value) return icon.value
        // return offIcon.value

        if (enabled.value) return icon?.value ?? "power"
        return offIcon?.value ?? icon?.value ?? "power_off"
      }),
      spin,
      iconSpin: computed(() => ({
        "animation-play-state": enabled.value ? "running" : "paused",
      })),
      name,
      enabled,
    }
  },
})
</script>

<style lang="scss" scoped>
@keyframes spin {
  0% {
    transform: rotate3d(0, 0, 1, 0deg);
  }
  100% {
    transform: rotate3d(0, 0, 1, -359deg);
  }
}

.plug {
  border-radius: 0.5rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.125);
  transition: 100ms;

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

  &.enabled {
    background: var(--text);
    color: var(--background);
  }
}
</style>