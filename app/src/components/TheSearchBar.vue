<script setup lang="ts">
import BaseTopBar from "./TheTopBar.vue";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faSearch
} from "@fortawesome/free-solid-svg-icons";

//ADD ICONS to FONTAWESOME Lib
library.add(faSearch);

defineProps<{
	modelValue: string;
}>();

defineEmits<{
	(e: "update:modelValue", value: string): void;
}>();

</script>

<template>
	<BaseTopBar>
		<label class="flex items-center gap-2 px-3 py-2 w-full">
			<FontAwesomeIcon icon="search" size="lg" class="text-slate-400" />
			<input
				type="search"
				:value="modelValue"
				@change="$emit('update:modelValue', modelValue)"
				placeholder="Suche nach etwas..."
				class="w-full outline-none"
			/>
		</label>
	</BaseTopBar>
</template>
