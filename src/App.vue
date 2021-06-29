<template>
  <main class="h-full w-full">
    <RouterView id="rw" class="w-full flex items-end"></RouterView>
    <NavBar id="nav" />
  </main>
</template>

<script lang="ts">
import { defineComponent, provide } from "vue"
import Bowser from "bowser"
import NavBar from "@/components/NavBar.vue"

export default defineComponent({
  components: { NavBar },
  setup() {
    const bowser = Bowser.getParser(window.navigator.userAgent)
    let isSafari = false
    if (bowser.getBrowser().name === "Safari") isSafari = true

    provide("isSafari", isSafari)
  },
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