<script lang="ts">
import { computed, defineComponent, inject, ref } from "vue"
import QuickToggle from "@/components/QuickToggle.vue"
import { bottomColon } from "@/util"

import type { QuickToggle as QuickToggleType } from "$/QuickToggle"

const TEMP_QTS: QuickToggleType[] = [
  {
    name: "TV",
    icon: "cast_connected",
    offIcon: "cast",
    enabled: true,
    type: "plug",
    id: Math.random().toString().slice(2),
  },
  {
    name: "fan",
    icon: "fan",
    spin: true,
    enabled: false,
    type: "plug",
    id: Math.random().toString().slice(2),
  },
  {
    name: "A/C",
    icon: "fan",
    spin: true,
    enabled: true,
    type: "plug",
    id: Math.random().toString().slice(2),
  },
  {
    name: "bed charger",
    enabled: false,
    type: "plug",
    id: Math.random().toString().slice(2),
  },
  {
    name: "desk mic",
    enabled: false,
    type: "plug",
    id: Math.random().toString().slice(2),
  },
]

export default defineComponent({
  components: { QuickToggle },
  setup() {
    const QTs = ref(TEMP_QTS)
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
      qtRender: computed(() => bottomColon(QTs.value)),
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

<template>
  <div>
    <div class="qts" :class="{ expanded: expandedQT }">
      <div v-for="(QTRow, i) in qtRender" :key="i" class="row">
        <QuickToggle
          v-for="QT in QTRow"
          :key="QT.name"
          :qt="QT"
          @click="toggleQT(QT.id)"
          @contextmenu="expandQT(QT.id, $event)"
          @touchstart.passive="longPress(QT.id)"
          @touchend="cancelLongPress"
          @clickOutside="clickOutside(QT.id)"
          :class="{ hide: expandedQT && expandedQT !== QT.id, expanded: expandedQT === QT.id }"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.qts {
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