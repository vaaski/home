<template>
  <div>
    <div class="plugs">
      <div v-for="(plugRow, i) in plugRender" :key="i" class="row">
        <Plug v-for="plug in plugRow" :key="plug.name" :name="plug.name" :icon="plug.icon" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue"
import Plug from "@/components/Plug.vue"
import { bottomColon } from "@/util"

export default defineComponent({
  components: { Plug },
  setup() {
    //! temporary
    const plugs = ref([
      {
        name: "fan1",
        icon: "fan",
        enabled: false,
      },
      {
        name: "other2",
        enabled: false,
      },
      {
        name: "fan3",
        icon: "fan",
        enabled: true,
      },
      {
        name: "other4",
        enabled: false,
      },
      {
        name: "other5",
        enabled: false,
      },
    ])

    return {
      plugRender: computed(() => bottomColon(plugs.value)),
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