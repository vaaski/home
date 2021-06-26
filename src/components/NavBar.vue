<template>
  <nav class="h-16 w-full fixed bottom-0 flex items-center">
    <div class="absolute left-0"></div>
    <div class="max-h-full left-1/2 transform -translate-x-1/2 absolute">
      <LogoFont class="h-16" />
    </div>
    <div class="absolute right-0"></div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import LogoFont from "@/components/LogoFont.vue"

export default defineComponent({
  components: { LogoFont },
  setup() {},
})
</script>

<style lang="scss" scoped>
nav {
  box-shadow: 0 -0.8px 2.2px rgba(0, 0, 0, 0.02), 0 -2px 5.3px rgba(0, 0, 0, 0.028),
    0 -3.8px 10px rgba(0, 0, 0, 0.035), 0 -6.7px 17.9px rgba(0, 0, 0, 0.042),
    0 -12.5px 33.4px rgba(0, 0, 0, 0.05), 0 -30px 80px rgba(0, 0, 0, 0.07);
}
</style>
