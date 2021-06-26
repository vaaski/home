<template>
  <div>
    <div class="plugs">
      <Plug v-for="plug in plugs" :key="plug.name" :name="plug.name" :icon="plug.icon" />
    </div>
  </div>
</template>

<script lang="ts">
// @ts-check
import { defineComponent, ref } from "vue"
import Plug from "@/components/Plug.vue"

export default defineComponent({
  components: { Plug },
  setup() {
    //! temporary
    const plugs = ref([
      {
        name: "fan",
        icon: "fan",
        enabled: false,
      },
      {
        name: "other",
        enabled: false,
      },
      {
        name: "fan",
        icon: "fan",
        enabled: true,
      },
      {
        name: "other",
        enabled: false,
      },
      {
        name: "other",
        enabled: false,
      },
    ])

    return { plugs }
  },
})
</script>

<style lang="scss" scoped>
.plugs {
  @apply px-2 pb-2 w-full;
  @apply grid grid-cols-2 gap-2;
}
</style>