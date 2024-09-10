<script setup lang="ts">
import {
	ref
} from "vue";

import TheTopNavigation from "../components/TheTopNavigation.vue";
import TheSearchBar from "../components/TheSearchBar.vue";

const searchQuery = ref("");
</script>
<template>
	<div>
		<div class="relative z-50">
			<TheTopNavigation />
		</div>
		<!--  START TOP CONTROLS -->
		<div class="group absolute inset-x-0 top-11 z-40 bg-gradient-to-b from-black/60 to-transparent p-2 pb-8">
			<TheSearchBar v-model="searchQuery" />
		</div>

	</div>
</template>
