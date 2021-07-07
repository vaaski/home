<script setup lang="ts">
import { provide } from "vue"
import Bowser from "bowser"
import NavBar from "@/components/NavBar.vue"

const bowser = Bowser.getParser(window.navigator.userAgent)
let isSafari = false
if (bowser.getBrowser().name === "Safari") isSafari = true

provide("isSafari", isSafari)
</script>

<template>
  <main class="h-full w-full">
    <RouterView id="rw" class="w-full flex items-end"></RouterView>
    <NavBar id="nav" />
  </main>
</template>

<style>
:root {
  overflow: hidden;

  --nav-height: 4rem;
}

* {
  user-select: none;
  outline: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
}

#rw {
  height: calc(100% - var(--nav-height));
  z-index: 10;
}

#nav {
  z-index: 100;
}
</style>
