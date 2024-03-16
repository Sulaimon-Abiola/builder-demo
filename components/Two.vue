<template>
	<section class="px-5 py-10 md:py-20 bg-[#f2f2f2]">
		<div class="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-5 md:gap-28 items-center">
			<div class="flex-1">
				<div class="capitalize mb-1 font-medium">{{ content?.subtitle }}</div>

				<h1 class="text-3xl font-semibold capitalize mb-3">{{ content?.title }}</h1>

				<p>{{ content?.description }}</p>
			</div>

			<div class="flex-1">
				<img class="w-full" :src="content?.image" />
			</div>
		</div>
	</section>
</template>

<script setup>
	defineProps({
		id: {
			type: String,
		},
		type: {
			type: String,
		},
		content: {
			type: Object,
		},
	})
</script>
