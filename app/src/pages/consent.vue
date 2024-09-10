<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const checked = ref<boolean>(false);

function parseBool(str: string) {
	if (str.length == null) {
		return str == "1" ? true : false;
	} else {
		return str == "true" ? true : false;
	}
}

onMounted(() => {
	if (localStorage.getItem("consent")) {
		checked.value = parseBool(localStorage.getItem("consent")!);
	}
});

watch(checked, () => {
	localStorage.setItem("consent", JSON.stringify(checked.value));
});
</script>

<template>
	<div class="h-4/5 p-4 text-center">
		<div class="flex justify-center">
			<div role="banner">
				<img class="w-20 md:w-24 lg:w-28" src="../assets/cookie.svg" />
			</div>
		</div>
		<div class="mt-8">
			<h1 class="text-center text-3xl font-semibold leading-7 text-baseGray-800 lg:text-4xl lg:leading-9">
				We use Cookies!
			</h1>
			<h1 class="text-center text-lg font-semibold leading-7 text-baseGray-700 lg:text-4xl lg:leading-9">
				So that you get the best experience.
			</h1>
		</div>
		<div class="mt-2 flex justify-center">
			<p class="mt-6 text-justify text-sm text-baseGray-800">

				So that we can personalize the WebApp we use local storage. Data is stored locally in your browser's
				cache. If you click on “Yes, I like cookies”, you give your consent for the use. You can delete local
				data at any time in the app settings. More about data processing can be found
				<a href="/" target="_blank"
					class="text-secondary-600 hover:border-secondary-800 hover:font-bold hover:text-secondary-800 focus:border-secondary-800 focus:font-bold focus:outline-none">here</a>.
			</p>
		</div>
		<div class="flex justify-center py-4">
			<input id="consent-checkbox" type="checkbox" v-model="checked"
				class="h-4 w-4 rounded-full border-baseGray-300 bg-baseGray-100 text-secondary-600 accent-secondary-700 shadow focus:ring-2" />
			<label for="consent-checkbox" class="font-medium ml-2 text-sm text-baseGray-700">I hereby accept the storage
				of data in local storage.</label>
		</div>

		<div class="my-4 flex">
			<RouterLink :to="String(route.query.redirect) || '/'" :class="checked == true
				? 'opacity-100'
				: 'opacity-50 cursor-not-allowed'
				" class="bg-gradient-to-br from-primary-500 to-secondary-800 focus:ring-primary-200 dark:focus:ring-primary-800 rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 w-full">
				Yes, I like cookies!
			</RouterLink>
		</div>



		<a href="/" target="_blank"
			class=" text-sm mt-6 border-b border-transparent text-center leading-none text-secondary-800 hover:border-secondary-800 hover:font-bold hover:text-secondary-800 focus:border-secondary-800 focus:font-bold focus:outline-none">More
			information about the stored data.</a>
	</div>
</template>
