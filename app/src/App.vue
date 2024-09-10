<script setup lang="ts">
import { computed, onBeforeMount, onUpdated, ref } from "vue";
import { RouterView, useRoute, useRouter } from "vue-router";

//COMPONENTS
import TheBottomNavigation from "./components/TheBottomNavigation.vue";

//Router
const router = useRouter();

//CONSTANTS (COMPUTED)
const route = useRoute();
const isMainRoute = computed(() => route.name === "index");
const isConsentRoute = computed(() => route.name === "consent");

// Viewport height hack for mobile
setViewportHeight();
window.addEventListener("resize", setViewportHeight);
function setViewportHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

/**
 * Parse string to bool value
 * @param str string to parse
 * @returns bool parsed from string
 */
function parseBool(str: string) {
  if (str.length == null) {
    return str == "1" ? true : false;
  } else {
    return str == "true" ? true : false;
  }
}

/**
 * LifeCycle HOOKS
 */
onBeforeMount(async () => {
  const redirect = window.location.pathname + window.location.search;
  if (localStorage.getItem("consent")) {
    if (parseBool(localStorage.getItem("consent")!) !== true) {
      router.replace(`/consent?redirect=${redirect}`);
    }
  } else {
    router.replace(`/consent?redirect=${redirect}`);
  }
});
</script>

<template>
  <div class="h-full w-full overflow-x-hidden" :class="[
    isMainRoute
      ? 'grid-rows-[calc(var(--vh,1vh)*100)_0]'
      : 'grid-rows-[calc(var(--vh,1vh)*100-4rem)_4rem]'
  ]">
    <main class="relative h-full overflow-y-auto overflow-x-hidden">
      <RouterView v-slot="{ Component }">
        <KeepAlive include="index" exclude="questSingle">
          <component :is="Component" />
        </KeepAlive>
      </RouterView>
    </main>
    <div class="relative z-50" v-if="!isConsentRoute">
      <TheBottomNavigation :floating="isMainRoute" />
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}

html,
body,
#app {
  width: 100vw;
  height: 100vh;
}
</style>
