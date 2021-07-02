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
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.125);
}
</style>
