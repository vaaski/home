<template>
  <div class="plug">
    <div class="state">
      <SvgIcon :name="icon" />
      <span>on</span>
    </div>
    <div class="name">
      <span>{{ name }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue"
import SvgIcon from "@/components/SvgIcon.vue"

export default defineComponent({
  components: { SvgIcon },
  props: {
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: "outlet",
    },
  },
  setup(props) {
    const { name, icon } = toRefs(props)

    return { name, icon }
  },
})
</script>

<style lang="scss" scoped>
.plug {
  @apply p-4 rounded-lg;
  background: rgba(0, 0, 0, 0.125);

  .state {
    @apply mb-1;
    display: flex;
    align-items: center;

    svg {
      font-size: 1.25em;
    }

    span {
      @apply ml-1;
      font-variation-settings: "wght" 800;
    }
  }
}
</style>