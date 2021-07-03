<template>
  <nav class="w-full fixed bottom-0 flex items-center justify-around bg-background">
    <RouterLink
      v-for="route in routes"
      :key="route.route"
      :to="route.route"
      class="h-full flex items-center flex-col justify-center"
    >
      <SvgIcon :name="route.icon" class="icon" />
    </RouterLink>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import SvgIcon from "./SvgIcon.vue"

interface NavRoute {
  icon: string
  route: string
}

const NAV_ROUTES: NavRoute[] = [
  {
    icon: "power",
    route: "/qt",
  },
  {
    icon: "settings",
    route: "/settings",
  },
]

export default defineComponent({
  components: { SvgIcon },
  setup() {
    return {
      routes: ref(NAV_ROUTES),
    }
  },
})
</script>

<style lang="scss" scoped>
nav {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.125);
  height: var(--nav-height);

  a {
    padding: 0 2rem;
  }

  .icon {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .router-link-active {
    > .icon {
      font-size: 1.875rem; /* 30px */
      line-height: 2.25rem; /* 36px */
    }
  }
}
</style>
