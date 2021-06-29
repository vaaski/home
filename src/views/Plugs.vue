<template>
  <div>
    <div class="plugs" :class="{ expanded: expandedQT }">
      <div v-for="(QTRow, i) in plugRender" :key="i" class="row">
        <Plug
          v-for="QT in QTRow"
          :key="QT.name"
          :qt="QT"
          @click="toggleQT(QT.id)"
          @contextmenu="expandQT(QT.id, $event)"
          @touchstart="longPress(QT.id)"
          @touchend="cancelLongPress"
          @clickOutside="clickOutside(QT.id)"
          :class="{ hide: expandedQT && expandedQT !== QT.id, expanded: expandedQT === QT.id }"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, ref } from "vue"
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
    const isSafari = inject<boolean>("isSafari")

    const toggleQT = (id: string) => {
      //! temporary
      const p = QTs.value.find(p => p.id === id)
      if (p) p.enabled = !p.enabled
    }

    const expandedQT = ref("")
    const expandQT = (id: string, event?: PointerEvent) => {
      event?.preventDefault()
      if (expandedQT.value === id) expandedQT.value = ""
      else expandedQT.value = id
    }
    const clickOutside = (id: string) => {
      if (expandedQT.value === id) expandedQT.value = ""
    }

    let pressed = 0
    const longPress = (id: string) => {
      if (!isSafari) return
      pressed = setTimeout(() => {
        expandQT(id)
        window.navigator.vibrate?.(1)
      }, 475)
    }
    const cancelLongPress = () => clearTimeout(pressed)

    return {
      plugRender: computed(() => bottomColon(QTs.value)),
      toggleQT,
      expandedQT,
      expandQT,
      longPress,
      cancelLongPress,
      clickOutside,
    }
  },
})
</script>

<style lang="scss" scoped>
.plugs {
  --gap: 0.5rem;
  --expand-transition: 100ms;
  width: 100%;
  padding: var(--gap);

  display: flex;
  flex-direction: column;
  gap: var(--gap);
  transition: var(--expand-transition);

  > .row {
    transition: var(--expand-transition);
    gap: var(--gap);
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    max-width: calc(100%);
  }

  &.expanded {
    gap: 0;
    > .row {
      gap: 0;
    }
  }
}
</style>