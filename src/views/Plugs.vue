<template>
  <div>
    <div class="plugs">
      <div v-for="(plugRow, i) in plugRender" :key="i" class="row">
        <Plug
          v-for="plug in plugRow"
          :key="plug.name"
          :plug="plug"
          @click="togglePlug(plug.id)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue"
import Plug from "@/components/Plug.vue"
import { bottomColon } from "@/util"

import type { Plug as PlugType } from "$/Plugs"

export default defineComponent({
  components: { Plug },
  setup() {
    const TEMP_PLUGS: PlugType[] = [
      {
        name: "TV",
        icon: "cast_connected",
        offIcon: "cast",
        enabled: true,
        id: Math.random().toString().slice(2),
      },
      {
        name: "fan",
        icon: "fan",
        spin: true,
        enabled: false,
        id: Math.random().toString().slice(2),
      },
      {
        name: "A/C",
        icon: "fan",
        spin: true,
        enabled: true,
        id: Math.random().toString().slice(2),
      },
      {
        name: "bed charger",
        enabled: false,
        id: Math.random().toString().slice(2),
      },
      {
        name: "desk mic",
        icon: "outlet",
        enabled: false,
        id: Math.random().toString().slice(2),
      },
    ]
    const plugs = ref(TEMP_PLUGS)

    const togglePlug = (id: string) => {
      //! temporary
      const p = plugs.value.find(p => p.id === id)
      if (p) p.enabled = !p.enabled
    }

    return {
      plugRender: computed(() => bottomColon(plugs.value)),
      togglePlug,
    }
  },
})
</script>

<style lang="scss" scoped>
.plugs {
  --gap: 0.5rem;
  width: 100%;
  padding: var(--gap);

  display: flex;
  flex-direction: column;
  gap: var(--gap);

  > .row {
    display: flex;
    gap: var(--gap);

    > .plug {
      width: calc(50% - var(--gap));
    }
  }
}
</style>