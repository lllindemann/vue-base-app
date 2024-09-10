<script setup lang="ts">
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPhone,
  faPerson,
  faList,
  faMap,
  faUser,
  faUserGroup,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";

import { computed } from "vue";
import { RouterLink, useRouter } from "vue-router";

//ADD ICONS to FONTAWESOME Lib
library.add(faPhone, faPerson, faList, faMap, faUserGroup, faUser, faNewspaper);

//PROPS
const props = withDefaults(defineProps<Props>(), {
  floating: false,
  hidden: false,
  loggedIn: false,
});

type Props = {
  floating?: boolean;
  hidden?: boolean;
  loggedIn?: boolean;
};

/**
 * Router
 */
const router = useRouter();

/**
 * COMPUTED for conditional CSS Classes
 */
const navClasses = computed(() =>
  props.floating
    ? "rounded-md inset-x-2 bottom-2 px-0 shadow-lg"
    : "inset-x-0 bottom-0"
);

/**
 * Check if subroute is active
 * @param input route
 */
function subIsActive(input: string) {
  const paths = Array.isArray(input) ? input : [input];
  return paths.some((path) => {
    return router.currentRoute.value.path.indexOf(path) === 0; // current path starts with this path string
  });
}
</script>

<template>
  <nav
    class="absolute bg-white p-2 pt-3 text-slate-500 transition-all"
    :class="[navClasses]"
  >
    <ul class="flex items-center justify-around">
      <li>
        <RouterLink
          to="/overview"
          class="flex w-10 flex-col items-center justify-center rounded-md transition"
          active-class="text-primary-600"
          :class="{ 'router-link-active': subIsActive('/overview') }"
        >
          <FontAwesomeIcon icon="list" />
          <span class="text-xs">Overview</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/news"
          class="flex w-10 flex-col items-center justify-center rounded-md transition"
          exact-active-class="text-primary-600"
          :class="{ 'router-link-active': subIsActive('/news') }"
        >
          <FontAwesomeIcon icon="newspaper" />
          <span class="text-xs">News</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/"
          class="flex w-10 flex-col items-center justify-center rounded-md transition"
          exact-active-class="text-primary-600"
        >
          <FontAwesomeIcon icon="map" />
          <span class="text-xs">Map</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/friends"
          class="flex w-10 flex-col items-center justify-center rounded-md transition"
          active-class="text-primary-600"
          :class="{ 'router-link-active': subIsActive('/friends') }"
        >
          <FontAwesomeIcon icon="user-group" />
          <span class="text-xs">Friends</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/profile"
          class="flex w-10 flex-col items-center justify-center rounded-md transition"
          active-class="text-primary-600"
        >
          <FontAwesomeIcon icon="user" />
          <span class="text-xs">Profile</span>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>
