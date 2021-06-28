<template>
  <main class="h-full w-full">
    <RouterView id="rw" class="w-full flex items-end"></RouterView>
    <NavBar id="nav" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import NavBar from "@/components/NavBar.vue"

export default defineComponent({
  components: { NavBar },
  setup() {},
})
</script>

<style>
html {
  overflow: hidden;
}

* {
  user-select: none;
  outline: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
}

#rw {
  height: calc(100% - 4rem);
  z-index: 10;
}

#nav {
  z-index: 100;
}
</style>