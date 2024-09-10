<template>
	<div>
		<div class="flex h-screen w-screen items-center justify-center">
			<div class="px-4 lg:py-12">
				<div class="lg:flex lg:gap-5">
					<div class="flex flex-col items-center justify-center md:py-10 lg:py-5">
						<h1 class="text-4xl font-bold text-secondary-500">404</h1>
						<p class="text-lg font-bold text-secondary-500 md:text-2xl">
							Whoopsie!
						</p>
						<p class="mb-2 pt-5 text-center text-lg text-gray-800 md:text-2xl">
							Something went wrong ...?!
						</p>
						<p class="mb-8 text-center text-gray-600 md:text-lg">

							Click here to go back to the main page:
						</p>
						<div class="mt-5 flex">
							<RouterLink to="/"
								class="w-full rounded-lg bg-gradient-to-br from-primary-500 to-secondary-800 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-secondary-200 dark:focus:ring-secondary-800">
								Back to the Start
							</RouterLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
