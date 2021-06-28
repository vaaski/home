<template>
  <div>
    <div class="plugs">
      <div v-for="(QTRow, i) in plugRender" :key="i" class="row">
        <Plug
          v-for="QT in QTRow"
          :key="QT.name"
          :qt="QT"
          @click="toggleQT(QT.id)"
          @contextmenu="expandQT(QT.id, $event)"
          :class="{ hide: expandedQT && expandedQT !== QT.id, expanded: expandedQT === QT.id }"
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
    enabled: false,
    id: Math.random().toString().slice(2),
  },
]

export default defineComponent({
  components: { Plug },
  setup() {
    const QTs = ref(TEMP_PLUGS)

    const toggleQT = (id: string) => {
      //! temporary
      const p = QTs.value.find(p => p.id === id)
      if (p) p.enabled = !p.enabled
    }

    const expandedQT = ref("")
    const expandQT = (id: string, event: PointerEvent) => {
      event.preventDefault()
      if (expandedQT.value === id) expandedQT.value = ""
      else expandedQT.value = id
    }

    return {
      plugRender: computed(() => bottomColon(QTs.value)),
      toggleQT,
      expandedQT,
      expandQT,
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
    justify-content: space-between;
    gap: var(--gap);
    overflow: hidden;
    max-width: calc(100%);
  }
}
</style>