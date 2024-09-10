<script setup lang="ts">
/**
 * Libaries
 */
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleRight,
  faTrash,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { onActivated, onUpdated, ref } from "vue";

//Router
import router from "@/router";

library.add(faAngleRight, faTrash, faArrowLeft);

function parseBool(str: string) {
  if (str.length == null) {
    return str == "1" ? true : false;
  } else {
    return str == "true" ? true : false;
  }
}

const showClearStorageModal = ref(false);
function clearStorage() {
  localStorage.clear();
  showClearStorageModal.value = false;
  router.replace("/");
}

/**
 * LifeCycle HOOKS
 */

onActivated(() => {
  if (localStorage.getItem("consent")) {
    if (parseBool(localStorage.getItem("consent")!) !== true) {
      router.replace("/consent");
    }
  } else {
    router.replace("/consent");
  }
});

onUpdated(() => {
  if (localStorage.getItem("consent")) {
    if (parseBool(localStorage.getItem("consent")!) !== true) {
      router.replace("/consent");
    }
  } else {
    router.replace("/consent");
  }
});
</script>

<template>
  <div class="flex flex-col text-baseGray-800">
    <h1
      class="mb-2 mt-2 p-2 text-center text-3xl font-semibold text-primary-500"
    >
      Settings
    </h1>
    <!-- Clear localStorage BUTTON -->
    <div class="mb-4 mx-2 flex">
      <button
        @click="showClearStorageModal = true"
        class="bg-gradient-to-br from-primary-400 to-secondary-800 focus:ring-primary-200 dark:focus:ring-primary-800 rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 w-full"
      >
        Clear Local Storage
      </button>
    </div>
    <Teleport to="body" v-if="showClearStorageModal">
      <div class="absolute inset-0 bg-black/20">
        <div
          class="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center p-4"
        >
          <div class="bg-white rounded-md shadow-lg p-4 max-w-sm">
            <h2
              class="text-xl font-semibold tracking-wide text-center text-primary-600"
            >
              Are you sure?
            </h2>
            <p class="mt-2">
              All your saved data will go hereby lost. This process cannot be
              undone.
            </p>
            <div class="mt-4 flex gap-4">
              <button
                @click="clearStorage"
                class="w-full rounded px-3 py-2 bg-gradient-to-br from-primary-400 to-secondary-800 text-white font-medium"
              >
                <FontAwesomeIcon icon="fa-solid fa-trash" />
                Delete
              </button>
              <button
                @click="showClearStorageModal = false"
                class="w-full rounded px-3 py-2 bg-zinc-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>
