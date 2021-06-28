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

import { computed, defineComponent, PropType, toRefs } from "vue"
import SvgIcon from "@/components/SvgIcon.vue"

export default defineComponent({
  components: { SvgIcon },
  props: {
    qt: {
      type: Object as PropType<Plug>,
      required: true,
    },
  },
  setup(props) {
    const { name, enabled, icon, offIcon, spin } = toRefs(props.qt)

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
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-359deg);
  }
}

.plug {
  width: calc(50% - 0.5 * var(--gap));
  max-height: 100px;
  overflow: hidden;

  border-radius: 0.5rem;
  padding: 1.25rem 1rem;

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

  &.expanded {
    width: 100%;
    padding: 15rem 1rem;
  }

  &.hide {
    max-height: 0;
    width: 0;
    padding: 0;
    opacity: 0;
  }
}
</style>