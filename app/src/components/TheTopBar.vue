<script setup lang="ts">
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faGear
} from "@fortawesome/free-solid-svg-icons";

//ADD ICONS to FONTAWESOME Lib
library.add(faGear);

</script>

<template>
	<div
		class="rounded-full bg-white w-full flex items-center mb-2 ring-primary-500 focus-within:ring divide-x"
	>
		<slot />

		<RouterLink to="/" class="pl-2 pr-2.5 py-2 text-center">
			<FontAwesomeIcon icon="gear" size="lg" class="text-slate-500" />
		</RouterLink>
	</div>
</template>
