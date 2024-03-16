<template>
	<section class="px-5 py-10 md:py-20">
		<div class="max-w-[1200px] mx-auto">
			<h1 class="text-xl md:text-5xl text-center font-semibold max-w-2xl mx-auto capitalize">
				{{ content?.title }}
			</h1>

			<div class="text-center pt-5 md:pt-10">
				<button class="px-6 py-3 rounded-lg bg-primary font-medium text-white capitalize">
					{{ content?.button }}
				</button>
			</div>

			<div class="max-w-5xl mx-auto pt-5 md:pt-10">
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
