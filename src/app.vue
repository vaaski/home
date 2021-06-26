<template>
  <main class="h-full w-full">
    <router-view id="rw" class="w-full"></router-view>
    <nav-bar id="nav" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import NavBar from "@/components/nav-bar.vue"

export default defineComponent({
  components: { NavBar },
  setup() {},
})
</script>

<style scoped>
#rw {
  height: calc(100% - 4rem);
  z-index: 10;
}

#nav {
  z-index: 100;
}
</style>